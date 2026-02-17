import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as CheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/entryFile.js";

let StartFunc = async () => {
    const button = document.getElementById("CreateButtonId");
    const text = document.getElementById("BtnText");
    const loader = document.getElementById("BtnLoader");

    const UiStart = () => {
        button.disabled = true;
        loader.classList.remove("d-none");
        text.textContent = "Processing...";
    };

    const UiStop = () => {
        button.disabled = false;
        loader.classList.add("d-none");
        text.textContent = "Submit Now";
    };

    UiStart();

    try {
        let jVarLocalFromCheck = await CheckFunc();

        if (jVarLocalFromCheck.KTF === false) {
            let jVarLocalFormId = document.getElementById('FormId');
            let jVarLocalFirstInValid = jVarLocalFormId.querySelector(".is-invalid");
            jVarLocalFirstInValid.focus();
            UiStop();
            return false;
        };

        let jVarLocalFromFetch = await StartFuncFetchFuncs({ inGps: jVarLocalFromCheck.Gps });

        StartFuncAfterFetch({ inFetchStatus: jVarLocalFromFetch });

    } catch (error) {
        alert(error);
        console.log("error : ", error);
    };

    UiStop();
};

export { StartFunc }