import User from "./User.js";

export default class UsersRepository{
    constructor(dao){
        this.dao = dao
    }

    async getUser(username){
        const user = await this.dao.getUserByUsername(username);
        if(!user) return null
        const userInstance = new User(user);

        return userInstance
    }
    
    
    async getById(id){
        const user = await this.dao.getById(id)
        return new User(user)
    }
    
    async storeUser(user){
        await this.dao.save(user)
    }

}
