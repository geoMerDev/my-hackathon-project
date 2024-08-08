import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/sequelize";

interface EventReceiveQueueRow {
  id: number;
  uuid: string;
  signature: string;
  propertiesData: object;
  data: object;
  numberOfAttempts: number;
  processedAt: Date;
  createdAt?: Date,
  updatedAt?: Date,
  deletedAt?: Date | null
}

export class EventReceiveQueue extends Model<
  EventReceiveQueueRow,
  Omit<EventReceiveQueueRow, "id">
> {
  declare id: number;
  declare uuid: string;
  declare signature: string;
  declare propertiesData: object;
  declare data: object;
  declare numberOfAttempts: number;
  declare processedAt: Date;
  declare readonly createdAt: Date
  declare readonly updatedAt: Date
  declare readonly deletedAt: Date | null
}

EventReceiveQueue.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    uuid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    signature: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    propertiesData: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    data: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    numberOfAttempts: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    processedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "event_receive_queue",
    timestamps: true,
    underscored: true,
    paranoid: true,
  }
);
