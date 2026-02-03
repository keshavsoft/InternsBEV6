import { StartFunc as StartFuncFetchFuncs } from './fetchFuncs.js';
import { StartFunc as afterFetch } from './afterFetch/entryFile.js';

const StartFunc = async () => {
    debugger;
    let localResponse = await StartFuncFetchFuncs();

    afterFetch({ inResponse: localResponse });
};

export { StartFunc };
