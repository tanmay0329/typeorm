import { Request, Response } from 'express';
import {User} from "../entity/User"
import { getManager, getRepository } from 'typeorm'

const homeDetailOLD = async(req:Request, resp:Response) => {

    const entityManager = getManager();

    // insert
    // let data = await entityManager.insert(User,{
    //     name: "test",
    //     email: "test@gmail.com",
    //     phone: "1234567890"

    // })

    // save
    // let user = new User()  
    // user.name = "test2"
    // user.email = "test2@gmail.com"
    // user.phone = "12345678902"

    //update
    // let data1 = await entityManager.update(User, 4, {
    //     name: "updated name"
    // })

    // delete
    // let data2 = await entityManager.delete(User, 4)

    //find
    // let data = await entityManager.find(User)



    let data = await entityManager.save(User)


    resp.json({
        test: 'ok',
        data: data
    })
}





const homeDetail = async(req:Request, resp:Response) => {

    const repository = getRepository(User);

    // insert
    // let data = await entityManager.insert(User,{
    //     name: "test",
    //     email: "test@gmail.com",
    //     phone: "1234567890"

    // })

    // save
    // let user = new User()  
    // user.name = "test2"
    // user.email = "test2@gmail.com"
    // user.phone = "12345678902"

    //update
    // let data1 = await entityManager.update(User, 4, {
    //     name: "updated name"
    // })

    // delete
    // let data2 = await entityManager.delete(User, 4)

    //find
    // let data = await entityManager.find(User)



    let data = await repository.save(User)


    resp.json({
        test: 'ok',
        data: data
    })
}


export {
    homeDetail
}
