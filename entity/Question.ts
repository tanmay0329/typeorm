import {Entity, Column, ChildEntity} from "typeorm";     
import {content} from "./content";

@ChildEntity()
export class Question extends content{
    @Column()
    questioncount: string;
}