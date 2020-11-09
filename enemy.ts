import "reflect-metadata";
import { Type } from "class-transformer";
import { IsInt, Min, Max, ValidateNested } from "class-validator";

class Skill {
  name!: string;

  @IsInt()
  level!: number;
}

export class Enemy {
  name!: string;

  @IsInt()
  @Min(0)
  @Max(10)
  level!: number;

  emoji!: string;
  attackName!: string;

  @Type(() => Skill)
  @ValidateNested({ each: true })
  skills!: Skill[];
  attacks() {
    return `${this.name} ${this.attackName} you!`;
  }
}
