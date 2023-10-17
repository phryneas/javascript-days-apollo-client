console.log("fooo!");
module.exports = {
  client: {
    service: {
      name: "dogs",
      url: "http://localhost:3010",
    },
    includes: ["./src/**/*.tsx"],
  },
};
