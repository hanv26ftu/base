import { Optional } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class GetListFlowerDto {
    @IsOptional()
    category: string;
}
