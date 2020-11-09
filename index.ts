import { validate } from "class-validator";
import { plainToClass } from "class-transformer";

import { Enemy } from "./enemy";

const spider = plainToClass(Enemy, {
  name: "spider",
  level: 12,
  emoji: "🕷",
  attackName: "bites",
});

validate(spider).then((errors) => console.log(errors));
