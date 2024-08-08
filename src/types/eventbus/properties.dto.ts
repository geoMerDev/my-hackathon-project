import { HeadersDto } from "./headers.dto";

export class PropertiesDto {
    private constructor(
        public contentType: string,
        public contentEncoding: string | undefined,
        public headers: HeadersDto,
        public deliveryMode: number | undefined,
        public priority: number | undefined,
        public correlationId: number | undefined,
        public replyTo: number | undefined,
        public expiration: number | undefined,
        public messageId: string | undefined,
        public timestamp: number,
        public type: string,
        public userId: number | undefined,
        public appId: string,
        public clusterId: number | undefined
    ) {}

    static create({
        contentType,
        contentEncoding,
        headers,
        deliveryMode,
        priority,
        correlationId,
        replyTo,
        expiration,
        messageId,
        timestamp,
        type,
        userId,
        appId,
        clusterId
    }: {
        contentType: string;
        contentEncoding?: string;
        headers: HeadersDto;
        deliveryMode?: number;
        priority?: number;
        correlationId?: number;
        replyTo?: number;
        expiration?: number;
        messageId?: string;
        timestamp: number;
        type: string;
        userId?: number;
        appId: string;
        clusterId?: number;
    }): PropertiesDto {
        return new PropertiesDto(
            contentType,
            contentEncoding,
            headers,
            deliveryMode,
            priority,
            correlationId,
            replyTo,
            expiration,
            messageId,
            timestamp,
            type,
            userId,
            appId,
            clusterId
        );
    }
}
