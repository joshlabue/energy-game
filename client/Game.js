let kWidth = 20;
let kHeight = 20;
let kTileSize = 40;

let tiles;
let controlRegistry;
let ui;
let tileTypes;

let canvas;

function setup() {
    canvas = createCanvas(windowWidth, window.innerHeight);
    canvas.id('appCanvas');

    document.getElementById('appCanvas').addEventListener('contextmenu', (e) => {
            e.preventDefault();
    });

    tiles = new TileArray(kWidth, kHeight, kTileSize);
    controlRegistry = new ControlRegistry();
    ui = new UI();
    tileTypes = new TileType();

    controlRegistry.registerKeybind('g', () => {
        tiles.setTile(mouseX, mouseY, tileTypes.Generator());
    }, true);

    controlRegistry.registerKeybind('b', () => {
        tiles.setTile(mouseX, mouseY, tileTypes.Battery());
    }, true);

    controlRegistry.registerKeybind('Shift', () => {
        tiles.setTile(mouseX, mouseY, tileTypes.Empty());
    }, false);

    controlRegistry.registerKeybind('`', () => {
        ui.toggleDebug();
    }, true);

    textFont('Arial');

    

}

function keyReleased() {
    controlRegistry.releaseKey(key);
}

function windowResized() {
    resizeCanvas(windowWidth, window.innerHeight);
    background(0);

}

function draw() {
    background(0, 1, 3);
    strokeWeight(2);
   
    controlRegistry.process();
    tiles.tick();
    tiles.render();
    ui.render(tiles);
}

