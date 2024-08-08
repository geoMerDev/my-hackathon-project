import {Channel, connect, Connection} from 'amqplib'
import {assertExchange, assertQueue, config, eventList} from './config'
import AppConfig from "../config/configEnv"
import {DispatchEventDto} from '../types/eventbus/dispatchEvent.dto'


export class Rabbitmq {
    private static _connection: Connection
    private static _channel: Channel

    public static async connection() {
        try {
            this._connection = await connect(config)
            this._channel = await this._connection.createConfirmChannel()
        } catch (e) {
            console.log(e)
        }
    }

    public static async setQueue() {
        if (this._channel) {
            await this._channel.assertQueue(
                AppConfig.RABBIT_QUEUE,
                assertQueue
            )

            await this._channel.assertExchange(
                AppConfig.RABBIT_EXCHANGE,
                AppConfig.RABBIT_TYPE_EXCHANGE,
                assertExchange
            )

            await this._channel.bindQueue(
                AppConfig.RABBIT_QUEUE,
                AppConfig.RABBIT_EXCHANGE,
                AppConfig.RABBIT_ROUTING_KEY
            )

            await this._channel.prefetch(Number(AppConfig.RABBIT_PREFETCH))
        } else {
            console.log("Channel not found")
        }
    }

    public static async consume() {
        if (this._channel) {
            await this._channel.consume(
                AppConfig.RABBIT_QUEUE,
                async (msg) => {
                    try {
                        const [error, eventDto] = DispatchEventDto.create(msg!)
                        await this.messageHandler(eventDto!)
                    } catch (error) {
                        console.log(error)
                    }
                    this._channel.ack(msg!)
                }
            )
        } else {
            console.log("Channel not found")
        }
    }

    private static async messageHandler(msg: DispatchEventDto) {
        const eventProcessor = eventList.get(msg.properties.type)
        if (eventProcessor) {
            // //save event in event receiving queue
            // const [error, eventReceivingQueueDto] = EventReceivingQueueDto.create(msg)
            // if (error) { console.log(error); }
            // await new EventReceivingQueueDatasourceImpl().register(eventReceivingQueueDto!)
            //
            // await eventProcessor(JSON.parse(msg.content))
        } else {
            console.log("Event not found")
        }
    }


    public static async publishToExchange(message: DispatchEventDto): Promise<boolean> {
        if (!this._channel) {
            console.log("Channel not found");
            return false;
        }

        try {
            // Crear el buffer del contenido del mensaje
            const contentBuffer = Buffer.from(message.content);

            // Preparar las opciones del mensaje, incluyendo las propiedades personalizadas
            const options = {
                contentType: message.properties.contentType,
                // headers: message.properties.headers,
                // deliveryMode: message.properties.deliveryMode,
                messageId: message.properties.messageId,
                // timestamp: message.properties.timestamp,
                type: message.properties.type,
                appId: message.properties.appId
            };

            // Publicar el mensaje en el exchange con las opciones adecuadas
            this._channel.publish(AppConfig.RABBIT_EXCHANGE, AppConfig.RABBIT_ROUTING_KEY, contentBuffer, options);
            console.log("Message published to exchange");
            return true;
        } catch (error) {
            console.error("Failed to publish message", error);
            return false;
        }
    }

    public static async init() {
       console.log("Rabbitmq init")
        await this.connection()
        await this.setQueue()
        await this.consume()
        console.log("Rabbitmq init done")
    }
}
