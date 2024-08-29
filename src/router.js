var statusesRoute = require("./db/statuses.json");
var typesRoute = require("./db/types.json");
var projectsRoute = require("./db/projects.json");
var progressRoute = require("./db/progress.json");

module.exports = function () {
  return {
    statuses: statusesRoute,
    types: typesRoute,
    projects: projectsRoute,
    progress: progressRoute,
  };
};
