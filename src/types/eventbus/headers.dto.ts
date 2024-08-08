export class HeadersDto {
    private constructor(
        public content_type: string,
        public type: string
    ){}
    static create({ content_type, type }: { content_type: string; type: string }): HeadersDto {
        return new HeadersDto(content_type, type);
    }
}
