import { makeAutoObservable } from "mobx";

// Define the type of the store
class CounterStore {
  count: number = 0;

  constructor() {
    makeAutoObservable(this); // Automatically makes properties observable and methods actions
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }
}

const counterStore = new CounterStore();
export default counterStore;
