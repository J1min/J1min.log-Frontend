const {
  PHASE_PRODUCTION_BUILD,
  PHASE_DEVELOPMENT_SERVER,
} = require("next/constants");

const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");
const withEnv = nextEnv();

dotenvLoad();

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    console.log("I'm in dev mode");
  } else if (phase === PHASE_PRODUCTION_BUILD) {
    console.log("I'm in build mode");
  }
  return withEnv(defaultConfig);
};
