import { validate } from "class-validator";
import { plainToClass } from "class-transformer";

import { Enemy } from "./enemy";

const spider = plainToClass(Enemy, {
  name: "spider",
  level: 12,
  emoji: "🕷",
  attackName: "bites",
});

console.log(spider);

validate(spider).then((errors) => console.log(errors));
