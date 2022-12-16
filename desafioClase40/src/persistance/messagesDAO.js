import MongodbContainer from "./containers/MongodbContainer.js";
import { PERS } from "../../config.js";

let messagesDao;

switch(PERS){
    case "mongoAtlas":
        messagesDao = new MongodbContainer('messages')
}

export default messagesDao;
