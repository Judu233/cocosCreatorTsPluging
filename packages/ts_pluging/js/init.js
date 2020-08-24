"use strict";
/*
 * @features: 演示提示
 * @description: 脚本的类不要直接引入，请引入接口来提示
 * @Date: 2020-08-20 13:55:53
 * @Author: judu233(769471424@qq.com)
 * @LastEditTime: 2020-08-24 20:51:47
 * @LastEditors: judu233
 */
var PG_Name = "ts_pluging";
var PG_JsPath =  function(arg){if(arg == null)arg = "";return "packages://ts_pluging/js/"+ arg;};
var PG_RootPath =  function(arg){if(arg == null)arg = "";return "packages://ts_pluging/"+ arg;};

var exports = {};
module.exports = exports;
Object.defineProperty(exports, "__esModule", { value: true });
exports.value = exports.enum_test = exports.Message = void 0;
/**
 * 一个默认类 ，关于类只会提示非静态部分，静态部分请声明接口
 */
var InitClass = /** @class */ (function () {
    function InitClass() {
        this.name = PG_Name;
    }
    InitClass.test_static = 9;
    return InitClass;
}());
exports.default = InitClass;
/**
 * 其他类
 *  注意：某些菜单消息必须是package.json 里一样的
 */
var Message = /** @class */ (function () {
    function Message() {
        /**主进程 */
        this.hello = PG_Name + ":say-hello";
        this.click = PG_Name + ":click";
        this.open = PG_Name + ":open";
        /**窗口渲染进程 */
        this.panelName = "" + PG_Name;
        this.clickPanel = PG_Name + ":clickPanel";
    }
    return Message;
}());
exports.Message = Message;
/** 导出枚举 */
var enum_test;
(function (enum_test) {
    enum_test[enum_test["test1"] = 0] = "test1";
    enum_test[enum_test["test2"] = 1] = "test2";
})(enum_test = exports.enum_test || (exports.enum_test = {}));
exports.value = 0;
/**
 *
 *  导入说明：
 *  导入只能导入接口（ I_init_exports ），其他要报错
        let ss: I_init_exports = Editor.require(PG_JsPath("init.js")); // => 引入该文件
        let ddd = new ss.default();  //构造类 => 实例化
        ss.default.test_static = 3;  // => 调用静态方法
        let mesg = new  ss.Message(); //构造类 => 实例化

        关于Editor.require 不能加载的时候，请动态加载运行脚本获取导出
 */
