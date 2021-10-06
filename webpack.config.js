const path = require("path");
module.exports = {
  resolve: {
    extensions: ["js", "ts"],
    alias: {
      Components: path.resolve(__dirname, "src/components"),
      Hooks: path.resolve(__dirname, "src/hook"),
      HOC: path.resolve(__dirname, "src/hoc"),
      CoreComponents: path.resolve(__dirname, "src/core"),
      Utils: path.resolve(__dirname, "src/utils"),
      ReduxActions: path.resolve(__dirname, "src/redux/actions"),
      Selectors: path.resolve(__dirname, "src/redux/selectors"),
      // ...etc
    },
  },
};
