import { IsInt, Min, Max } from "class-validator";

export class Enemy {
  name!: string;

  @IsInt()
  @Min(0)
  @Max(10)
  level!: number;

  emoji!: string;
  attackName!: string;
  attacks() {
    return `${this.name} ${this.attackName} you!`;
  }
}
