import { StartFunc as StartFuncFromInsertToFile } from "../../V2/WsChat/InsertWithChecks/3.PkReturn/KFs/insertToFile.js";

const InsertFunc = (inObjectToInsert) => {
    return StartFuncFromInsertToFile({ inRequestBody: inObjectToInsert.inData });
};

export { InsertFunc };