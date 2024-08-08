import { StatusTransactionCatalogSequelize } from '../models/StatusTransactionCatalog';
import { StatusTransactionCatalogRegisterDto } from '../types/dtos/statusTransactionCatalog/statusTransactionCatalog-register.dto';
import { v4 as uuidV4 } from 'uuid';
export const createStatusTransaction = async (data: StatusTransactionCatalogRegisterDto) => {
    return await StatusTransactionCatalogSequelize.create({
        uuid: uuidV4(),
        name: data.name,
        abbreviation: data.abbreviation,
        description: data.description,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
    });
};

export const getAllStatusTransactions = async () => {
    return await StatusTransactionCatalogSequelize.findAll();
};

export const getStatusTransactionById = async (id: number) => {
    return await StatusTransactionCatalogSequelize.findByPk(id);
};

export const getStatusTransactionByAbbreviation = async (abbreviation: string) => {
    return await StatusTransactionCatalogSequelize.findOne({
        where: { abbreviation }
    });
};

export const updateStatusTransaction = async (id: number, data: StatusTransactionCatalogRegisterDto) => {
    const [updated] = await StatusTransactionCatalogSequelize.update(data, {
        where: { id }
    });
    if (updated) {
        return await StatusTransactionCatalogSequelize.findByPk(id);
    }
    return null;
};

export const deleteStatusTransaction = async (id: number) => {
    const deleted = await StatusTransactionCatalogSequelize.destroy({
        where: { id }
    });
    return deleted;
};

