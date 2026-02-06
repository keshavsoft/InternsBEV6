import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnInOut,LocalCoumndata}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnInOut,LocalCoumndata});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};