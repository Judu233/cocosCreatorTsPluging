/*
 * @features: 全局函数
 * @description: 每次修改了全局函数，记得重启任务
 *  并且全局函数不能共享数据 ->因为函数是独立编译存在于文件;
 *  比如修改了插件名字也是同样的
 * @Date: 2020-08-24 14:25:51
 * @Author: judu233(769471424@qq.com)
 * @LastEditTime: 2020-08-24 22:08:42
 * @LastEditors: judu233
 */
var fs = require("fs");
var path = require('path');
var defpath = path.join(__dirname, 'package.json');
var pg_config = JSON.parse(fs.readFileSync(defpath));
var pg_Name = pg_config.name;
var pg_js = "js";

var warp = "\n";
var v = "var ";
var sem = ";";
var r_tu = "return ";
var sem_warp = sem + warp;
var equal = " = ";
var q = "\"";
var r_sl = "/";
var v_str = function (v_Name, value) {
    return v + v_Name + equal + value + sem_warp;
};
var f_str = function (content) {
    return " function(arg){" + content + "}";
};
var g_qStr = function (str) {
    return q + str + q;
};
var fun_str = function (v_Name, fun) {
    return v_str(v_Name, f_str(fun));
};
var if_str = function (judgment, res) {
    return "if(" + judgment + ")" + res + sem;
};

module.exports =
    v_str("PG_Name", g_qStr(pg_Name)) +
    fun_str("PG_JsPath",
        if_str("arg == null", "arg" + equal + q + q) +
        r_tu + g_qStr("packages://" + pg_Name + r_sl + pg_js + r_sl) + "+ arg" + sem
    ) +
    fun_str("PG_RootPath",
        if_str("arg == null", "arg" + equal + q + q) +
        r_tu + g_qStr("packages://" + pg_Name + r_sl) + "+ arg" + sem
    );