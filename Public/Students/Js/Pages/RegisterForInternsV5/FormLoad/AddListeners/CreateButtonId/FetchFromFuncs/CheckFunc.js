import acceptFileTypesJson from './acceptFileTypes.json' with {type: 'json'};
import { getGPS } from "./getGpsCoords.js";

let StartFunc = async () => {
    let jVarLocalForm = document.getElementById("FormId");
    let jVarLocalRequiredElements = jVarLocalForm.querySelectorAll("[required]");
    let jVarLocalReturnObject = {};
    jVarLocalReturnObject.KTF = true;

    jVarLocalRequiredElements.forEach(LoopItem => {
        if (LoopItem.value.trim().length === 0) {
            LoopItem.classList.add("is-invalid");
            jVarLocalReturnObject.KTF = false;

            return jVarLocalReturnObject;
        };

        LoopItem.classList.remove("is-invalid");
        LoopItem.classList.add("is-valid");
    });

    let jVarLocalFromSelectFile = jFLocalSelectFile();

    if (jVarLocalFromSelectFile === false) {
        return jVarLocalFromSelectFile;
    };

    const jVarLocalFromGps = await getGPS();
    jVarLocalReturnObject.Gps = jVarLocalFromGps;

    return await jVarLocalReturnObject;
};

let jFLocalSelectFile = () => {
    let fileInput = document.getElementById("formFile");
    let file = fileInput.files[0];

    if (acceptFileTypesJson.includes(file.type)) {
        return true;
    } else {
        alert(`Only ${acceptFileTypesJson.toString()} file types are accepted...`);
        return false;
    };
};



export { StartFunc }