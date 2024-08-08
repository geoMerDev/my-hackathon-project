export class EventReceiveQueueDto {
    constructor(
        public uuid: string,
        public signature: string,
        public propertiesData: object,
        public data: object,
        public numberOfAttempts: number,
        public processedAt: Date,
        public createdAt?: Date,
        public updatedAt?: Date,
        public deletedAt?: Date | null
    ) {}

    static create(object: { [key: string]: any }): [string?, EventReceiveQueueDto?] {
        const {
            uuid,
            signature,
            propertiesData,
            data,
            numberOfAttempts,
            processedAt,
            createdAt,
            updatedAt,
            deletedAt
        } = object;

        return [
            undefined,
            new EventReceiveQueueDto(
                uuid,
                signature,
                propertiesData,
                data,
                numberOfAttempts,
                processedAt,
                createdAt,
                updatedAt,
                deletedAt
            )
        ];
    }
}
