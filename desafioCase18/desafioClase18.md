# Desafio clase 18 - Backend **Coderhouse**

## 1)y2) Agrego documentos con root

### Input

```sh
> db.products.insertMany([{title: 'remera', price: 2300, thumbnail: 'none'}, {title: 'cordon', price: 120, thumbnail: 'none'}, {title: 'pulsera', price: 580, thumbnail: 'none'}, {title: 'soquetes', price: 900, thumbnail: 'none'}, {title: 'medias', price: 1280, thumbnail: 'none'}, {title: 'vincha', price: 1700, thumbnail: 'none'}, {title: 'gorra', price: 2860, thumbnail: 'none'}, {title: 'short', price: 3350, thumbnail: 'none'}, {title: 'buzo', price: 4320, thumbnail: 'none'}, {title: 'pantalon', price: 4990, thumbnail: 'none'}])
```

### Output

```sh
  acknowledged: true,
{
  insertedIds: {
    '0': ObjectId("63253110127cb65172faf4cf"),
    '1': ObjectId("63253110127cb65172faf4d0"),
    '2': ObjectId("63253110127cb65172faf4d1"),
    '3': ObjectId("63253110127cb65172faf4d2"),
    '4': ObjectId("63253110127cb65172faf4d3"),
    '5': ObjectId("63253110127cb65172faf4d4"),
    '6': ObjectId("63253110127cb65172faf4d5"),
    '7': ObjectId("63253110127cb65172faf4d6"),
    '8': ObjectId("63253110127cb65172faf4d7"),
    '9': ObjectId("63253110127cb65172faf4d8")
  }
```

### Input

```sh
db.mensajes.insertMany([{date:'ya', mail:"un@mail.com", message: "hola"},{date:'ya', mail:"un@mail.com", message: "que"}, {date:'ya', mail:"un@mail.com", message: "tal?"},{date:'ya', mail:"un@mail.com", message: "todo"},{date:'ya', mail:"un@mail.com", message: "bien?"},{date:'ya', mail:"otro@mail.com", message: "yo"},{date:'ya', mail:"otro@mail.com", message: "bien"},{date:'ya', mail:"otro@mail.com", message: "tranki"},{date:'ya', mail:"otro@mail.com", message: "y"},{date:'ya', mail:"otro@mail.com", message: "vos?"}])
```
### Output

```sh
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("632539da127cb65172faf4d9"),
    '1': ObjectId("632539da127cb65172faf4da"),
    '2': ObjectId("632539da127cb65172faf4db"),
    '3': ObjectId("632539da127cb65172faf4dc"),
    '4': ObjectId("632539da127cb65172faf4dd"),
    '5': ObjectId("632539da127cb65172faf4de"),
    '6': ObjectId("632539da127cb65172faf4df"),
    '7': ObjectId("632539da127cb65172faf4e0"),
    '8': ObjectId("632539da127cb65172faf4e1"),
    '9': ObjectId("632539da127cb65172faf4e2")
  }
}
```

## 3) Listo todos los documentos de cada coleccion

### Input

```sh
    db.mensajes.find()
```

### Output

```sh
    [
  {
    _id: ObjectId("632539da127cb65172faf4d9"),
    date: 'ya',
    mail: 'un@mail.com',
    message: 'hola'
  },
  {
    _id: ObjectId("632539da127cb65172faf4da"),
    date: 'ya',
    mail: 'un@mail.com',
    message: 'que'
  },
  {
    _id: ObjectId("632539da127cb65172faf4db"),
    date: 'ya',
    mail: 'un@mail.com',
    message: 'tal?'
  },
  {
    _id: ObjectId("632539da127cb65172faf4dc"),
    date: 'ya',
    mail: 'un@mail.com',
    message: 'todo'
  },
  {
    _id: ObjectId("632539da127cb65172faf4dd"),
    date: 'ya',
    mail: 'un@mail.com',
    message: 'bien?'
  },
  {
    _id: ObjectId("632539da127cb65172faf4de"),
    date: 'ya',
    mail: 'otro@mail.com',
    message: 'yo'
  },
  {
    _id: ObjectId("632539da127cb65172faf4df"),
    date: 'ya',
    mail: 'otro@mail.com',
    message: 'bien'
  },
  {
    _id: ObjectId("632539da127cb65172faf4e0"),
    date: 'ya',
    mail: 'otro@mail.com',
    message: 'tranki'
  },
  {
    _id: ObjectId("632539da127cb65172faf4e1"),
    date: 'ya',
    mail: 'otro@mail.com',
    message: 'y'
  },
  {
    _id: ObjectId("632539da127cb65172faf4e2"),
    date: 'ya',
    mail: 'otro@mail.com',
    message: 'vos?'
  }
]
```

### Input 

```sh
    db.products.find()
```

### Output

```sh
[
  {
    _id: ObjectId("63253110127cb65172faf4cf"),
    title: 'remera',
    price: 2300,
    thumbnail: 'none'
  },
  {
    _id: ObjectId("63253110127cb65172faf4d0"),
    title: 'cordon',
    price: 120,
    thumbnail: 'none'
  },
  {
    _id: ObjectId("63253110127cb65172faf4d1"),
    title: 'pulsera',
    price: 580,
    thumbnail: 'none'
  },
  {
    _id: ObjectId("63253110127cb65172faf4d2"),
    title: 'soquetes',
    price: 900,
    thumbnail: 'none'
  },
  {
    _id: ObjectId("63253110127cb65172faf4d3"),
    title: 'medias',
    price: 1280,
    thumbnail: 'none'
  },
  {
    _id: ObjectId("63253110127cb65172faf4d4"),
    title: 'vincha',
    price: 1700,
    thumbnail: 'none'
  },
  {
    _id: ObjectId("63253110127cb65172faf4d5"),
    title: 'gorra',
    price: 2860,
    thumbnail: 'none'
  },
  {
    _id: ObjectId("63253110127cb65172faf4d6"),
    title: 'short',
    price: 3350,
    thumbnail: 'none'
  },
  {
    _id: ObjectId("63253110127cb65172faf4d7"),
    title: 'buzo',
    price: 4320,
    thumbnail: 'none'
  },
  {
    _id: ObjectId("63253110127cb65172faf4d8"),
    title: 'pantalon',
    price: 4990,
    thumbnail: 'none'
  }
]
```

## 4) Muestro la cantidad de documentos guardados en cad colleccion

### Input

```sh
  db.mensajes.estimatedDocumentCount()
```

### Output

```sh
  10
```

### Input

```sh
  db.mensajes.estimatedDocumentCount()
```

### Output

```sh
  10
```

## 5) CRUD

a) Agrego un nuevo producto 

### Input

```sh
  db.products.insertOne({name:"ojotas", price: 4330, image: "none"})
```

### Output

```sh
  {
  acknowledged: true,
  insertedId: ObjectId("63286d0060c7ee1fc12ed399")
}
```

b) i) Listo os productos con precio menor a 1000

### Input

```sh
db.productos.find({price:{$lt: 1000}})
```

### Output

```sh
[
  {
    _id: ObjectId("6286a05e0aa214cf81fac385"),
    name: 'remera',
    price: 105,
    image: 'none'
  },
  {
    _id: ObjectId("6286a0d83ac0fb1a71aa3640"),
    name: 'remeraRoja',
    price: 590,
    image: 'none'
  },
  {
    _id: ObjectId("6286a0eb3ac0fb1a71aa3641"),
    name: 'remeraAzul',
    price: 880,
    image: 'none'
  }
]
```

b) ii) Listar los productos con precio entre los 1000 a 3000 pesos.

### Input

```sh
  db.productos.find({$and:[ {price:{$gt: 1000}}, {price:{$lt: 3000}}]})
```

### Output

```sh
  [
  {
    _id: ObjectId("6286a1043ac0fb1a71aa3642"),
    name: 'pantalonRiverPlate',
    price: 1300,
    image: 'none'
  },
  {
    _id: ObjectId("6286a11b3ac0fb1a71aa3643"),
    name: 'pantalonJean',
    price: 1799,
    image: 'none'
  },
  {
    _id: ObjectId("6286a15b3ac0fb1a71aa3645"),
    name: 'remeraRiverPlate',
    price: 2800,
    image: 'none'
  },
  {
    _id: ObjectId("6286a1703ac0fb1a71aa3646"),
    name: 'remeraRiverPlateNegra',
    price: 2999,
    image: 'none'
  }
]
```  

b) iii) Listar los productos con precio mayor a 3000 pesos.

### Input 

```sh
  db.productos.find({price:{$gt: 3000}})
```

### Output

```sh
[
  {
    _id: ObjectId("6286a1333ac0fb1a71aa3644"),
    name: 'pantalonCuero',
    price: 3255,
    image: 'none'
  },
  {
    _id: ObjectId("6286a1923ac0fb1a71aa3647"),
    name: 'buzoRiverPlate',
    price: 4360,
    image: 'none'
  },
  {
    _id: ObjectId("6286a1ac3ac0fb1a71aa3648"),
    name: 'camperonRiverPlate',
    price: 4999,
    image: 'none'
  },
  {
    _id: ObjectId("6286b05f3ac0fb1a71aa3653"),
    name: 'ojotas',
    price: 4330,
    image: 'none'
  }
]
```

b) iv) Realizar una consulta que traiga sólo el nombre del tercer producto más barato.

### Input

```sh
  db.products.find({}, {'title': 1, '_id': 0}).sort({price:1}).skip(2).limit(1)
```

### Output

```sh
  [ { title: 'soquetes' } ]
```

c) Hacer una actualización sobre todos los productos, agregando el campo stock a todos ellos con un valor de 100.

### Input 

```sh
  db.products.updateMany({}, { $set: {stock: 100 } })
```

### Output

```sh
  {
  acknowledged: true,
  insertedId: null,
  matchedCount: 11,
  modifiedCount: 11,
  upsertedCount: 0
}
```

d) Cambiar el stock a cero de los productos con precios mayores a 4000 pesos.

### Input 

```sh
  db.products.updateMany({price: {$gt: 4000}}, { $set: {stock: 0 } })
```

### Output

```sh
  {
  acknowledged: true,
  insertedId: null,
  matchedCount: 3,
  modifiedCount: 3,
  upsertedCount: 0
}
```

e) Borrar los productos con precio menor a 1000 pesos 

### Input

```sh
  db.products.deleteMany({price:{$lt: 1000}})
```

### Output

```sh
  { acknowledged: true, deletedCount: 3 }
```

## 6) Creo un usuario de solo lectura de la db coderhouse (llamada ecommerce en el enunciado)

### Input

```sh
  db.createUser({user:'pepe', pwd: 'asd456', roles:[{role: 'read', db:'coderhouse'}]})
```

### Output

```sh
  { ok: 1 }
```

## Una vez logueado con el usuario pepe pruebo realizar una insercion

### Input 

```sh
  db.products.insertOne({title: "zapaos rotos"})
```

### Output 

```sh
  MongoServerError: not authorized on coderhouse to execute command { insert: "products", documents: [ { title: "zapaos rotos", _id: ObjectId('63287c1192b28f124cc67c0a') } ], ordered: true, lsid: { id: UUID("b45e9d37-05d5-410c-84bc-ce7ffbdc39de") }, $db: "coderhouse" }
```
