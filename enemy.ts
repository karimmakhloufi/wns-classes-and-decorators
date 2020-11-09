import { IsInt, Min, Max } from "class-validator";

export class Enemy {
  name;

  @IsInt()
  @Min(0)
  @Max(10)
  level: number;

  emoji;
  attackName;
  enemy;
  attacks() {
    return `${this.name} ${this.attackName} you!`;
  }
}
