const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(require("./router.js")());
const middlewares = jsonServer.defaults({ readOnly: true });

const project1487Route = require("./db/project1487.json");
const contractorsAllAnalysis1487 = require("./db/contractorsAllAnalysis1487.json");
const eventsFilter = require("./db/eventsFilter.json");

server.use(middlewares);

// nested routes
server.get("/projects/1487", (_, res) => res.json(project1487Route));
server.get("/events/filter", (_, res) => res.json(eventsFilter));
server.get("/contractors/all/analysis", (_, res) =>
  res.json(contractorsAllAnalysis1487)
);

server.use(router);
server.listen(5000, function () {
  console.log("JSON Server is running");
});
