class TileType {
    constructor() {

    }

    Generator = () => {
        let tile = new Tile();
        tile.type = 'generator';
        tile.productionRate = 1; // 1 unit per second aka 1/60 per frame
        tile.storage = 10;

        tile.tick = () => {
            console.log('generator tick');
        };

        return tile;
    }

    Battery = () => {
        let tile = new Tile();
        tile.type = 'battery';
        tile.storage = 400;

        return tile;
    }

    Empty = () => {
        let tile = new Tile();
        tile.type = 'empty';

        return tile;
    }
}