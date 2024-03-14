const ShapeColors = {
  transparent: 0,
  cyan: 1,
  yellow: 2,
  purple: 3,
  orange: 4,
  green: 5
};


class ShapeCell {
  _x = 0;
  _y = 0;
  _offsetX = 0;
  _offsetY = 0;
  _color = ShapeColors.transparent;
  _rotateCenter = false;

  set offsetX(offset) {
    this._offsetX = offset;
  }

  get offsetX() {
    return this._offsetX;
  }

  set offsetY(offset) {
    this._offsetY = offset;
  }

  get offsetY() {
    return this._offsetY;
  }

  set x(x) {
    this._x = x;
  }

  get x() {
    return this._x;
  }

  set y(y) {
    this._y = y;
  }

  get y() {
    return this._y;
  }

  set color(color) {
    this._color = color;
  }

  get color() {
    return this._color;
  }

  set rotateCenter(isRotateCenter) {
    this._rotateCenter = isRotateCenter;
  }

  get rotateCenter() {
    return this._rotateCenter;
  }
}

class Shape {
  _shapeCells = [];
  _currentRotateAngle = 0;

  getCoordinates() {}

  moveLeft() {}
  moveRight() {}
  moveDown() {}

  rotate(angle) {}

  _setInitialShape() {}
  _setRotateCenter() {}
  _setShapeColor() {}

  _setOffsets0() {}
  _setOffsets90() {}
  _setOffsets180() {}
  _setOffsets270() {}
}

class Straight extends Shape {
  constructor() {
    super();
    this._setInitialShape();
  }

  getCalculatedCells() {
    const rotateCenter = this._shapeCells[0];

    const calculatedCells = this._shapeCells.map((cell) => {
      const resultCell = new ShapeCell();

      if (cell.rotateCenter) {
        resultCell.x = cell.x;
        resultCell.y = cell.y;
      } else {
        resultCell.x = rotateCenter.x + cell.offsetX;
        resultCell.y = rotateCenter.y + cell.offsetY;
      }
      resultCell.color = cell.color;

      return resultCell;
    });

    return calculatedCells;
  }

  _setInitialShape() {
    this._setRotateCenter();
    this._setOffsets0();
    this._setShapeColor();
  }

  _setRotateCenter() {
    const rotateCenter = new ShapeCell();
    rotateCenter.rotateCenter = true;
    rotateCenter.x = 5;
    rotateCenter.y = 1;
    this._shapeCells.push(rotateCenter);
  }

  _setOffsets0() {
    const upperCell = new ShapeCell();
    upperCell.offsetX = 0;
    upperCell.offsetY = -1;
    this._shapeCells.push(upperCell);

    const lowerCell1 = new ShapeCell();
    lowerCell1.offsetX = 0;
    lowerCell1.offsetY = 1;
    this._shapeCells.push(lowerCell1);

    const lowerCell2 = new ShapeCell();
    lowerCell2.offsetX = 0;
    lowerCell2.offsetY = 2;
    this._shapeCells.push(lowerCell2);
  }

  _setShapeColor() {
    this._shapeCells = this._shapeCells.map((cell) => {
      cell.color = ShapeColors.cyan;
      return cell;
    });
  }
}

class Square extends Shape {

}

class Tshape extends Shape {

}

class Lshape extends Shape {

}

class Skew extends Shape {

}

class Board {
  #widthCols = 10;
  #heightRows = 21;
  #currentShape = null;
  #currentBoard = [];
  #filledCells = [];

  constructor() {
    this.#makeEmptyBoard();
  }

  get currentBoard() {
    return this.#currentBoard;
  }

  get rows() {
    return this.#heightRows;
  }

  get cols() {
    return this.#widthCols;
  }

  set currentShape(shape) {
    this.#currentShape = shape;
  }

  get currentShape() {
    return this.#currentShape;
  }

  resetCurrentShapeCoordinates() {
    this.#currentShape.getCalculatedCells().forEach((cell) => {
      this.#currentBoard[cell.y][cell.x] = cell.color;
    });
  }

  #makeEmptyBoard() {
    for(let rowNum = 0; rowNum < this.#heightRows; rowNum++) {
      this.#currentBoard[rowNum] = [];
      for(let colNum = 0; colNum < this.#widthCols; colNum++) {
        this.#currentBoard[rowNum][colNum] = 0;
      }
    }
  }
}

class Tick {

}

class CssResolverService {
  get baseCellClass() {
    return 'cell';
  }

  getColorClassForCode(colorCode = ShapeColors.transparent) {
    switch(colorCode) {
      case ShapeColors.transparent:
        return 'cell-transparent';
      case ShapeColors.cyan:
        return 'cell-cyan';
      case ShapeColors.yellow:
        return 'cell-yellow';
      case ShapeColors.purple:
        return 'cell-purple';
      case ShapeColors.orange:
        return 'cell-orange';
      case ShapeColors.green:
        return 'cell-green';
    }
  }
}

class BoardRenderer {
  #boardBlockId = '';
  #boardElement = null;
  #cssResolver = new CssResolverService();

  constructor(boardBlockId = 'tetris') {
    this.#boardBlockId = boardBlockId;
    this.#boardElement = document.getElementById(this.#boardBlockId);
  }

  render(board) {
    for(let rowNum = 0; rowNum < board.rows; rowNum++) {
      for(let colNum = 0; colNum < board.cols; colNum++) {
        const cell = document.createElement('div');
        this.#resolveCssForCell(cell, board.currentBoard[rowNum][colNum]);
        this.#boardElement.appendChild(cell);
      }
    }
  }

  #resolveCssForCell(cellEl, colorCode = ShapeColors.transparent) {
    cellEl.classList.add(this.#cssResolver.baseCellClass);
    cellEl.classList.add(this.#cssResolver.getColorClassForCode(colorCode));
  }
}

class Game {
  #board = new Board();
  #boardRenderer = new BoardRenderer();

  constructor() {
    this.#board.currentShape = new Straight();
  }

  renderBoard() {
    this.#board.resetCurrentShapeCoordinates();
    this.#boardRenderer.render(this.#board);
  }

  start() {

  }
}