import MongodbContainer from "../../containers/MongodbContainer.js"
import { PERS } from "../../../config.js";

let productsDao;

switch(PERS){
    case "mongodb":
        productsDao = new MongodbContainer('products')
}

export default productsDao;
