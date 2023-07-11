import { Chair } from "../interfaces/Chair";

export default class VictorianChair implements Chair {
  hasLegs(): boolean {
    return true;
  }
}
