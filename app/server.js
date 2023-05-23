const express = require("express");
const path = require("path");

const app = express();
const PORT = procress.env.PORT || 6969;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);
app.use(express.static(path.join(__dirname + "/app/public")));

app.listen(PORT, () => {
	console.log(`App listening on PORT; ${PORT}`);
});
