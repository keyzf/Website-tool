const webpack = require("webpack");
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");
const VueSSRServerPlugin = require("vue-server-renderer/server-plugin");
const nodeExternals = require("webpack-node-externals");
const targetMap = {
  server: 'node',
  client: 'web',
}
const nodeMap = {
  server: undefined,
  client: false
}
const libraryTargetMap = {
  server: 'commonjs2',
  client: undefined
}
const splitChunksMap = {
  server: false,
  client: undefined
}
const externalsMap = {
  server: nodeExternals({
    whitelist: [/\.css$/, /\?vue&type=style/]
  }),
  client: undefined
}
const vuePluginMap = {
  server: [
    new VueSSRServerPlugin(),
    new webpack.DefinePlugin({
      "isNodeEnv": JSON.stringify(true),
    })
  ],
  client: [
    new VueSSRClientPlugin(),
    new webpack.DefinePlugin({
      "isNodeEnv": JSON.stringify(false),
    })
  ],
}

module.exports = {
  targetMap,
  nodeMap,
  libraryTargetMap,
  splitChunksMap,
  externalsMap,
  vuePluginMap
}