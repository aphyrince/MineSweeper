import Header from './header/Header';
import Content from './content/Content';

class MineSweeperContainer {
    constructor() {
        this.header = new Header();
        this.content = new Content();
    }
}

export default MineSweeperContainer;