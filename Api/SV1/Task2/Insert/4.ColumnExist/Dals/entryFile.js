import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnStudentName,LocalCoumnMobile,LocalCoumnEmail,LocalCoumnCollegeName,LocalCoumnYearPassOut,LocalCoumnRollNumber,LocalCoumnGitLink,LocalCoumnHostLink}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnStudentName,LocalCoumnMobile,LocalCoumnEmail,LocalCoumnCollegeName,LocalCoumnYearPassOut,LocalCoumnRollNumber,LocalCoumnGitLink,LocalCoumnHostLink});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};