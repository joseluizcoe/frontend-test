var express = require("express"),
    app = express(),
    http = require("http"),
    path = require("path"),
    arguments = require("shell-arguments");
global.CONFIG = require("./config");
require("./routes")(app);

app.use(
    "/static",
    express.static(
        path.join(__dirname, "public")
    )
);

if (arguments.port && /\d/g.test(arguments.port)) {
    CONFIG.PORT = arguments.port;
}

if (arguments.encoding) {
    CONFIG.VIEW.ENCODING = arguments.encoding;
}

if (arguments.extension) {
    CONFIG.VIEW.EXTENSION = arguments.extension;
}

http
    .createServer(app)
    .listen(
        CONFIG.PORT,
        function() {
            console.log("Application running on port: " + CONFIG.PORT);
        }
    );
