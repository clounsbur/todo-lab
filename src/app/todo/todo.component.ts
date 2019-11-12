import { Component, OnInit } from "@angular/core";
import { Todo } from "../todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.less"]
})
export class TodoComponent implements OnInit {
  isActive = false;
  todos: Todo[] = [
    { task: "get groceries", completed: false },
    { task: "call mom", completed: false },
    { task: "call aunt", completed: false },
    { task: "do laundry", completed: false },
    { task: "pack gym bag", completed: false },
    { task: "set out kid's clothes", completed: false },
    { task: "make lunches", completed: false },
    { task: "prep breakfast", completed: false },
    { task: "make dinner", completed: false },
    { task: "give kid's baths", completed: false },
    { task: "clean kitchen", completed: false },
    { task: "clean bathroom", completed: false },
    { task: "check Johan's homework", completed: false },
    { task: "Study", completed: false }
  ];
  newTodoText: string;
  filterText: string;

  addNewTask: Todo = {
    task: "",
    completed: false
  };
  // 1. The user can add items to the bottom of the list.
  addTask() {
    this.todos.push(this.addNewTask);
    this.addNewTask = {
      task: "",
      completed: false
    };
  }
  //  Clicking the “x” on an item executes a function named removeTask that removes that
  //   item from the array.
  removeTask(task: Todo) {
    let index = this.todos.indexOf(task);
    this.todos.splice(index, 1);
  }
  completeTask(task: Todo) {
    task.completed = true;
  }
  //trim checks for extra spaces not necesary

  //first part of function says return whole array if there is no filter text
  // function stops there
  //if there is filter text the function looks fro a match filter() takes an array and returns matchinng filter text
  getFilteredTodos(): Todo[] {
    if (!this.filterText.trim()) {
      return this.todos;
    }
    const match = this.filterText;
    return this.todos.filter(todo => todo.task.includes(match));
  }

  // filter method

  //   2. The user can filter the list.

  //
  //   4. The text input at the top is for filtering. It filters as you type.
  //   Bonus: Give users the ability to edit the text of a todo.

  constructor() {}

  ngOnInit() {}
}
