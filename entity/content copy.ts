import {Column, PrimaryGeneratedColumn} from "typeorm";     

export abstract class content {
    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
    name: string;

    @Column()
    desc: string;
    
}