import {Entity,Column,ChildEntity} from "typeorm";     
import {content} from "./content";

@ChildEntity()
export class Post extends content{
    @Column()
    viewcount: string;
}