interface course {
    name: string;
    duration: number;
    educator: string;
}

class CreateService {
    
    execute({name, duration, educator}: course){
        console.log(name, duration, educator)
    }  
}

export default new CreateService();