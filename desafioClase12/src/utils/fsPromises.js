const fs = require('fs')

const getAll = async (route) => {
    try {
      const data = await fs.promises.readFile(route, 'utf-8');
      return data ? JSON.parse(data) : [];
    } catch (error) {
      console.error(error);
    }
  };

const save = async (route, obj) => {
    try {
      let data = await getAll(route);
      let id = !data.length ? 1 : parseInt(data[data.length - 1].id) + 1;
      data = [...data, { ...obj, id: id }];
      console.log(route, data)
      await fs.promises.writeFile(route, data);
    
    } catch (err) {
      console.error(err);
    }
  }

  module.exports = {
    getAll,
    save
  }