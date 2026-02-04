import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as CheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/entryFile.js";

let StartFunc = async () => {
    try {
        let jVarLocalFromCheck = await CheckFunc();
        // jVarLocalFromCheck = false;

        // console.log("jVarLocalFromCheck : ", jVarLocalFromCheck);

        if (jVarLocalFromCheck.KTF === false) {
            let jVarLocalFormId = document.getElementById('FormId');

            let jVarLocalFirstInValid = jVarLocalFormId.querySelector(".is-invalid");
            jVarLocalFirstInValid.focus();

            return false;
        };

        let jVarLocalFromFetch = await StartFuncFetchFuncs({ inGps: jVarLocalFromCheck.Gps });

        StartFuncAfterFetch({ inFetchStatus: jVarLocalFromFetch });
    } catch (error) {
        alert(error);
        console.log("error : ", error);
    };
};

export { StartFunc }