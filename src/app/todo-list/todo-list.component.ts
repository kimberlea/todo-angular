import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todo-item';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  items : Array<TodoItem> = [];
  newItemTitle : string = "";
  selectedFilter: string = "all";

  constructor() { }

  ngOnInit() {
  }

  addItem(){
    if (this.newItemTitle.length < 1) {
      return;
    }
    this.items.push(new TodoItem({title: this.newItemTitle, completed: false}));
    this.newItemTitle = "";
  }

  removeItem(item : TodoItem) {
    console.log("Removing item " + item.title);
    let idx = this.items.indexOf(item);
    if (idx != -1) {
      this.items.splice(idx, 1);
    }
  }

  filteredItems() {
    let fis = this.items.filter( (item)=> {
      if (this.selectedFilter == "active") {
        return item.completed != true;
      } else if (this.selectedFilter == "completed") {
        return item.completed == true;
      } else {
        return true;
      }
    });
    return fis;
  }

  clearCompletedItems() {
    console.log("deleting items");
    // go through items in Array
    for (let i = this.items.length-1; i >= 0 ; i--) {
      //current item
      let currentItem = this.items[i];
      // if completed == true
      if (currentItem.completed == true) {
        //deleted item
        this.items.splice(i, 1);
        console.log("deleting item " + i);
      }

    }

  }
}
