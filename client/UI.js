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
               
                let tooltipHeader = capFirstLetter(targetTile.type);
                
                let tooltipText = '';
                if(targetTile.tooltip() != '') tooltipText += `\n${targetTile.tooltip()}`;

                let numLines = tooltipText.split('\n').length;

                let lines = tooltipText.split('\n');
                
                textStyle(BOLD);
                let longestLine = textWidth(tooltipHeader);
                textStyle(NORMAL);
                textSize(16);
                for(let i = 0; i < lines.length; i++) {
                    let lineLength = textWidth(lines[i]);
                    if(lineLength > longestLine) longestLine = lineLength;
                }

                strokeWeight(3);
                fill(0); 
                rect(mouseX+25, mouseY, longestLine * 1.05, (textAscent()*numLines * 1.35) + 5, 2);

                noStroke();
                fill(255);
                textStyle(BOLD);
                text(tooltipHeader, mouseX+30, mouseY+18)
                textStyle(NORMAL);
                text(tooltipText, mouseX+30, mouseY+18);
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