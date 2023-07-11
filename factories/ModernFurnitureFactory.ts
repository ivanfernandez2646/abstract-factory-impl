import { Chair } from "../interfaces/Chair";
import { FurnitureFactory } from "../interfaces/FurnitureFactory";
import { Sofa } from "../interfaces/Sofa";
import ModernChair from "../classes/ModernChair";
import ModernSofa from "../classes/ModernSofa";

export default class ModernFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new ModernChair();
  }
  crateSofa(): Sofa {
    return new ModernSofa();
  }
}
