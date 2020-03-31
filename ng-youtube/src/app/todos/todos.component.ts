import { Component, OnInit } from '@angular/core';
import {Import} from '@angular/core/schematics/utils/typescript/imports';
import {Todo} from '../app.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Import todoes: Todo[] = [];

  constructor() { }

  ngOnInit() {
  }

}
