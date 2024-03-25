import Text from '../drawing/text.js';
import Color from '../drawing/color.js';
import KeyInput from '../input/keys.js';
import MouseInput from '../input/mouse.js';
import Animate from '../basic/animate.js';
import Size from '../basic/size.js';

const availableModules = {
    Text: Text(),
    Color: Color(),
    KeyInput: KeyInput(),
    MouseInput: MouseInput(),
    Animate: Animate(),
    Size: Size()
};

const defaultModules = [...Object.keys(availableModules)];

let imports = [];
export default function getModules( modules = defaultModules ) {
    modules.forEach( module => {
        if ( !availableModules[module] ) {
            throw new Error(`No module found named "${module}"`);
        }

        imports.push(availableModules[module]);
    });

    return imports;
}
