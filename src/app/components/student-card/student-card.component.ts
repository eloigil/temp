import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent {

  @Input() student: any;
  @Output() deleteClick = new EventEmitter<any>();

  constructor() { }

  handleRemoveClick(ix) {
    this.deleteClick.emit();
  }

}
