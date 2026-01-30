import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnStudentName,LocalCoumnMobile,LocalCoumnEmail,LocalCoumnCollegeName,LocalCoumnYearPassOut,LocalCoumnRollNumber,LocalCoumnGitLink,LocalCoumnHostLink}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnStudentName,LocalCoumnMobile,LocalCoumnEmail,LocalCoumnCollegeName,LocalCoumnYearPassOut,LocalCoumnRollNumber,LocalCoumnGitLink,LocalCoumnHostLink});

    return LocalFromDal;
};

export {
    postDefaultFunc
};