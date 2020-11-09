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
  constructor(name, level, emoji, attackName) {
    this.name = name;
    this.level = level;
    this.emoji = emoji;
    this.attackName = attackName;
    this.enemy = true;
  }
  attacks() {
    return `${this.name} ${this.attackName} you!`;
  }
}
