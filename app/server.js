const express = require("express");
const path = require("path");

const app = express();
const PORT = procress.env.PORT || 3001;

app.use(express.json());

app.use(express.urlencoded({ extends: true }));
require("./app/assets/apiRoutes.js"(app));
require("./app/assets/htmlRoutes.js"(app));
app.use(express.static(path.join(__dirname + "/public/app")));

app.listen(PORT, () => {
	console.log(`App listening on PORT; ${PORT}`);
});
