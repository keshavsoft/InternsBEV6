import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ConfigJson from "../../../../Config.json" with { type: "json" };

let StartFunc = async ({ inGps }) => {
    let jVarLocalFetchUrl = ConfigJson.PostUrl;

    let jVarLocalFetchHeaders = await StartFuncFetchHeaders({ inGps });
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };

