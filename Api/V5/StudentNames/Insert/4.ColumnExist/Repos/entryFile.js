import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnStudentName,LocalCoumnMobile,LocalCoumnEmail,LocalCoumnCollegeName,LocalCoumnCountry,LocalCoumnEntranceRank,LocalCoumnYearPassOut,LocalCoumnBack_logs,LocalCoumnRollNumber,LocalCoumnfile,LocalCoumnGitLink,LocalCoumnIntern2025,LocalCoumnisEmailVerified,LocalCoumngpsLat,LocalCoumngpsLng,LocalCoumngpsAccuracy}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnStudentName,LocalCoumnMobile,LocalCoumnEmail,LocalCoumnCollegeName,LocalCoumnCountry,LocalCoumnEntranceRank,LocalCoumnYearPassOut,LocalCoumnBack_logs,LocalCoumnRollNumber,LocalCoumnfile,LocalCoumnGitLink,LocalCoumnIntern2025,LocalCoumnisEmailVerified,LocalCoumngpsLat,LocalCoumngpsLng,LocalCoumngpsAccuracy});

    return LocalFromDal;
};

export {
    postDefaultFunc
};