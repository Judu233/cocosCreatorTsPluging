"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var PG_Name = "ts_pluging";
var PG_JsPath =  function(arg){if(arg == null)arg = "";return "packages://ts_pluging/js/"+ arg;};
var PG_RootPath =  function(arg){if(arg == null)arg = "";return "packages://ts_pluging/"+ arg;};

var exports = {};
module.exports = exports;
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @features: 插件主进程加载的脚本
 * @description: 不同进程请使用api来传递消息
 * @Date: 2020-08-18 16:52:08
 * @Author: judu233(769471424@qq.com)
 * @LastEditTime: 2020-08-24 20:46:43
 * @LastEditors: judu233
 */
//进行api提示
/// <reference  path ="../EditorUtil.d.ts" />
/**对于Editor.require失效时，加载Js */
var fs_1 = __importDefault(require("fs"));
var vm_1 = __importDefault(require("vm"));
var path_1 = __importDefault(require("path"));
var module_1 = __importDefault(require("module"));
var getModuleFromString = function (bundle, filename) {
    var m = { exports: {} };
    var wrapper = module_1.default.wrap(bundle);
    var script = new vm_1.default.Script(wrapper, {
        filename: filename,
        displayErrors: true
    });
    var result = script.runInThisContext(); // 此处可以指定代码的执行环境，此api在nodejs文档中有介绍
    result.call(m.exports, m.exports, require, m); // 执行wrapper函数，此处传入require就解决了第一种方法不能require的问题
    return m;
};
var jsName = "init.js";
var modulerData = getModuleFromString(fs_1.default.readFileSync(path_1.default.join(__dirname, jsName), 'utf-8'), jsName);
var init = modulerData;
var msg = new init.exports.Message();
/**
 *  插件主线程模块类
 */
var MainLoad = /** @class */ (function () {
    function MainLoad() {
        this.messages = new Messages();
    }
    MainLoad.prototype.load = function () {
        // execute when package loaded
    };
    MainLoad.prototype.unload = function () {
        // execute when package unloaded
    };
    return MainLoad;
}());
var Messages = /** @class */ (function () {
    function Messages() {
    }
    Messages.prototype[msg.open] = function () {
        Editor.Panel.open(msg.panelName);
    };
    Messages.prototype[msg.hello] = function () {
        Editor.log('say-hello!');
        // send ipc message to panel
        Editor.Ipc.sendToPanel(msg.panelName, msg.clickPanel);
    };
    Messages.prototype[msg.click] = function () {
        Editor.log('Button clicked!');
    };
    return Messages;
}());
module.exports = new MainLoad();
