import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() item : TodoItem;
  @Output() deleteClick = new EventEmitter<TodoItem>();

  constructor() {
  }

  ngOnInit() {
  }

}
