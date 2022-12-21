import MongodbContainer from "./containers/MongodbContainer.js";
import { PERS } from "../../config.js";

let usersDao;

switch(PERS){
    case "mongoAtlas":
        usersDao = new MongodbContainer('users')
}



export default usersDao;
