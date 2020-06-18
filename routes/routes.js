const studentRoutes = require("./student");const appRouter = (app, fs) => {

  app.get("/", (req, res) => {
    res.render('index');
  });

  studentRoutes(app, fs);
};

module.exports = appRouter;