import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
  @ApiProperty({example: "ADMIN", description: "Значение роли пользователя(уникальное)"})
  readonly value: string
  @ApiProperty({example: "Администартор", description: "Описание роли"})
  readonly description: string
}