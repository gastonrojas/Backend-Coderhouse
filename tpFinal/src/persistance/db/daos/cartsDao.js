import MongodbContainer from "../../containers/MongodbContainer.js"
import { PERS } from "../../../config.js";

let cartsDao;

switch(PERS){
    case "mongodb":
        cartsDao = new MongodbContainer('carts')
}

export default cartsDao;
