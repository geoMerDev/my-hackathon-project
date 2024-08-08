export class StatusTransactionCatalogRegisterDto {
    constructor(
        public abbreviation: string,
        public name: string,
        public description: string | null
    ){}

    static create(object:{[key:string]:any}):[string?,StatusTransactionCatalogRegisterDto?] {
        const {
            abbreviation,
            name,
            description
        } = object

        return [
            undefined,
            new StatusTransactionCatalogRegisterDto(
                abbreviation,
                name,
                description
            )
        ]
    }
}