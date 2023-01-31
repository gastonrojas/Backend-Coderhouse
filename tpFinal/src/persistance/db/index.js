import usersDao from "./daos/usersDao.js";
import productsDao from "./daos/productsDao.js";
import cartsDao from "./daos/cartsDao.js";
import ordersDao from "./daos/ordersDao.js";

const db = {
    users: usersDao,
    products: productsDao,
    carts: cartsDao,
    orders: ordersDao
}

export default db