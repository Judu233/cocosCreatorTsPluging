/*
 * @features: 插件渲染进程
 * @description: 关于脚本使用类的静态函数请不要直接导入类使用；
 * @Date: 2020-08-18 16:51:13
 * @Author: judu233(769471424@qq.com)
 * @LastEditTime: 2020-08-24 21:00:16
 * @LastEditors: judu233
 */

import Fs from "fs";
import Vue from 'vue';
import { I_init_exports } from "./init";
 
/**渲染线程直接使用api */
let init: I_init_exports = Editor.require(PG_JsPath("init.js"));
let msgType = new init.Message();

interface IMessageType {
    msg: string;
}
class PanelMessage {
    plugin: IMessageType;
    constructor() { this.plugin = <IMessageType>{}; }

    [msgType.clickPanel](event: any) {
        Editor.log(`点击了面板按钮`);
        this.plugin.msg = "Yesss!";
    }
}
class Panel {
    /**css模板 */
    style: string;
    /**html模板 */
    template: string;
    /**vue用 */
    plugin: IMessageType;
    /**页面--frame */
    shadowRoot: any;
    /**消息 */
    messages: PanelMessage;

    constructor() {
        this.style = Fs.readFileSync(
            Editor.url(PG_RootPath("asset/index.css")),
            "utf-8"
        );
        this.template = Fs.readFileSync(
            Editor.url(PG_RootPath("asset/index.html")),
            "utf-8"
        );
        this.messages = new PanelMessage();
        this.plugin = this.messages.plugin;
    }

    // method executed when template and styles are successfully loaded and initialized
    ready() {
        this.plugin = new Vue({
            el: this.shadowRoot,
            created() {

            },
            data: { msg: "Noooo!" },
            methods: {
                onBtnClick() {
                    Editor.Ipc.sendToMain(msgType.click);
                }
            }
        });
    }
}
Editor.Panel.extend(new Panel());
