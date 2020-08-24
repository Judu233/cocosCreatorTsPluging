/*
 * @features: 演示提示
 * @description: 脚本的类不要直接引入，请引入接口来提示
 * @Date: 2020-08-20 13:55:53
 * @Author: judu233(769471424@qq.com)
 * @LastEditTime: 2020-08-24 20:51:47
 * @LastEditors: judu233
 */

/**
 * 一个默认类 ，关于类只会提示非静态部分，静态部分请声明接口
 */
export default class InitClass {
    public name: string = PG_Name;

    static test_static = 9;
}
/**
 * 静态类请声明接口来提示 
 *  接口请继承I_default_class
 * 没有可不写接口
*/
export interface IdefaultClass extends I_default_class<InitClass> {
    test_static: number;
}

/**
 * 其他类
 *  注意：某些菜单消息必须是package.json 里一样的
 */
export class Message {
    /**主进程 */
    hello = `${PG_Name}:say-hello`; 
    click = `${PG_Name}:click`;
    open = `${PG_Name}:open`;

    /**窗口渲染进程 */
    panelName = `${PG_Name}`;
    clickPanel = `${PG_Name}:clickPanel`;
}

/** 导出枚举 */
export enum enum_test { test1, test2, }
export let value: number = 0;

/**
 *  导出模块声明提示
 *  每个导出变量请声明类型，以方便导入时进行提示
 */
export interface I_init_exports {
    /**
     * 默认导出 -> 使用default, 其他使用本身名字
     */
    default: IdefaultClass;
    /**
     *  导出其他类 -> 没有使用接口的请使用下面默认接口
     */
    Message: I_default_class<Message>;
    /**
     * 导出枚举
     */
    enum_test: enum_test;
    /**
     * 导出变量
     */
    value: number;
}interface I_default_class<T> { new(): T; }  //该接口用于实例化类


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

