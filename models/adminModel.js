const admins = [
    {id: 1, name: 'John Doe',role: 'Instructor',email: 'john@gmail.com',gender: 'male',hashedPassword: ''},
    {id: 2, name: 'Fred',role: 'Instructor',email: 'fred@gmail.com',gender: 'male',hashedPassword: ''},
    {id: 3, name: 'Frank',role: 'Communication',email: 'frank@gmail.com',gender: 'male',hashedPassword: ''}
]



//helper function 
const getAdmins = (cb) => {
    cb(admins)
}

module.exports = class Admin {
    constructor(id,name,role,email,gender,hashedPassword){
        this.id = id;
        this.name = name;
        this.role = role;
        this.email = email;
        this.gender = gender;
        this.hashedPassword = hashedPassword;
    }

    getAdminById(id){
        getAllAdmins(allAdmins => {
            return 'Admin Wiith same id as one we received'
        })
    }

    static getAllAdmins = (cb) => {
        getAdmins(admins => {
            cb(admins)
            console.log(admins)
        })
    }

    static validAdmin = (email,password) => {
        let isAdmin = false;
        for(let i = 0; i < admins.length; i++){
            if(admins[i].email == email && admins[i].hashedPassword == password){
                isAdmin = true;
                console.log(admins[i])
                break;
            }
        }
        if(!isAdmin) {
            return false;
        }else {
            return true
        }
    }
}