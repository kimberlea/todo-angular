export class TodoItem {
  title: string;
  completed: boolean;

  constructor(data:any={}) {
    for (let key in data) {
      this[key] = data[key];
    }
  }
}
