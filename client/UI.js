class UI {
    constructor() {
        this.debug = true;
    }

    render = (tiles) => {
        let targetTileCoords = tiles.getTileCoordsAt(mouseX, mouseY);
        if(targetTileCoords != undefined) {
            let targetTile = tiles.tiles[targetTileCoords.x][targetTileCoords.y];
            if(targetTile.type != 'empty') {
                stroke(51, 49, 56);
                strokeWeight(3);
                fill(0);
                rect(mouseX+25, mouseY, 170, 50, 2);
                
                noStroke();
                fill(255);
                textSize(16);
                text(capFirstLetter(targetTile.type),mouseX+30, mouseY+18);
                
                if(targetTile.type == 'generator') {
                    text(`Produces ${targetTile.productionRate} unit/sec`,mouseX+30, mouseY+35);
                }
                else if(targetTile.type == 'battery') {
                    text(`Stores up to ${targetTile.storage} units`,mouseX+30, mouseY+35);
                }
            }
        }

        if(this.debug) {
            textSize(18);
            fill(255);
            noStroke();

            text(`debug enabled (\` to toggle)\n${Math.round(frameRate())} fps`, 15, 25);
        }
    }

    toggleDebug = () => {
        this.debug = !this.debug;
    }
}

function capFirstLetter(str) {
    let firstLetter = str.slice(0, 1).toUpperCase();
    let restOfWord = str.slice(1).toLowerCase();
    return firstLetter + restOfWord;
}