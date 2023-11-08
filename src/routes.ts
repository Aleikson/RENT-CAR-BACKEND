import { Request, Response } from 'express'
import CreateService from './CreateService'

export function CreateCourse(request: Request, response: Response){

    CreateService.execute({
        name: 'Nodejs',
        duration: 10,
        educator: 'Silva'
    })

    return response.send();

}