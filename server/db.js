import knex from 'knex'
import { mysql as config } from './env'

const db = knex(config)

export default db