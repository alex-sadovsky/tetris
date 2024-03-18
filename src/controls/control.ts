import { Shape } from "../shapes";

export abstract class Control {
  protected _id = '';
  protected _controlElement: HTMLElement;
  protected _shape: Shape;

  constructor(elementId: string = '') {
    this.id = elementId;
    this._setupControlElement();
  }

  public abstract makeAction(): void;

  set shape(shape: Shape) {
    this._shape = shape;
  }

  set id(elementId: string) {
    this._id = elementId;
  }

  protected _setupControlElement(): void {
    this._controlElement = document.getElementById(this._id) as HTMLElement;
    this._controlElement.addEventListener('click', this.makeAction.bind(this));
  }
}