const express = require('express');
const router = express.Router();
var admin = require("firebase-admin");

var db = admin.firestore();

//My Imports
const studentController = require('../controllers/studentController');
const Student = require('../models/Student');
///TODO remove sample function
// read item

router.post("/", (req, res) => {
    res.send("working")
})
router.post('/test', (req, res) => {
    (async () => {
        try {
            const studentsRef = db.collection('students').doc();
            let studentID = studentsRef.id;

            var newStudent = new Student().prepareStudent("zidane","zidan@seven.com",3,"Web Dev", "Male");
            console.log(newStudent)
            let setSf = studentsRef.set(newStudent);

            res.send("saved")

        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});


router.get('/test', (req, res) => {
    (async () => {
        try {
            let cityRef = db.collection('cities').doc('SF');
            let getDoc = cityRef.get()
                .then(doc => {
                    if (!doc.exists) {
                        res.send("not found")
                    } else {
                      res.json(doc.data());
                    }
                })
                .catch(err => {
                    res.send('Error getting document', err);
                });

        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});


router.patch('/test/:id', (req, res) => {
    (async () => {
        try {
            let cityRef = db.collection('cities').doc(req.params.id);
            cityRef.set(req.body)
           res.send("updated")
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});

router.delete('/test/:id', (req, res) => {
    (async () => {
        try {
            let cityRef = db.collection('cities').doc(req.params.id);
            cityRef.delete()
           res.send("deleted")
        } catch (error) {
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});




module.exports = router;