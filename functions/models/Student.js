
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

}