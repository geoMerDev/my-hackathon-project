import {EventReceiveQueue} from "../models/eventReceiveQueue"
import {StatusTransactionCatalogSequelize} from "../models/StatusTransactionCatalog";
import {EventHistoryRecordSequelize} from "../models/EventHistoryRecord";
import {StatusTransactionCatalogSeederExec} from "./seeders/exec/statusTransactionCatalog.seeder.exec";

export const DbSequelize = (): Promise<void> => {
    return new Promise(async (resolve, reject) => {
        try {
            //sync models with database
            await EventReceiveQueue.sync()
            await StatusTransactionCatalogSequelize.sync()
            await EventHistoryRecordSequelize.sync()


            // seeder
            await StatusTransactionCatalogSeederExec.up();

            resolve()
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}
