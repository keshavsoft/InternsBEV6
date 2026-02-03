import { StartFunc as StartFuncFetchAsGet } from "./FetchAsGet/entryFile.js";

let StartFunc = () => {
    const arrClass = document.getElementById("TopBarLogoutId");
    console.log("aaaaaaaaaaaa : ", arrClass);

    arrClass.addEventListener("click", StartFuncFetchAsGet);
};

export { StartFunc };