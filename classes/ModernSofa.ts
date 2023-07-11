import { Sofa } from "../interfaces/Sofa";

export default class ModernSofa implements Sofa {
  countSeats(): number {
    return 4;
  }
}
