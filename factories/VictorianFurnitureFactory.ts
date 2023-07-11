import { Chair } from "../interfaces/Chair";
import { FurnitureFactory } from "../interfaces/FurnitureFactory";
import { Sofa } from "../interfaces/Sofa";
import VictorianChair from "../classes/VictorianChair";
import VictorianSofa from "../classes/VictorianSofa";

export default class VictorianFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new VictorianChair();
  }

  crateSofa(): Sofa {
    return new VictorianSofa();
  }
}
