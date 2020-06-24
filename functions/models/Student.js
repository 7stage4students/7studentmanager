const {
    generate
} = require('../utils/idGenarator');
const code = require('../utils/qrcode');
const {
    json
} = require('body-parser');
const _7academy = {
    allStuds: [{
        id: 'id0',
        course: 'webDev',
        level: 'level1',
        email: 'me@me.com',
        password: '',
    }, {
        id: 'id1',
        course: 'webDev',
        level: 'level1',
        email: 'me@me.com',
        password: '',
    }],
    courses: {
        webDev: {
            level: {
                level1: {
                    id0: {
                        id: 'id0',
                        name: 'John Doe',
                        email: 'me@me.com',
                        password: '',
                        level: 'level1',
                        course: 'webDev',
                        photoUrl: '',
                        qrCodeUrl: '',

                    },
                    id1: {
                        id: 'id1',
                        name: 'Jane Doe',
                        email: 'hello@hello.com',
                        password: '',
                        level: 'Level1',
                        course: 'webDev',
                        photoUrl: '',
                        qrCodeUrl: '',
                    },
                    id2: {
                        id: 'id2',
                        name: 'Papa Doe',
                        email: 'Dope@dope.com',
                        password: '',
                        level: 'Level1',
                        course: 'webDev',
                        photoUrl: '',
                        qrCodeUrl: '',
                    }
                },
                level2: {}
            },
        },
        digitalMarketing: {
            level: {
                level1: {}
            }
        }

    }

}

module.exports = class Student {
    constructor(id, name, email, password, level, course, photoUrl, gender, qrCodeUrl, active) {

        this.id = id,
        this.name = name,
            this.email = email,
            this.level = level,
            this.course = course,
            this.photoUrl = photoUrl,
            this.qrCodeUrl = qrCodeUrl;
        this.active = active;
        this.gender = gender;

    }

    prepareStudent(name, email, level = '', course = '', photoUrl = "", qrCodeURl = "", active = false, gender) {
        this.name = name;
        this.email = email;
        this.name = name;
        this.course = course;
        this.photoUrl = photoUrl;
        this.qrCodeUrl = qrCodeURl;
        this.level = level;
        this.active = active;
        this.gender = gender


        return JSON.parse(JSON.stringify(this));
    }

    snapshotToJSON() {

    }








    // Todo: Get students by id
    static get(id) {
        // Collect the parameter id
        let exists = false;
        this.id = id;
        for (let i = 0; i < _7academy.allStuds.length; i++)
            // Search if students exists
            if (_7academy.allStuds[i].id === this.id) {
                exists = true
                this.level = _7academy.allStuds[i].level;
                this.course = _7academy.allStuds[i].course;
                break;
            }
        // Returns Error is the user is not found 
        if (!exists)
            return {
                exists: false,
                message: `User of id: ${this.id} does not exist`
            }
        else {
            // Returns the requested Students
            let courses = _7academy.courses;
            let level = courses[`${this.course}`].level;
            let _class = level[`${this.level}`];

            return _class[`${this.id}`]
        }


    }
    // Todo: Get all Students of every Course
    static getAll() {
        return _7academy.allStuds;
    }
    // Todo: Get all students of a particular course
    static getAllByCourseLevel(course, _level) {
        // console.log(course)
        // console.log(_level)
        let courses = _7academy.courses;
        let level = courses[`${course}`].level;
        let _class = level[`${_level}`];

        return _class
    }

    //VALIDATE STUDENT 
    static validStudent = (email, password) => {
        let isStudent = false;
        var student_id = null;
        for (let i = 0; i < _7academy.allStuds.length; i++) {
            if (_7academy.allStuds[i].email == email && _7academy.allStuds[i].hashedPassword == password) {
                isStudent = true;
                student_id = _7academy[i].allStuds[i].id;
                break;
            }
        }
        if (!isStudent) {
            return {
                valid: false,
                id: student_id
            };
        } else {
            return {
                valid: true,
                id: student_id
            }
        }
    }
    // Todo: Add New student to Registerd course
    static register(newStudent) {

        newStudent.id = generate(); // generate new User id
        newStudent.qrcodeUrl = code(newStudent); // Todo: Generate users qrcode

        _7academy.courses[`${newStudent.course}`].level[`${newStudent.level}`][`${newStudent.id}`] = newStudent;

        return {
            message: 'Registered Successfully',
            id: newStudent.id
        };
    }
    // Todo: Delete student By id
    static deleteStudent(id) {
        let student = this.get(id)
        // Updating the Student List
        for (let i = 0; i < _7academy.allStuds.length; i++)
            if (_7academy.allStuds[i].id === this.id) {
                _7academy.allStuds.splice(i, 1);
                break;
            }

        delete _7academy.courses[`${student.course}`].level[`${student.level}`][`${id}`]; //  Updating the student class list

        return 'Deleted successfully'
    }
}