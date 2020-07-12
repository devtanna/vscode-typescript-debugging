import { hello } from './hello';
import { scratchPad } from './hello';

class App {
    /** Entry point of our app */
    public static start() {
        console.log(hello('world'));
        scratchPad()
    }
}

App.start();
