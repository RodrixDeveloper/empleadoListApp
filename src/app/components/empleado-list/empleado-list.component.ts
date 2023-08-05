import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent {

  listEmpleados :Empleado [] = [
    {id:1, nombre : 'Rodrigo', apellido: 'Chuquimia', sexo: 'Masculino', salario: 7800},
    {id:2, nombre : 'Daniela', apellido: 'Flores', sexo: 'Femenino', salario: 6000},
    {id:3, nombre : 'Adriana', apellido: 'Chuquimia', sexo: 'Femenino', salario: 10000},
    {id:4, nombre : 'Cristian', apellido: 'Chuquimia', sexo: 'Masculino', salario: 8000},
    {id:5, nombre : 'Veronica', apellido: 'Chuquimia', sexo: 'Femenino', salario: 6000},
    {id:5, nombre : 'Veronica', apellido: 'Chuquimia', sexo: 'Femenino', salario: 6000},
  ]

  obtenerTotalEmpleados():number{
      return this.listEmpleados.length;
  }

  obtenerTotalFemenino():number{
    return this.listEmpleados.filter(list => list.sexo === 'Femenino').length;
  }

  obtenerTotalMasculino():number{
    return this.listEmpleados.filter(list => list.sexo === 'Masculino').length;
  }

  radioButtonSeleccionado = 'Todos';

  empleadoCountRadioButtonChange(radioButtonSelect:string){
    this.radioButtonSeleccionado = radioButtonSelect;
  }
  
}
