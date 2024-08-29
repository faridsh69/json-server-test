var statusesRoute = require("./db/statuses.json");
var typesRoute = require("./db/types.json");
var projectsRoute = require("./db/projects.json");
var progressRoute = require("./db/progress.json");
var costsRoute = require("./db/costs.json");
var eventsFilter = require("./db/eventsFilter.json");
var project1487Route = require("./db/project1487.json");
var partnershipCosts1487 = require("./db/partnershipCosts1487.json");
var contractors1487 = require("./db/contractors1487.json");
var contractorsAllAnalysis1487 = require("./db/contractorsAllAnalysis1487.json");
var eventsEntityWatchers1487 = require("./db/eventsEntityWatchers1487.json");

module.exports = function () {
  return {
    statuses: statusesRoute,
    types: typesRoute,
    costs: costsRoute,
    progress: progressRoute,
    projects: projectsRoute,
    "projects/1487": project1487Route,
    contractors: {
      all: {
        analysis: contractorsAllAnalysis1487,
      },
    },
    events: {
      filter: eventsFilter,
    },
    contractors: contractors1487,
    "partnership-costs": partnershipCosts1487,
    "entity-watchers": eventsEntityWatchers1487,
  };
};
