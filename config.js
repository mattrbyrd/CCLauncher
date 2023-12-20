function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function getId() {
    let learnerId = prompt('Enter your email address');
    return learnerId;
}

function getName() {
    let name = prompt('Enter your first and last name');
    return name;
}

var ccLauncherConfig = {
    studentId: getId(),
    studentName: getName(),
    postStudentData: false,
    postUrl: ''
};
