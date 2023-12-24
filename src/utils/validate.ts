import { User } from "../types/User";

type Error = {
    [key: string]: string
}

export const validate = (data: User) =>{
    const errors: Error = {}

    if(!data.name){
        errors['name'] = 'O nome é obrigatório'
    }

    if(!data.email  ){
        errors['email'] = 'O email é obrigatório'
    }

    if(!data.checkbox){
        errors['checkbox'] = 'Você precisa concordar com os termos'
    }

    return errors
}