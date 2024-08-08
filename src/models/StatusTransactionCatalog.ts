import { DataTypes, Model } from "sequelize"
import { sequelize } from "../database/sequelize";

interface StatusTransactionCatalogRow {
    id: number,
    uuid: string,
    abbreviation: string,
    name: string,
    description: string | null,
    createdAt?: Date,
    updatedAt?: Date,
    deletedAt?: Date | null
}

export class StatusTransactionCatalogSequelize extends Model<StatusTransactionCatalogRow,Omit<StatusTransactionCatalogRow, 'id'>> {
    declare id: number
    declare uuid: string
    declare abbreviation: string
    declare name: string
    declare description: string | null
    declare readonly createdAt: Date
    declare readonly updatedAt: Date
    declare readonly deletedAt: Date
}

StatusTransactionCatalogSequelize.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    uuid:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    abbreviation:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    name:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: true
    }
},{
    sequelize,
    modelName: 'status_transaction_catalog',
    timestamps: true,
    paranoid: true,
    underscored: true
})
