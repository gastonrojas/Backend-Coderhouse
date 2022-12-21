import MongodbContainer from "./containers/MongodbContainer.js";
import { PERS } from "../../config.js";

let productsDao;

switch(PERS){
    case "mongoAtlas":
        productsDao = new MongodbContainer('productos')
}

export default productsDao;
