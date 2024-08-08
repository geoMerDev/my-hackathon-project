import {EventHistoryRecordSequelize} from '../models/EventHistoryRecord';
import {EventHistoryRecordRegisterDto} from '../types/dtos/eventHistoryRecord/eventHistoryRecord-register.dto';
import {getStatusTransactionByAbbreviation} from "./StatusTransactionCatalogService";
import appConstants from "../shared/constants";

export const createEventHistoryRecord = async (data: EventHistoryRecordRegisterDto) => {
    return await EventHistoryRecordSequelize.create(data);
};

export const getAllEventHistoryRecords = async () => {
    return await EventHistoryRecordSequelize.findAll();
};

export const getEventHistoryRecordById = async (id: number) => {
    return await EventHistoryRecordSequelize.findByPk(id);
};

export const updateEventHistoryRecord = async (id: number, data: EventHistoryRecordRegisterDto) => {
    const [updated] = await EventHistoryRecordSequelize.update(data, {
        where: {id}
    });
    if (updated) {
        return await EventHistoryRecordSequelize.findByPk(id);
    }
    return null;
};

export const deleteEventHistoryRecord = async (id: number) => {
    const deleted = await EventHistoryRecordSequelize.destroy({
        where: {id}
    });
    return deleted;
};

export const getPublishedEventHistoryRecord = async () => {
    const status = await getStatusTransactionByAbbreviation(appConstants.statusTransactionCatalog.sentToRabbit.abbreviation);
    if (status && status.id) {
        return await EventHistoryRecordSequelize.findAll({
            where: {
                statusTransactionCatalogId: status.id
            }
        });
    }
    return [];
};


export const getErrorEventHistoryRecord = async () => {
    const status = await getStatusTransactionByAbbreviation(appConstants.statusTransactionCatalog.failedToSendToRabbit.abbreviation);
    if (status && status.id) {
        return await EventHistoryRecordSequelize.findAll({
            where: {
                statusTransactionCatalogId: status.id
            }
        });
    }
    return [];
}
