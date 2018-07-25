import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello world';
  showForm = false;
  name = '';
  country = '';
  currentCurrency: 'USD'
  
  students = [{
    name: 'Andrea',
    country: 'Spain',
    height: '1.759779878'
  }, {
    name: 'Gabriel',
    country: 'Colombia',
    height: 1.9008789
  }, {
    name: 'Daniela',
    country: 'Venezuela',
  }];

  handleAddClick() {
    this.students.push({
      name: this.name,
      country: this.country
    });
    this.name = '';
    this.country = '';
    this.showForm = false;
  }

  handleRemoveClick(index) {
    this.students.splice(index, 1);
  }
}
