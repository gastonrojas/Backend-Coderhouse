import MongodbContainer from "../../containers/MongodbContainer.js"
import { PERS } from "../../../config.js";

let ordersDao;

switch(PERS){
    case "mongodb":
        ordersDao = new MongodbContainer('orders')
}

export default ordersDao;
