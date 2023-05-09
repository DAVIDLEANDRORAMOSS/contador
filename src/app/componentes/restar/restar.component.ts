import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-restar',
  templateUrl: './restar.component.html',
  styleUrls: ['./restar.component.css']
})
export class RestarComponent implements OnInit {
  @Input() cont =0; 
  @Output() respuesta:EventEmitter<number>=new EventEmitter() 

  constructor() { }

  ngOnInit(): void {
  }
  restar(){
    this.cont--;
    console.log(this.cont);
    this.respuesta.emit(this.cont);
  }
}
