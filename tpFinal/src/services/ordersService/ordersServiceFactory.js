import db from "../../persistance/db/index.js";
import OrdersRepository from "../../repositories/OrdersRepository.js";
import OrdersService from "./OrdersService.js";

const repo = new OrdersRepository(db.orders);

export default new OrdersService(repo);