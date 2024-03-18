import { Shape } from "../shapes";
import { Control } from "./control";
import { Rotate } from "./rotate";

export class Controls {
  private _controls: Control[] = [new Rotate()];

  public setNewShape(shape: Shape): void {
    this._controls.forEach((control: Control) => {
      control.shape = shape;
    });
  }
}