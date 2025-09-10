import { EntitySchema } from "typeorm";

export const Person = new EntitySchema({
  name: "Person",
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    name: {
      type: String,
      length: 20,
    },
    age: {
      type: Number,
      nullable: false,
    },
  },
  checks: [
    { expression: `"age" > 18` } // constraint at entity level
  ]
});
