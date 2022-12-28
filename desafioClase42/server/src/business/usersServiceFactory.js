import usersDao from "../persistance/usersDAO.js";
import UsersRepository from "./UsersRepository.js";
import UsersService from "./UsersService.js";

const repo = new UsersRepository(usersDao);

export default new UsersService(repo);