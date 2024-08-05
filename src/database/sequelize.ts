import {Sequelize} from "sequelize";
import {config} from "./config";

console.log(config)
export const sequelize = new Sequelize(config)