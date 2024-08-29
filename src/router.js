const statusesRoute = require("./db/statuses.json");
const typesRoute = require("./db/types.json");
const projectsRoute = require("./db/projects.json");
const progressRoute = require("./db/progress.json");
const costsRoute = require("./db/costs.json");
const partnershipCosts1487 = require("./db/partnershipCosts1487.json");
const contractors1487 = require("./db/contractors1487.json");
const eventsEntityWatchers1487 = require("./db/eventsEntityWatchers1487.json");

module.exports = function () {
  return {
    statuses: statusesRoute,
    types: typesRoute,
    costs: costsRoute,
    progress: progressRoute,
    projects: projectsRoute,
    contractors: contractors1487,
    "partnership-costs": partnershipCosts1487,
    "entity-watchers": eventsEntityWatchers1487,
  };
};
