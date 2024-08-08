
import { PropertiesDto } from "./properties.dto";

export class DispatchEventDto {
    private constructor(
        public properties: PropertiesDto,
        public content: any
    ){}

    static create(object:{[key:string]:any}):[string?,DispatchEventDto?]{
        const {
            properties,
            content
        } = object

        return [
            undefined,
            new DispatchEventDto(
                properties,
                content.toString()
            )
        ]
    }
}
