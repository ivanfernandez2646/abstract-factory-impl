import { FurnitureFactory } from "./interfaces/FurnitureFactory";
import ModernFurnitureFactory from "./factories/ModernFurnitureFactory";
import VictorianFurnitureFactory from "./factories/VictorianFurnitureFactory";

const furnitureFactories: FurnitureFactory[] = [
  new ModernFurnitureFactory(),
  new VictorianFurnitureFactory(),
];

// PLAYGROUND
