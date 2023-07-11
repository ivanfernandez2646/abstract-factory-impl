import { Chair } from "../interfaces/Chair";

export default class ModernChair implements Chair {
  hasLegs(): boolean {
    return false;
  }
}
