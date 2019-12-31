class TileType {
    constructor() {

    }

    Generator = () => {
        let tile = new Tile();
        tile.type = 'generator';
        tile.productionRate = 1;
        tile.storage = 10;

        tile.color = {r: 161, g: 195, b: 73};

        tile.tick = () => {
            console.log('generator tick');
        };

        tile.tooltip = () => {
            return 'test tooltip';
        };

        return tile;
    }

    Battery = () => {
        let tile = new Tile();
        tile.type = 'battery';
        tile.storage = 400;

        tile.color = {r: 69, g: 74, b: 222};


        return tile;
    }

    Empty = () => {
        let tile = new Tile();
        tile.type = 'empty';

        return tile;
    }

    Test = () => {
        let tile = new Tile();
        tile.type = 'test';

        tile.color = {r: 255, g: 0, b: 255};

        tile.tooltip = () => {
            return `Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nMaecenas rhoncus placerat sapien, ac vestibulum justo\ncongue ut. Etiam egestas malesuada tincidunt. In mi\naugue, sodales quis eros et, mollis tempus mi.\nMaecenas dapibus ligula vitae nisl mollis mollis.\nQuisque interdum sit amet justo sit amet efficitur.\nQuisque ornare quis tellus eu ultricies. In placerat, urna\nat tincidunt consectetur, neque dui vulputate augue, sed\ncondimentum lectus lacus at lacus. Maecenas vulputate\nenim id arcu interdum imperdiet. Sed consequat nulla sed\ndui malesuada ornare. In egestas, urna eu lacinia ultrices,\nnlibero magna interdum ante, suscipit ultrices nibh nisi\nultrices nibh. Cras ut augue nunc. Quisque eu ex ut lorem\ncongue congue non a ex.`;
        };

        return tile;
    }
}