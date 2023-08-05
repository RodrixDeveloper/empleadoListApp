export class Empleado {
  id: number;
  nombre: string;
  apellido: string;
  sexo: string;
  salario: number;

  // Constructor para inicializar error => (Property 'id' has no initializer and is not definitely assigned in the constructor)
  constructor(
    id: number,
    nombre: string,
    apellido: string,
    sexo: string,
    salario: number
  ) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.sexo = sexo;
    this.salario = salario;
  }
}
