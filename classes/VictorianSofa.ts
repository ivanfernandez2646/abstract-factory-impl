import { Sofa } from "../interfaces/Sofa";

export default class VictorianSofa implements Sofa {
  countSeats(): number {
    return 3;
  }
}
