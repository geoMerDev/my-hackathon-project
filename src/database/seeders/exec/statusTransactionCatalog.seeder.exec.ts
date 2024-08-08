import { CustomError } from "../../../shared/errors/custom.error";
import statusTransactionCatalogSeederData from "../data/statusTransactionCatalog.seeder.data";
import * as StatusTransactionService from '../../../services/StatusTransactionCatalogService';
import { StatusTransactionCatalogRegisterDto } from "../../../types/dtos/statusTransactionCatalog/statusTransactionCatalog-register.dto";

export class StatusTransactionCatalogSeederExec {
    public static async up() {
        try {
            for (let i = 0; i < statusTransactionCatalogSeederData.length; i++) {
                const [error, statusTransactionCatalogDto] = StatusTransactionCatalogRegisterDto.create(statusTransactionCatalogSeederData[i]);
                if (error) throw CustomError.internalSever(error);
                if (statusTransactionCatalogDto) {
                    await StatusTransactionService.createStatusTransaction(statusTransactionCatalogDto);
                }
            }
        } catch (error: any) {
            throw CustomError.internalSever(error.message);
        }
    }
}
