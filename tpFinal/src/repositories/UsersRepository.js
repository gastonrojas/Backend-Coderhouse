import User from "../entities/User.js";

export default class UsersRepository{
    constructor(dao){
        this.dao = dao;
    }

    storeUser(user){
        this.dao.save(user);
    };

    async getUserByEmail(email){
        const user = await this.dao.getByField({email});
        if(!user) return null
        return new User(user);
    };

    async getUserByid(id){
        const user  = await this.dao.getById(id);
        if(!user) return null
        return new User(user)
    };
}