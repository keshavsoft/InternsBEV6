import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
	let LocalCoumnHostLink = LocalRequestBody.HostLink;
	let LocalCoumnGitLink = LocalRequestBody.GitLink;
	let LocalCoumnRollNumber = LocalRequestBody.RollNumber;
	let LocalCoumnYearPassOut = LocalRequestBody.YearPassOut;
	let LocalCoumnCollegeName = LocalRequestBody.CollegeName;
	let LocalCoumnEmail = LocalRequestBody.Email;
	let LocalCoumnMobile = LocalRequestBody.Mobile;
	let LocalCoumnStudentName = LocalRequestBody.StudentName;

    let LocalFromRepo = postDefaultFuncFromRepo({LocalCoumnStudentName,LocalCoumnMobile,LocalCoumnEmail,LocalCoumnCollegeName,LocalCoumnYearPassOut,LocalCoumnRollNumber,LocalCoumnGitLink,LocalCoumnHostLink});

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };

    res.set('Content-Type', 'text/plain');
    res.send(LocalFromRepo.SuccessText);
};

export {
    postFilterDataFromBodyFunc
};