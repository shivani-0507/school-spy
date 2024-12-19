// stores/RestaurantStore.ts
import { makeAutoObservable } from "mobx";

class RestaurantStore {
  restaurants: any[] = [];
  restaurantDetails: any | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setRestaurants(data: any[]) {
    this.restaurants = data;
  }

  setRestaurantDetails(data: any) {
    this.restaurantDetails = data;
  }
}

const restaurantStore = new RestaurantStore();
export default restaurantStore;
