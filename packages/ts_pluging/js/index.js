"use strict";
/*
 * @features: 插件渲染进程
 * @description: 关于脚本使用类的静态函数请不要直接导入类使用；
 * @Date: 2020-08-18 16:51:13
 * @Author: judu233(769471424@qq.com)
 * @LastEditTime: 2020-08-24 21:58:54
 * @LastEditors: judu233
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var PG_Name = "ts_pluging";
var PG_JsPath =  function(arg){if(arg == null)arg = "";return "packages://ts_pluging/js/"+ arg;};
var PG_RootPath =  function(arg){if(arg == null)arg = "";return "packages://ts_pluging/"+ arg;};

var exports = {};
module.exports = exports;
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var vue_1 = __importDefault(require("vue"));
/**渲染线程直接使用api */
var init = Editor.require(PG_JsPath("init.js"));
var msgType = new init.Message();
var PanelMessage = /** @class */ (function () {
    function PanelMessage() {
        this.plugin = {};
    }
    PanelMessage.prototype[msgType.clickPanel] = function (event) {
        Editor.log("\u70B9\u51FB\u4E86\u9762\u677F\u6309\u94AE");
        this.plugin.msg = "Yesss!";
    };
    return PanelMessage;
}());
var Panel = /** @class */ (function () {
    function Panel() {
        this.style = fs_1.default.readFileSync(Editor.url(PG_RootPath("asset/index.css")), "utf-8");
        this.template = fs_1.default.readFileSync(Editor.url(PG_RootPath("asset/index.html")), "utf-8");
        this.messages = new PanelMessage();
        this.plugin = this.messages.plugin;
    }
    // method executed when template and styles are successfully loaded and initialized
    Panel.prototype.ready = function () {
        this.plugin = new vue_1.default({
            el: this.shadowRoot,
            created: function () {
            },
            data: { msg: "Noooo!" },
            methods: {
                onBtnClick: function () {
                    Editor.Ipc.sendToMain(msgType.click);
                }
            }
        });
    };
    return Panel;
}());
Editor.Panel.extend(new Panel());
