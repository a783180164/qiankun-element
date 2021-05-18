/*
 * @Author: your name
 * @Date: 2021-04-23 15:03:31
 * @LastEditTime: 2021-04-28 14:32:19
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \qiankun-element\config\install.js
 */

const fs = require('fs');
const path = require('path');
const util = require('util');
const sub_app_ath = path.resolve();
const sub_apps = fs.readdirSync(sub_app_ath).filter(i => /^micro-jueji/.test(i));

console.log(`即将进入所有模块并下载依赖：${JSON.stringify(sub_apps)} ing... 批量下载所有项目依赖推荐使用 npm run cinit`)

const exec = util.promisify(require('child_process').exec);

// npm 源
let registry = process.argv.length === 3 ? 'cnpm install' : 'npm install';

function install() {
  sub_apps.forEach(async i => {
    console.log(`${i} 开始下载，耗时较久请耐心等待...`)
    const { stdout, stderr } = await exec(registry, { cwd: path.resolve(i) });
    console.log(i, 'success', stdout)
    console.error(i, 'error', stderr)
  });
};
install()

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});
