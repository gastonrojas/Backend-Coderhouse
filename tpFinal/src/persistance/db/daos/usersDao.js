import MongodbContainer from "../../containers/MongodbContainer.js"
import { PERS } from "../../../config.js";

let usersDao;

switch(PERS){
    case "mongodb":
        usersDao = new MongodbContainer('users')
}

export default usersDao;
