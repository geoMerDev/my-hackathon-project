import { EventReceiveQueue } from "../models/eventReceiveQueue"

export const DbSequelize = (): Promise<void> => {
    return new Promise(async (resolve, reject) => {
        try {
            //sync models with database
           await EventReceiveQueue.sync()

           
            resolve()
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })
}
