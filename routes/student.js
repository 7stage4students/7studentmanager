
const studentRoutes = (app, fs) => {


  const dataPath = "./data/students.json";

  const readFile = (
    callback,
    returnJson = false,
    filePath = dataPath,
    encoding = "utf8"
  ) => {
    fs.readFile(filePath, encoding, (err, data) => {
      if (err) {
        throw err;
      }

      callback(returnJson ? JSON.parse(data) : data);
    });
  };

  const writeFile = (
    fileData,
    callback,
    filePath = dataPath,
    encoding = "utf8"
  ) => {
    fs.writeFile(filePath, fileData, encoding, (err) => {
      if (err) {
        throw err;
      }

      callback();
    });
  };

  // Add student
  app.post("/students/add", (req, res) => {
    readFile((data) => {
      const newStudentId = Object.keys(data).length + 1;

      // add the new student
      data[newStudentId] = req.body.data;

      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(`new student with id:${newStudentId} added`);
      });
    }, true);
  });

  // Get all students
  app.get("/students", (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }

      res.send(data);
    });
  });

  // Get student by id
  app.get("/students/:id/profil", (req, res) => {
    const studentId = req.params["id"];
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }

      res.status(200).send(`students profil witch id:${studentId}`);
    });
  });

  // Update student
  app.put("/students/:id/edit", (req, res) => {
    readFile((data) => {

      const studentId = req.params["id"];
      data[studentId] = req.body.data;

      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(`users id:${studentId} updated`);
      });
    }, true);
  });

  // Delete student
  app.delete("/students/:id", (req, res) => {
    readFile((data) => {
      const studentId = req.params["id"];
      delete data[studentId];

      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send(`students id:${studentId} removed`);
      });
    }, true);
  });
}

module.exports = studentRoutes;