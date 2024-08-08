import {DataTypes, Model} from 'sequelize';
import { sequelize } from "../database/sequelize";
import {StatusTransactionCatalogSequelize} from './StatusTransactionCatalog';


interface EventHistoryRecordAttributes {
    id: number;
    uuid: string;
    eventSignature: string;
    payload: any;
    statusTransactionCatalogId: number;
    sendAttempts: number;
    sentAt?: Date | null;
    createdAt?: Date,
    updatedAt?: Date,
    deletedAt?: Date | null
}

export class EventHistoryRecordSequelize extends Model<EventHistoryRecordAttributes, Omit<EventHistoryRecordAttributes, 'id'>> implements EventHistoryRecordAttributes {
    declare id: number;
    declare uuid: string;
    declare eventSignature: string;
    declare payload: any;
    declare statusTransactionCatalogId: number;
    declare sendAttempts: number;
    declare  sentAt: Date | null;
    declare readonly createdAt: Date;
    declare readonly updatedAt: Date;
    declare readonly deletedAt: Date

}

EventHistoryRecordSequelize.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    uuid: {
        type: DataTypes.STRING(36),
        allowNull: false,
    },
    eventSignature: {
        type: DataTypes.STRING(255),
        allowNull: false,

    },
    payload: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    statusTransactionCatalogId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: StatusTransactionCatalogSequelize,
            key: 'id',
        },

    },

    sendAttempts: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,

    },
    sentAt: {
        type: DataTypes.DATE,
        allowNull: true,

    },
}, {
    sequelize,
    modelName: 'EventHistoryRecord',
    tableName: 'event_history_records',
    timestamps: true,
    underscored: true,
    paranoid: true,
    indexes: [
        {
            name: 'uuid_index',
            fields: ['uuid'],
        },
        {
            name: 'status_transaction_catalog_id_index',
            fields: ['status_transaction_catalog_id'],
        },

    ],
});

EventHistoryRecordSequelize.belongsTo(StatusTransactionCatalogSequelize, {
    foreignKey: 'statusTransactionCatalogId',
    as: 'statusTransactionCatalog',
});


