import bluebird from 'bluebird'
import redis from 'redis'

import { redis as redisConf } from 'server/env'

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const redisClient = redis.createClient({
	host: redisConf.host,
	port: redisConf.port
})

export default redisClient