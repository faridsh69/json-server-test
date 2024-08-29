var jsonServer = require("json-server");
var server = jsonServer.create();
var router = jsonServer.router(require("./router.js")());
var middlewares = jsonServer.defaults();

var project1487Route = require("./db/project1487.json");
var contractorsAllAnalysis1487 = require("./db/contractorsAllAnalysis1487.json");
var eventsFilter = require("./db/eventsFilter.json");

server.use(middlewares);

server.get("/projects/1487", (_, res) => res.json(project1487Route));
server.get("/events/filter", (_, res) => res.json(eventsFilter));
server.get("/contractors/all/analysis", (_, res) =>
  res.json(contractorsAllAnalysis1487)
);

server.use(router);
server.listen(5000, function () {
  console.log("JSON Server is running");
});
