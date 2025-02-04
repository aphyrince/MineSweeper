import LevelSelector from './LevelSelector';
import Flag from './Flag';
import Timer from './Timer';
import Sound from './Sound';

class Header {
    constructor() {
        this.levelSelector = new LevelSelector();
        this.flag = new Flag();
        this.timer = new Timer();
        this.sound = new Sound();
    }
}

export default Header;