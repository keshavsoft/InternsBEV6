import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnInOut,LocalCoumndata}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnInOut,LocalCoumndata});

    return LocalFromDal;
};

export {
    postDefaultFunc
};