const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 最新的 vue-loader 中，VueLoaderPlugin 插件的位置有所改变
const { VueLoaderPlugin } = require('vue-loader/dist/index');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development', // 环境模式
  entry: path.resolve(__dirname, './src/main.js'), // 打包入口
  output: {
    path: path.resolve(__dirname, 'dist'), // 打包出口
    filename: 'js/[name].js', // 打包完的静态资源文件名
  },
  resolve: {
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'), // 这样配置后 @ 可以指向 src 目录
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // 不编译node_modules下的文件
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/i,
        use: [
          // compiles sass to CSS
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      // for i18n resources (json/json5/yaml)
      // {
      //   test: /\.(js|json5?|ya?ml)$/, // target json, json5, yaml and yml files
      //   type: 'javascript/auto',
      //   // Use `Rule.include` to specify the files of locale messages to be pre-compiled
      //   include: [
      //     path.resolve(__dirname, './src/locales'),
      //   ],
      //   loader: '@intlify/vue-i18n-loader',
      // },
      // // for i18n custom block
      // {
      //   resourceQuery: /blockType=i18n/,
      //   type: 'javascript/auto',
      //   loader: '@intlify/vue-i18n-loader',
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.html'), // 我们要使用的 html 模板地址
      filename: 'index.html', // 打包后输出的文件名
      title: 'Vue3 后台管理系统', // index.html 模板内，通过 <%= htmlWebpackPlugin.options.title %> 拿到的变量
    }),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    static: './dist',
    // Dev server client for web socket transport, hot and live reload logic
    hot: true,
    compress: true,
    port: 8090,
  },
};
