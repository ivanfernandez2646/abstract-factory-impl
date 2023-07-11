import { Chair } from "./Chair";
import { Sofa } from "./Sofa";

export interface FurnitureFactory {
  createChair(): Chair;

  crateSofa(): Sofa;
}
