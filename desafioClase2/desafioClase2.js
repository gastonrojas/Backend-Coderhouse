

class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros || [];
    this.mascotas = mascotas || [];
  }

  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }
  addMascota(nuevaMascota) {
    this.mascotas.push(nuevaMascota);
  }
  countMascotas() {
    return this.mascotas.length;
  }
  addBook(nombre, autor) {
    this.libros.push({ nombre: nombre, autor: autor });
  }
  getBookNames () {
    return this.libros.map(l=>l.nombre)
  }
}

const yo = new Usuario('Gaston', 'Rojas',);

console.log(yo.getFullName());
yo.addMascota('Kiya');
console.log(yo.countMascotas());
yo.addBook('Lala', 'Jorge');
console.log(yo.getBookNames());