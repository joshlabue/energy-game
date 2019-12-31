class ControlRegistry {
    constructor() {
        this.keybinds = [];
    }

    registerKeybind = (key, action, mustBeReleased) => {
        this.keybinds.push({
            key: key,
            action: action,
            mustBeReleased: mustBeReleased,
            alreadyPressed: false
        });
    }

    process = () => {
        for(let i = 0; i < this.keybinds.length; i++) {
            if(keyIsPressed && key == this.keybinds[i].key) {
                if(this.keybinds[i].mustBeReleased && this.keybinds[i].alreadyPressed == false || !this.keybinds[i].mustBeReleased) {
                    this.keybinds[i].action();
                    this.keybinds[i].alreadyPressed = true;
                }
            }
        }
    }

    releaseKey = (key) => {
        for(let i = 0; i < this.keybinds.length; i++) {
            if(key == this.keybinds[i].key) {
                this.keybinds[i].alreadyPressed = false;
            }
        }
    };
}