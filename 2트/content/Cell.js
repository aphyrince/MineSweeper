
class Cell {
    constructor(y, x) {
        this.y = y;
        this.x = x;
        this.isMine = (Math.floor(Math.random() * 3) === 0);
        this.nearMineN = 0;
        this.isOpen = false;
        this.isFlagged = false;
    }
}

export default Cell;