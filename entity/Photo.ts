import {Entity, Column, ChildEntity} from "typeorm";     
import {content} from "./content";

@ChildEntity()
export class Photo extends content{
    @Column()
    size: string;
}