export class Enemy {
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
