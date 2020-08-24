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
import fs from 'fs';
import vm from "vm";
import path from "path";
import NativeModule from "module";
let getModuleFromString = (bundle: string, filename: string) => {
    const m: any = { exports: {} }
    const wrapper = NativeModule.wrap(bundle)
    const script = new vm.Script(wrapper, {
        filename,
        displayErrors: true
    })
    const result = script.runInThisContext() // 此处可以指定代码的执行环境，此api在nodejs文档中有介绍
    result.call(m.exports, m.exports, require, m) // 执行wrapper函数，此处传入require就解决了第一种方法不能require的问题
    return m
};
let jsName = "init.js";
let modulerData = getModuleFromString(fs.readFileSync(path.join(__dirname, jsName), 'utf-8'), jsName);

/**执行脚本 获取模块init.js*/
import { I_init_exports } from "./init";
const init: { exports: I_init_exports } = modulerData;
let msg = new init.exports.Message();

/**
 *  插件主线程模块类
 */
class MainLoad {
    constructor() {
        this.messages = new Messages();
    }
    load() {
        // execute when package loaded
    }

    unload() {
        // execute when package unloaded
    }
    messages: Messages;
}
class Messages {
    [msg.open]() {
        Editor.Panel.open(msg.panelName);
    }
 
    [msg.hello]() {
        Editor.log('say-hello!');
        // send ipc message to panel
        Editor.Ipc.sendToPanel(msg.panelName, msg.clickPanel);
    }

    [msg.click]() {
        Editor.log('Button clicked!');
    }
}

module.exports = new MainLoad(); 