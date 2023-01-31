import db from "../../persistance/db/index.js";
import UsersRepository from "../../repositories/UsersRepository.js";
import UsersService from "./UsersService.js";

const repo = new UsersRepository(db.users);

export default new UsersService(repo);