let translateX, translateY;

class TileArray {
    constructor(width, height, tileSize) {
        this.width = width;
        this.height = height;
        this.tileSize = tileSize;
        this.tiles = [];

        this.initialize();
    }

    render = () => {

        stroke(51, 49, 56);
        // stroke(0);
        fill(0);

        push();
        translateX = windowWidth/2 - (this.width*this.tileSize)/2;
        translateY = window.innerHeight/2 - (this.height*this.tileSize)/2;
        translate(translateX, translateY);
        for(let row = 0; row < this.height; row++) {
            for(let col = 0; col < this.width; col++) {
                // debugger;
                if(this.tiles[row][col].type == 'generator') {
                    fill(161, 195, 73);
                }
                else if(this.tiles[row][col].type == 'battery') {
                    fill(69, 74, 222);
                }
                else {
                    fill(0,0,0, 0);
                }
                rect(col*this.tileSize, row*this.tileSize, this.tileSize, this.tileSize);
            }
        }
    
        pop();
    }

    tick = () => {
        for(let row = 0; row < this.height; row++) {
            for(let col = 0; col < this.width; col++) {
                this.tiles[row][col].tick();
            }
        }
    }


    setTile = (x, y, tile) => {
        let target = this.getTileCoordsAt(x, y);
        if(target != undefined) {
            this.tiles[target.x][target.y] = tile; 
        }
    }

    getTileCoordsAt = (x, y) => { // expecting untranslated inputs
            let mx = Math.floor(x - translateX);
            let my = Math.floor(y - translateY);
            let tx = Math.floor(my/kTileSize);
            let ty = Math.floor(mx/kTileSize)
            if(my >= 0 && my < this.height*this.tileSize && mx >= 0 && mx < this.width*this.tileSize) {
                return {x: tx, y: ty};
            }
            else {
                return undefined;
            }
        }

    initialize = () =>{
        for(let row = 0; row < this.height; row++) {
            this.tiles[row] = [];
            for(let col = 0; col < this.width; col++) {
                this.tiles[row][col] = new Tile();
            }
        }
    }
}