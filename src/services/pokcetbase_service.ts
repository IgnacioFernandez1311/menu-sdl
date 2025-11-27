import PocketBase from "pocketbase";

const pb = new PocketBase(import.meta.env.VITE_DB_ACCESS_URL);


export const coffeeList = await pb.collection("coffeeList").getFullList();

export const coldDrinks = await pb.collection("coldDrinks").getFullList();

export const coldCoffees = await pb.collection("coldCoffees").getFullList();

export const foodList = await pb.collection("food").getFullList();