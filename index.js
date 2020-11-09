import { Enemy } from "./enemy.js";

console.log("Hello from node");

const spider = new Enemy("spider", 1, "🕷", "bites");
const bear = new Enemy("bear", 20, "🐻", "scratches");
const sname = new Enemy("snake", 6, "🐍", "bites");

console.log(spider);

console.log(spider.attacks());
