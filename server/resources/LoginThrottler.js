import redis from 'server/resources/redis'
import { LOGIN_THROTTLING } from 'server/constants'

export default class LoginThrottler {

	constructor(email, ip) {
		this.key = this.generateKey(email, ip)
	}

	generateKey(email, ip) {
		return `${LOGIN_THROTTLING.PREFIX}::${email}::${ip}`
	}

	validate() {
		return redis.hgetallAsync(this.key).then((result) => {
			if (result === null) {
				return Promise.resolve(null)
			}

			const createdTimestamp = parseInt(result.createdTimestamp, 10)

			if (isNaN(createdTimestamp)) {
				return Promise.resolve(null)
			}

			const threshold = Date.now() - (LOGIN_THROTTLING.LOCK_TIME * 1000)

			if (createdTimestamp > threshold) {
				return Promise.reject(null)
			}

			// enough time has elapsed, remove entry and continue to login ..
			return this.reset().then(() => {
				return Promise.resolve(null)
			})
		})
	}

	increment() {
		return redis.hgetallAsync(this.key).then((result) => {
			if (result === null) {
				return redis.hmsetAsync(this.key, {
					'attempts': 1,
					'createdTimestamp': ''
				})
			}

			let attempts = parseInt(result.attempts, 10)
			let createdTimestamp = ''

			if (attempts >= LOGIN_THROTTLING.MAX_ATTEMPTS) {
				createdTimestamp = Date.now()
			}

			attempts = attempts + 1

			return redis.hmsetAsync(this.key, {
				'attempts': attempts,
				'createdTimestamp': createdTimestamp
			})
		})
	}

	reset() {
		return redis.delAsync(this.key).then((result) => {
			return Promise.resolve(result)
		})
	}

	getMessage() {
		return redis.hgetallAsync(this.key).then((result) => {
			const createdTimestamp = parseInt(result.createdTimestamp, 10)
			const threshold = Date.now() - (LOGIN_THROTTLING.LOCK_TIME * 1000)

			const countdown = parseInt(((createdTimestamp - threshold) / 1000), 10)
			const message = `Too many login attempts. Try again in ${countdown} seconds`	

			return Promise.resolve(message)
		})
	}
}

