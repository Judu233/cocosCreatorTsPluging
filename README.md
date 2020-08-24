# cocosCreator插件ts开发包

**由于该插件开发包由于本人技术水平有限，所以如有Bug,欢迎大佬提出或修改**
[码云地址](https://gitee.com/juduSence/cocosCreatorTsPluging)
[github地址](https://github.com/Judu233/cocosCreatorTsPluging)

## 该插件使用说明
####1.由于该插件包是基于vscode写的，所以开始使用前请开启tsc任务监视
>快捷键：ctrl + shift + B 打开任务栏

**注意：每次修改Gloabel.js,package.json 等文件要重启任务才有效**

####2.关于文件导入导出说明：
由于每个脚本之间不能直接require 要使用Editor.require(url) .url必须正确才能导入，对于线程不同，只能动态加载运行脚本导入；
所以每个脚本不能根据提示直接导入使用（导入没使用不报错），只有接口（interface可以直接导入使用）
因为执行编译后会把interface删除掉，所以只能作为类型提示

导出可以使用export  和  export default 也可以使用   module.exports  = any;
**注意：由于export 其实是 module.exports 的引用**
####举例： 
-----------------------------------
####testExport.ts
```javascript
export  let  s =  8;
export  default  let k = 9;
```
编译后=>
-----------------------------------
####testExport.js
```javascript
module.exports = {
	s = 8,
	default  : {
		k = 9,
	}
};
```
-----------------------------------

####import.ts
```javascript
let test  = Editor.require(`..../testExport.js`);
test.s ;   // s = 8;
test.default.k  ;  // k = 9;
```
------------------------------------
**注意关于插件主进程的导出， 不能使用 export  和  export default 导出，只能使用module.exports ，其他脚本就随意了。。**


####3.关于类的提示：
由于不能直接使用提示导入进来的类，所以关于类，只能写接口
```javascript
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
 *  导入使用：
 *  导入只能导入接口（ I_init_exports ），其他导入使用要报错
        let ss: I_init_exports = Editor.require(PG_JsPath("init.js")); // => 引入该文件
        let ddd = new ss.default();  //构造类 => 实例化
        ss.default.test_static = 3;  // => 调用静态方法
        let mesg = new  ss.Message(); //构造类 => 实例化

        关于Editor.require 不能加载的时候，请动态加载运行脚本获取导出
 */
```
#####4.关于全局函数提示：
**EditorUtil.d.ts**有引擎api 和 全局函数提示有3个，还有关于引擎api还不够完善，本人时间也有限，欢迎大佬来更新；

本教程到此结束，欢迎大佬提出更好调用的方法；



