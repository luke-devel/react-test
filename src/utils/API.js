import axios from "axios";
const puppeteerScrapeScriptTag = require("./puppeteerScrapeScriptTag.js");

export default {
  search: function(query) {
    return puppeteerScrapeScriptTag(query);
  }
};
