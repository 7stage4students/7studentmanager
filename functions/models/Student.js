module.exports = class Student {
    constructor(id, name, email, password, level = 1, course = "Web Development", photoUrl = "", gender = "male", qrCodeUrl = "", active = false, phone="") {

        this.id = id,
            this.name = name,
            this.email = email,
            this.level = level,
            this.course = course,
            this.photoUrl = photoUrl,
            this.qrCodeUrl = qrCodeUrl;
        this.active = active;
        this.gender = gender;
        this.phone = phone;

    }

    prepareStudent() {


        return JSON.parse(JSON.stringify(this));
    }

    snapshotToJSON(datasnapshot) {
        let data = datasnapshot.data();
        console.log(datasnapshot.data().course)
        this.id = datasnapshot.id;
        this.email = data.email;
        this.level = data.level;
        this.phone = data.phone;
        this.course = data.course;
        this.photoUrl = data.photoUrl;
        this.qrCodeUrl = data.qrCodeUrl;
        this.active  = data.active;
        this.gender  = data.gender;
        this.phone = data.phone;
        // this.name = datasnapshot[]
        
        return this;

    }

}