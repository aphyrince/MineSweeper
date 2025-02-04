import Cell from './Cell';

class Content {
    constructor() {
        this.map = [];
        this.rowN = 10;
        this.colN = 12;

        this.makeMap();
        this.countNearMine();
    }

    makeMap() {
        for (let i = 0; i < this.rowN; i++) {
            const row = [];
            for (let j = 0; j < this.colN; j++) {
                row.push(new Cell(i, j));
            }
            this.map.push(row);
        }
    }

    countNearMine() {
        const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
        const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

        for (let i = 0; i < this.rowN; i++) {
            for (let j = 0; j < this.colN; j++) {
                if (this.map[i][j].isMine) continue;

                let nearMineN = 0;

                for (let k = 0; k < 8; k++) {
                    const x = j + dx[k];
                    const y = i + dy[k];

                    if (y < 0 || this.rowN <= y) continue;
                    else if (x < 0 || this.colN <= x) continue;
                    else if (this.map[y][x].isMine) {
                        nearMineN++;
                    }
                }

                this.map[i][j].nearMineN = nearMineN;
            }
        }
    }

    openCell(y, x) {
        this.map[y][x].isOpen = true;

        if (this.map[y][x].isMine) {
            this.gameOver();
        }
    }

    flaggingCell(y, x) {
        this.map[y][x].isFlagged = true;
    }
    unFlaggingCell(y, x) {
        this.map[y][x].isFlagged = false;
    }

    gameOver() {
        for (let row in this.map) {
            for (let cell in row) {
                cell.isOpen = true;
            }
        }
    }

    contentClickEventListener() {
        return function (e) {

        };
    }
}

export default Content;