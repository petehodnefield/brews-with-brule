const express = require("express");
const routes = require("./controllers/");
const path = require("path");
const sequelize = require("./config/connection");
const cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(session(sess));

// Turn on routes``
app.use(routes);

app.use(cors)


// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Now listening on http://localhost:${PORT}/`)
  );
});
