var id, title, location, description, reqs, applicantsId;
var bannerUrl, hq, size, industry, website, photosUrl, logoUrl, openPositions;
var sid, name, school, year, major, GPA, minor, profilePic, status, positionId, positionTitle, companyId, appStatus, intern, applications, username, password
var tutorId, studentName, date, mentees, companyName
var mailing, senderId, senderType,message;


export var Positions = {
    id,
    title,
    location,
    description,
    reqs,
    status,
    applicantsId //array
};

export var applicationInfo = {
    companyId,
    positionTitle,
    positionId, //array
    appStatus //array
}

export var mentee = {
    studentName,
    companyName,
    date
}

export var Company = {
    name,
    id,
    bannerUrl,
    hq,
    size,
    industry, //array
    website,
    photosUrl, //array
    logoUrl,
    openPositions, //array,
    title,
    description,
    username,
    password,
    mailing //array
};

export var allCompanies = [];
export var allStudents = [];
export var allTutors = [];

export var Student = {
    sid,
    name,
    school,
    year,
    major,
    GPA,
    minor,
    profilePic,
    status,
    applications, //array
    username,
    password,
    intern,
    mailing //array
}

export var Tutor = {
    tutorId,
    name,
    school,
    year,
    major,
    GPA,
    minor,
    profilePic,
    intern,
    mentees, //array
    username,
    password,
    mailing //array

}

export var mail = {
    senderId,
    senderType,
    message
}