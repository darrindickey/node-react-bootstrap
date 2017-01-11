import knex from 'knex'
import { mysql as config } from 'server/env'

const db = knex(config)

export default db