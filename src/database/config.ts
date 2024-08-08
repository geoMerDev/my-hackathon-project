import {Options} from 'sequelize'
import AppConfig from '../config/configEnv'

export const config: Options = {
    host: AppConfig.DB_HOST,
    username: AppConfig.DB_USERNAME,
    password: AppConfig.DB_PASSWORD,
    logging: false,
    port: AppConfig.DB_PORT,
    database: AppConfig.DB_NAME,
    dialect: 'postgres'
}