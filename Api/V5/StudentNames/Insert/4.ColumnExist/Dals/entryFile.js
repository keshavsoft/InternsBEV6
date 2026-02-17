import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnStudentName,LocalCoumnMobile,LocalCoumnEmail,LocalCoumnCollegeName,LocalCoumnCountry,LocalCoumnEntranceRank,LocalCoumnYearPassOut,LocalCoumnBack_logs,LocalCoumnRollNumber,LocalCoumnfile,LocalCoumnGitLink,LocalCoumnIntern2025,LocalCoumnisEmailVerified,LocalCoumngpsLat,LocalCoumngpsLng,LocalCoumngpsAccuracy}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnStudentName,LocalCoumnMobile,LocalCoumnEmail,LocalCoumnCollegeName,LocalCoumnCountry,LocalCoumnEntranceRank,LocalCoumnYearPassOut,LocalCoumnBack_logs,LocalCoumnRollNumber,LocalCoumnfile,LocalCoumnGitLink,LocalCoumnIntern2025,LocalCoumnisEmailVerified,LocalCoumngpsLat,LocalCoumngpsLng,LocalCoumngpsAccuracy});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};