import { validate } from "class-validator";
import { Enemy } from "./enemy";

console.log("Hello from node");

const spider = new Enemy("spider", 12, "🕷", "bites");
const bear = new Enemy("bear", 20, "🐻", "scratches");
const sname = new Enemy("snake", 6, "🐍", "bites");

validate(spider).then((errors) => console.log(errors));

console.log(spider);

console.log(spider.attacks());
