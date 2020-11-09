import { validate } from "class-validator";
import { plainToClass } from "class-transformer";

import { Enemy } from "./enemy";

const spider = plainToClass(Enemy, {
  name: "spider",
  level: 10,
  emoji: "🕷",
  attackName: "bites",
  skills: [{ name: "skill1" }],
});

validate(spider).then((errors) => console.log(errors));
