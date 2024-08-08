export class EventHistoryRecordRegisterDto {
    constructor(
        public uuid: string,
        public eventSignature: string,
        public payload: object,
        public statusTransactionCatalogId: number,
        public sendAttempts: number,
        public processId: number,
        public sentAt: Date | null,
    ) {
    }

    static create(object: { [key: string]: any }): [string?, EventHistoryRecordRegisterDto?] {
        const {

            uuid,
            eventSignature,
            payload,
            statusTransactionCatalogId,
            sendAttempts,
            processId,
            sentAt,
        } = object;

        if (!uuid) return ['uuid is required'];
        if (!eventSignature) return ['eventSignature is required'];
        if (!payload) return ['payload is required'];
        if (!statusTransactionCatalogId) return ['statusTransactionCatalogId is required'];
        if (!sendAttempts) return ['sendAttempts is required'];
        if (!processId) return ['processId is required'];

        return [
            undefined,
            new EventHistoryRecordRegisterDto(
                uuid,
                eventSignature,
                payload,
                statusTransactionCatalogId,
                sendAttempts,
                processId,
                sentAt,
            )
        ];
    }
}
