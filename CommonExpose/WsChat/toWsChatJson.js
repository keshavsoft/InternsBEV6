import { StartFunc as StartFuncFromInsertToFile } from "../../V3/WsChat/Insert/9.PkReturn/KFs/insertToFile.js";

const InsertFunc = (inObjectToInsert) => {
    return StartFuncFromInsertToFile({ inRequestBody: inObjectToInsert.inData });
};

export { InsertFunc };