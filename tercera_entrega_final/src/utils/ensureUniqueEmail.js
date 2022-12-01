import users from "../containers/MongodbContainer.js"

const ensureUniqueEmail = async function (username){
      const user = await users.getByField({username});
      if (user) throw new Error('NOT_AVAILABLE: Nombre de usuario no disponible. Intente nuevamente con otro nombre.')
      else return true
};

export default ensureUniqueEmail;