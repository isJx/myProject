module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true, //是否跨域
        pathRewrite: {
          //重写路径
          "^/api": "/",
        },
      },
    },
  },
};
