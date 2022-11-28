import { IsNotEmpty, IsString } from "class-validator";

export class CreateHeroDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
