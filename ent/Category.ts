import { EntitySchema } from "typeorm"

export interface Category {
    id: number;
    name: string;
    description: string;
}

export const Category = new EntitySchema<Category>({
    name: "Category",
    tableName: "categories",
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        name: {
            type: String
        },
        description: {
            type: String
        }
    }
});