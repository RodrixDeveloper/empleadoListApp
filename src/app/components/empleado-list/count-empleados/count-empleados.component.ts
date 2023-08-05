import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent implements OnInit{

  @Input() todos!:number;
  @Input() femenino!:number;
  @Input() masculino!:number;


  @Output() countRadioButtonChange = new EventEmitter<string>();


  
  radioButtonSeleccionado = 'Todos';

  ngOnInit(): void {
   console.log(this.todos)
  }

  radioChange() {
    this.countRadioButtonChange.emit(this.radioButtonSeleccionado);
  }
}
