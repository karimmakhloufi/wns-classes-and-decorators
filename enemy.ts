export class Enemy {
  name;
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
