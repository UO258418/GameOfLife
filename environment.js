class Environment {

    constructor(rows, cols, cellSize, aliveCellsPc) {
        this.rows = rows;
        this.cols = cols;
        this.grid = [];
        this._populate(cellSize, aliveCellsPc);
    }

    _populate(cellSize, aliveCellsPc) {
        var row;
        for(let i = 0; i < this.rows; i++) {
            row = [];
            for(let j = 0; j < this.cols; j++) {
                let alive = Math.random() <= aliveCellsPc;
                let pos = {i, j};
                row.push(new Cell(cellSize, alive, pos));
            }
            this.grid.push(row);
        }
    }

    draw() {
        for(let i = 0; i < this.rows; i++)
            for(let j = 0; j < this.cols; j++)
                this.grid[i][j].draw(i, j);
    }

    nextGeneration() {
        var tmpGrid = this.grid.slice();
        for(let i = 0; i < this.rows; i++) 
            for(let j = 0; j < this.cols; j++) {
                var cell = this.grid[i][j];
                if(this._hasSuitableConditions(cell))
                    tmpGrid[cell.pos.i][cell.pos.j].changeState();
            }
        this.grid = tmpGrid;
    }

    _hasSuitableConditions(cell) {
        var neighboursAlive = this._getNeighboursAlive(cell);
        if(cell.alive) {
            if(!(neighboursAlive == 2 || neighboursAlive == 3))
                return true;
        } else {
            if(neighboursAlive == 3)
                return true;
        }
        return false;
    }

    _getNeighboursAlive(cell) {
        var count = 0;
        for(let i = -1; i <= 1; i++)
            for(let j = -1; j <= 1; j++) {
                var row = cell.pos.i + i;
                var col = cell.pos.j + j;
                var isCellBeingChecked = i == 0 && j == 0;
                var isInBounds = row >= 0 && row < this.rows && col >= 0 && col < this.cols; 
                var currentCell; 
                if(!isCellBeingChecked && isInBounds) {
                    currentCell = this.grid[row][col];
                    if(currentCell.alive) count++; 
                }      
            }
        return count;
    }

}