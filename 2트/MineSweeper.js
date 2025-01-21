
class MineSweeper {
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
                row.push(this.makeCell(i, j));
            }
            this.map.push(row);
        }
    }

    makeCell(y, x) {
        return {
            y,
            x,
            isMine: (Math.floor(Math.random() * 3) === 0),
            nearMineN: 0,
            isDigged: false,
            isFlagged: false,
        };
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
}

