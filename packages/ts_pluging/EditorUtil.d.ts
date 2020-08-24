/*
 * @features: 编辑器的代码提示
 * @description: 说明
 * @Date: 2020-08-18 00:06:33
 * @Author: judu233(769471424@qq.com)
 * @LastEditTime: 2020-08-24 19:36:50
 * @LastEditors: judu233
 */

/**
 * 编辑器类
 */
declare class Editor {
    static Audio: {
        cancel(t): any;
        context();
        load(t, e): any;
    };

    static CocosAnalytic: {
        _event: {};
        _eventsCount: number;
        _maxListeners: any;
    };

    static Dialog: {
        messageBox(...l);
        openFile(...l);
        saveFile(...l);
    };

    /**
     *  backIn: (n)
     *backInOut: (n)
     *backOut: (n)
     *backOutIn: (u)
     *bounceIn(t);
     *bounceInOut(t);
     *bounceOut: (n)
     *bounceOutIn: (u)
     *circIn: (n)
     *circInOut: (n)
     *circOut: (n)
     *circOutIn: (u)
     *cubicIn: (n)
     *cubicInOut: (n)
     *cubicOut: (n)
     *cubicOutIn: (u)
     *elasticIn: (n)
     *elasticInOut: (n)
     *elasticOut: (n)
     *elasticOutIn: (u)
     *expoIn: (n)
     *expoInOut: (n)
     *expoOut: (n)
     *expoOutIn: (u)
     *fade: (n)
     *linear: (n)
     *quadIn: (n)
     *quadInOut: (n)
     *quadOut: (n)
     *quadOutIn: (u)
     *quartIn: (n)
     *quartInOut: (n)
     *quartOut: (n)
     *quartOutIn: (u)
     *quintIn: (n)
     *quintInOut: (n)
     *quintOut: (n)
     *quintOutIn: (u)
     *sineIn: (n)
     *sineInOut: (n)
     *sineOut: (n)
     *sineOutIn: (u)
     *smooth: (n)
     */
    static Easing: Object;
    static Gizmo: object;
    static GizmosUtils: {
        addMoveHandles(e, n, t);
        getCenter(e);
        getCenterWorldPos(n);
        getCenterWorldPos3D(e);
        getRecursiveNodes(e, t);
        getRecursiveWorldBounds3D(e);
        getWorldBounds3D(n);
        snapPixel(e);
        snapPixelWihVec2(e);
    };
    /**
     *  消息通讯：
     * 注意: 由于通讯基于 Electron 的底层 IPC 实现，所以切记传输的数据不可以包含原生对象，
     * 否则可能导致进程崩溃或者内存暴涨。推荐只传输纯 JSON 对象
     * 接收消息 要在主进程或渲染进程中接受 IPC 消息，最简单的办法是在声明对象的 messages 字段中注册以 IPC 消息为名的消息处理方法。
     * 除了在 messages 字段内注册之外还可以使用 Electron 的 Ipc 消息接口来监听，形式上更灵活：
     * 渲染进程中：
     * require('electron').ipcRenderer.on('foobar:message', function(event, args) {});
     * 主进程中：
     * require('electron').ipcMain.on('foobar:message', function(event, args) {});
     */
    static Ipc: {
        cancelRequest(e);
        debug: boolean;
        option(e);
        /**
         * 任意进程对所有进程广播
         * @param e ipc消息
         * @param r 参数
         */
        sendToAll(e, ...r);
        /**
         * 任意进程发送消息到插件主进程(插件的main.js)
         * @param r 要发送的ipc消息全名
         * @param n 消息参数
         */
        sendToMain(r, ...n);
        sendToMainSync(e, ...r);
        /**
         * 任意进程对编辑器主窗口（也就是对主窗口里的所有渲染进程广播）
         * @param e ipc消息
         * @param r 参数
         */
        sendToMainWin(e, ...r);
        sendToPackage(r, n, ...t);
        /**
         * 任意进程向特定面板发送消息。
         * @param r 面板id
         * @param n ipc消息全名
         * @param i 可选参数[, ...args, callback, timeout]
         */
        sendToPanel(r, n, ...i);
        /**
         * 任意进程对所有窗口（对包括弹出窗口在内的所有窗口渲染进程广播）
         * @param e ipc消息
         * @param r 参数
         */
        sendToWins(e, ...r);
        _closeAllSessions();
    };
    static IpcListener: object;
    static JS: {
        addon(e, ...t);
        assign(e, ...n);
        assignExcept(e, n, o);
        clear(e);
        copyprop(e, t, r);
        extend(e, r);
        extract(e, t);
        getPropertyByPath(e, t);
    };
    static KeyCode: {
        aliases: {
            break: 19;
            caps: 20;
            cmd: 91;
            control: 17;
            ctl: 17;
            del: 46;
            escape: 27;
            ins: 45;
            option: 18;
            pause: 19;
            pgdn: 33;
            pgup: 33;
            return: 13;
            spc: 32;
            windows: 91;
            "⇧": 16;
            "⌃": 17;
            "⌘": 91;
            "⌥": 18;
        };
        code: {
            0: 48;
            1: 49;
            2: 50;
            3: 51;
            4: 52;
            5: 53;
            6: 54;
            7: 55;
            8: 56;
            9: 57;
            ["'"]: 222;
            ',': 188;
            '-': 189;
            '.': 190;
            ['/']: 191;
            ';': 186;
            '=': 187;
            '[': 219;
            '\\': 220;
            ']': 221;
            '`': 192;
            a: 65;
            alt: 18;
            b: 66;
            backspace: 8;
            break: 19;
            c: 67;
            caps: 20;
            'caps lock': 20;
            cmd: 91;
            command: 91;
            control: 17;
            ctl: 17;
            ctrl: 17;
            d: 68;
            del: 46;
            delete: 46;
            down: 40;
            e: 69;
            end: 35;
            enter: 13;
            esc: 27;
            escape: 27;
            f: 70;
            f1: 112;
            f2: 113;
            f3: 114;
            f4: 115;
            f5: 116;
            f6: 117;
            f7: 118;
            f8: 119;
            f9: 120;
            f10: 121;
            f11: 122;
            f12: 123;
            g: 71;
            h: 72;
            home: 36;
            i: 73;
            ins: 45;
            insert: 45;
            j: 74;
            k: 75;
            l: 76;
            left: 37;
            m: 77;
            "my calculator": 183;
            "my computer": 182;
            n: 78;
            "num lock": 144;
            "numpad 0": 96;
            "numpad 1": 97;
            "numpad 2": 98;
            "numpad 3": 99;
            "numpad 4": 100;
            "numpad 5": 101;
            "numpad 6": 102;
            "numpad 7": 103;
            "numpad 8": 104;
            "numpad 9": 105;
            "numpad *": 106;
            "numpad +": 107;
            "numpad -": 109;
            "numpad.": 110;
            "numpad /": 111;
            o: 79;
            option: 18;
            p: 80;
            "page down": 34;
            "page up": 33;
            pause: 19;
            "pause /break": 19;
            pgdn: 33;
            pgup: 33;
            q: 81;
            r: 82;
            "return": 13;
            right: 39;
            "right click": 93;
            s: 83;
            "scroll lock": 145;
            shift: 16;
            space: 32;
            spc: 32;
            t: 84;
            tab: 9;
            u: 85;
            up: 38;
            v: 86;
            w: 87;
            windows: 91;
            x: 88;
            y: 89;
            z: 90;
            "⇧": 16;
            "⌃": 17;
            "⌘": 91;
            "⌥": 18;
        };
        codes: {
            0: 48;
            1: 49;
            2: 50;
            3: 51;
            4: 52;
            5: 53;
            6: 54;
            7: 55;
            8: 56;
            9: 57;
            ["'"]: 222;
            ',': 188;
            '-': 189;
            '.': 190;
            ['/']: 191;
            ';': 186;
            '=': 187;
            '[': 219;
            '\\': 220;
            ']': 221;
            '`': 192;
            a: 65;
            alt: 18;
            b: 66;
            backspace: 8;
            break: 19;
            c: 67;
            caps: 20;
            'caps lock': 20;
            cmd: 91;
            command: 91;
            control: 17;
            ctl: 17;
            ctrl: 17;
            d: 68;
            del: 46;
            delete: 46;
            down: 40;
            e: 69;
            end: 35;
            enter: 13;
            esc: 27;
            escape: 27;
            f: 70;
            f1: 112;
            f2: 113;
            f3: 114;
            f4: 115;
            f5: 116;
            f6: 117;
            f7: 118;
            f8: 119;
            f9: 120;
            f10: 121;
            f11: 122;
            f12: 123;
            g: 71;
            h: 72;
            home: 36;
            i: 73;
            ins: 45;
            insert: 45;
            j: 74;
            k: 75;
            l: 76;
            left: 37;
            m: 77;
            "my calculator": 183;
            "my computer": 182;
            n: 78;
            "num lock": 144;
            "numpad 0": 96;
            "numpad 1": 97;
            "numpad 2": 98;
            "numpad 3": 99;
            "numpad 4": 100;
            "numpad 5": 101;
            "numpad 6": 102;
            "numpad 7": 103;
            "numpad 8": 104;
            "numpad 9": 105;
            "numpad *": 106;
            "numpad +": 107;
            "numpad -": 109;
            "numpad.": 110;
            "numpad /": 111;
            o: 79;
            option: 18;
            p: 80;
            "page down": 34;
            "page up": 33;
            pause: 19;
            "pause /break": 19;
            pgdn: 33;
            pgup: 33;
            q: 81;
            r: 82;
            "return": 13;
            right: 39;
            "right click": 93;
            s: 83;
            "scroll lock": 145;
            shift: 16;
            space: 32;
            spc: 32;
            t: 84;
            tab: 9;
            u: 85;
            up: 38;
            v: 86;
            w: 87;
            windows: 91;
            x: 88;
            y: 89;
            z: 90;
            "⇧": 16;
            "⌃": 17;
            "⌘": 91;
            "⌥": 18;
        };
        names: {
            8: "backspace";
            9: "tab";
            13: "enter";
            16: "shift";
            17: "ctrl";
            18: "alt";
            19: "pause/break";
            20: "caps lock";
            27: "esc";
            32: "space";
            33: "page up";
            34: "page down";
            35: "end";
            36: "home";
            37: "left";
            38: "up";
            39: "right";
            40: "down";
            45: "insert";
            46: "delete";
            48: "0";
            49: "1";
            50: "2";
            51: "3";
            52: "4";
            53: "5";
            54: "6";
            55: "7";
            56: "8";
            57: "9";
            65: "a";
            66: "b";
            67: "c";
            68: "d";
            69: "e";
            70: "f";
            71: "g";
            72: "h";
            73: "i";
            74: "j";
            75: "k";
            76: "l";
            77: "m";
            78: "n";
            79: "o";
            80: "p";
            81: "q";
            82: "r";
            83: "s";
            84: "t";
            85: "u";
            86: "v";
            87: "w";
            88: "x";
            89: "y";
            90: "z";
            91: "command";
            93: "right click";
            96: "numpad 0";
            97: "numpad 1";
            98: "numpad 2";
            99: "numpad 3";
            100: "numpad 4";
            101: "numpad 5";
            102: "numpad 6";
            103: "numpad 7";
            104: "numpad 8";
            105: "numpad 9";
            106: "numpad *";
            107: "numpad +";
            109: "numpad -";
            110: "numpad .";
            111: "numpad /";
            112: "f1";
            113: "f2";
            114: "f3";
            115: "f4";
            116: "f5";
            117: "f6";
            118: "f7";
            119: "f8";
            120: "f9";
            121: "f10";
            122: "f11";
            123: "f12";
            144: "num lock";
            145: "scroll lock";
            182: "my computer";
            183: "my calculator";
            186: ";";
            187: "=";
            188: ",";
            189: "-";
            190: ".";
            191: "/";
            192: "`";
            219: "[";
            220: "\\";
            221: "]";
            222: "'";
        };
        title: {
            8: "backspace";
            9: "tab";
            13: "enter";
            16: "shift";
            17: "ctrl";
            18: "alt";
            19: "pause/break";
            20: "caps lock";
            27: "esc";
            32: "space";
            33: "page up";
            34: "page down";
            35: "end";
            36: "home";
            37: "left";
            38: "up";
            39: "right";
            40: "down";
            45: "insert";
            46: "delete";
            48: "0";
            49: "1";
            50: "2";
            51: "3";
            52: "4";
            53: "5";
            54: "6";
            55: "7";
            56: "8";
            57: "9";
            65: "a";
            66: "b";
            67: "c";
            68: "d";
            69: "e";
            70: "f";
            71: "g";
            72: "h";
            73: "i";
            74: "j";
            75: "k";
            76: "l";
            77: "m";
            78: "n";
            79: "o";
            80: "p";
            81: "q";
            82: "r";
            83: "s";
            84: "t";
            85: "u";
            86: "v";
            87: "w";
            88: "x";
            89: "y";
            90: "z";
            91: "command";
            93: "right click";
            96: "numpad 0";
            97: "numpad 1";
            98: "numpad 2";
            99: "numpad 3";
            100: "numpad 4";
            101: "numpad 5";
            102: "numpad 6";
            103: "numpad 7";
            104: "numpad 8";
            105: "numpad 9";
            106: "numpad *";
            107: "numpad +";
            109: "numpad -";
            110: "numpad .";
            111: "numpad /";
            112: "f1";
            113: "f2";
            114: "f3";
            115: "f4";
            116: "f5";
            117: "f6";
            118: "f7";
            119: "f8";
            120: "f9";
            121: "f10";
            122: "f11";
            123: "f12";
            144: "num lock";
            145: "scroll lock";
            182: "my computer";
            183: "my calculator";
            186: ";";
            187: "=";
            188: ",";
            189: "-";
            190: ".";
            191: "/";
            192: "`";
            219: "[";
            220: "\\";
            221: "]";
            222: "'";
        };
    };
    static MainMenu: {
        add(n, a);
        apply();
        init();
        remove(n);
        set(n, i);
        update(n, a);
    };
    static Math: {
        D2R: 0.017453292519943295;
        EPSILON: 1e-12;
        HALF_PI: 1.5707963267948966;
        /** 1.12e - 16 */
        MACHINE_EPSILON: number;
        R2D: 57.29577951308232;
        TWO_PI: 6.283185307179586;
        bezier(t, a, e, r, n);
        calculateMaxRect(t, a, e, r, n);
        clamp(t, a, e);
        clamp01(t);
        deg2rad(a);
        deg180(t);
        deg360(t);
        lerp(t, a, e);
        numOfDecimals(t);
        numOfDecimalsF(t);
        rad2deg(t);
        rad180(t);
        rad360(t);
        /**生成 t - a 的随机数 */
        randomRange(t, a);
        /**生成 t - a 的随机数整数 */
        randomRangeInt(t, a);
        solveCubicBezier(t, a, r, n, h);
        /**
         * => (a = m.clamp(a, 0, 20), parseFloat(t.toFixed(a)))
         */
        toPrecision(t, a);
    };
    static Menu: {
        checkTemplate(n);
        popup(r, t, u);
        register(r, t, u);
        walk(n, r);
    };
    static Metrics: {
        _events: {};
        _eventsCount: 0;
        _maxListeners: undefined;
        domain: null;
    };
    static Package: {
        queryInfo(e, n);
        queryInfos(e);
        reload(e);
    };
    /**
     * 引擎关于窗口的操作
     */
    static Panel: {
        /**
         * 关闭指定窗口
         * @param e 要关闭的窗口名字
         * @param n any
         */
        close(e, n);
        dock(e);
        /**
         * 一个包括特定字段的对象，用来描述整个面板的外观和功能。
         * 
         * @param e 描述插件外观和功能的对象
         */
        extend(e);
        /**
         * 查找指定窗口
         * @param e 要查找的窗口名字
         */
        find(e);
        focus(n);
        getFocusedPanel();
        isDirty(e);
        newFrame(e, n);
        /**
         * 打开或激活指定窗口
         * @param e 要打开或激活的窗口名字
         * @param n any 
         */
        open(e, n?);
        panels(any);
        popup(e);
        _dispatch(e, n, o, ...t);
        _unloadAll(e);
    };
    static Profile: {
        _events: {};
        _eventsCount: 0;
        _maxListeners: undefined;
    };
    /**
     * 关于当前打开项目的参数
     */
    static Project: {
        /**返回当前打开项目的id */
        id: string;
        /**返回当前打开项目的名字 */
        name: string;
        /**返回当前打开项目的绝对路径 */
        path: string;
        check(any);
        constructor(any);
        init(any);
    };
    static Protocol: {
        init(t);
        register(t, r);
        url(t);
    };
    /**
     * 关于场景消息
     */
    static Scene: {
        /**
         *  扩展包的主进程向渲染进程发送消息
         */
        callSceneScript(ipcName, ipcMssage, call);
    };
    static Selection: {
        cancel();
        clear(e);
        confirm();
        confirmed(e);
        contexts(e);
        curActivate(e);
        curGlobalActivate();
        /**
         * 返回选中节点的uuid数组
         * @param e 当前选中的节点
         */
        curSelection(e);
        filter(e, t, i);
        hover(e, t);
        hovering(e);
        local();
        patch(e, t, i);
        register(e);
        reset();
        select(e, t, i, s);
        setContext(e, t);
        unselect(e, t, i);
    };
    /**
     * 在 JavaScript 脚本中，你可以通过 Editor.T 接口获取当前语言对应的翻译后的文本：
     * @param t string
     * @param r 参数
     */
    static T(t, r);
    static UI: {
        Asset();
        BoxContainer();
        Button();
        ButtonState: {
            _initButtonState(i);
            _setPressed(e, t);
        };
        Checkbox();
        Color();
        ColorPicker();
        Disable: {
            canBeDisable(any);
            disabled(any);
            _initDisable(e);
            _isDisabledInHierarchy(e);
            _isDisabledSelf();
            _propgateDisab();
            _setIsDisabledAttribute(e);
        };
        Dock: object;
        DockResizer: object;
        DockUtils: {
            collapse();
            dragend();
            dragenterMainDock();
            dragleaveMainDock();
            dragleaveTab();
            dragoverDock(e);
            dragoverMainDock(e, t);
            dragoverTab(e);
            dragstart(e, t);
            dropMainDock(t);
            dropTab(t, r);
            dumpLayout();
            finalize();
            isPanel(e);
            isPanelFrame(e);
            isResizer(e);
            isTab(e);
            isTabBar(e);
            panelSpace(any);
            reset(t, n, a);
            resize();
            resizerSpace(any);
            root: {
                accessKey: ""
                assignedSlot: null
                attributeStyleMap: {
                    size: number;
                };
                attributes: {
                    [0]: {
                        baseURI: "file:///E:/cocos/CocosDashboard/resources/.editors/Creator/2.4.2/resources/app.asar/editor/index.html";
                        childNodes: NodeList[];
                        firstChild: null;
                        isConnected: false;
                        lastChild: null;
                        localName: "no-collapse";
                        name: "no-collapse";
                        namespaceURI: null;
                        nextSibling: null;
                        nodeName: "no-collapse";
                        nodeType: 2;
                        nodeValue: "";
                        ownerDocument: Element;
                        ownerElement: Element;
                        parentElement: null;
                        parentNode: null;
                        prefix: null;
                        previousSibling: null;
                        specified: true;
                        textContent: "";
                        value: "";
                    };
                    [1]: {
                        baseURI: "file:///E:/cocos/CocosDashboard/resources/.editors/Creator/2.4.2/resources/app.asar/editor/index.html";
                        childNodes: NodeList[];
                        firstChild: null;
                        isConnected: false;
                        lastChild: null;
                        localName: "class";
                        name: "class";
                        namespaceURI: null;
                        nextSibling: null;
                        nodeName: "class";
                        nodeType: 2;
                        nodeValue: "main-dock";
                        ownerDocument: Element;
                        ownerElement: Element;
                        parentElement: null;
                        parentNode: null;
                        prefix: null;
                        previousSibling: null;
                        specified: true;
                        textContent: "main-dock";
                        value: "main-dock";
                    };
                    [2]: {
                        baseURI: "file:///E:/cocos/CocosDashboard/resources/.editors/Creator/2.4.2/resources/app.asar/editor/index.html";
                        childNodes: NodeList[];
                        firstChild: null;
                        isConnected: false;
                        lastChild: null;
                        localName: "row";
                        name: "row";
                        namespaceURI: null;
                        nextSibling: null;
                        nodeName: "row";
                        nodeType: 2;
                        nodeValue: "";
                        ownerDocument: Element;
                        ownerElement: Element;
                        parentElement: null;
                        parentNode: null;
                        prefix: null;
                        previousSibling: null;
                        specified: true;
                        textContent: "";
                        value: "";
                    };
                    [3]: {
                        baseURI: "file:///E:/cocos/CocosDashboard/resources/.editors/Creator/2.4.2/resources/app.asar/editor/index.html";
                        childNodes: NodeList[];
                        firstChild: null;
                        isConnected: false;
                        lastChild: null;
                        localName: "style";
                        name: "style";
                        namespaceURI: null;
                        nextSibling: null;
                        nodeName: "style";
                        nodeType: 2;
                        nodeValue: "";
                        ownerDocument: Element;
                        ownerElement: Element;
                        parentElement: null;
                        parentNode: null;
                        prefix: null;
                        previousSibling: null;
                        specified: true;
                        textContent: "";
                        value: "";
                    };
                    length: 4;
                    class: {
                        baseURI: "file:///E:/cocos/CocosDashboard/resources/.editors/Creator/2.4.2/resources/app.asar/editor/index.html";
                        childNodes: NodeList[];
                        firstChild: null;
                        isConnected: false;
                        lastChild: null;
                        localName: "class";
                        name: "class";
                        namespaceURI: null;
                        nextSibling: null;
                        nodeName: "class";
                        nodeType: 2;
                        nodeValue: "main-dock";
                        ownerDocument: Element;
                        ownerElement: Element;
                        parentElement: null;
                        parentNode: null;
                        prefix: null;
                        previousSibling: null;
                        specified: true;
                        textContent: "main-dock";
                        value: "main-dock";
                    };
                    ["no-collapse"]: {
                        baseURI: "file:///E:/cocos/CocosDashboard/resources/.editors/Creator/2.4.2/resources/app.asar/editor/index.html";
                        childNodes: NodeList[];
                        firstChild: null;
                        isConnected: false;
                        lastChild: null;
                        localName: "no-collapse";
                        name: "no-collapse";
                        namespaceURI: null;
                        nextSibling: null;
                        nodeName: "no-collapse";
                        nodeType: 2;
                        nodeValue: "";
                        ownerDocument: Element;
                        ownerElement: Element;
                        parentElement: null;
                        parentNode: null;
                        prefix: null;
                        previousSibling: null;
                        specified: true;
                        textContent: "";
                        value: "";
                    };
                    row: {
                        baseURI: "file:///E:/cocos/CocosDashboard/resources/.editors/Creator/2.4.2/resources/app.asar/editor/index.html";
                        childNodes: NodeList[];
                        firstChild: null;
                        isConnected: false;
                        lastChild: null;
                        localName: "row";
                        name: "row";
                        namespaceURI: null;
                        nextSibling: null;
                        nodeName: "row";
                        nodeType: 2;
                        nodeValue: "";
                        ownerDocument: Element;
                        ownerElement: Element;
                        parentElement: null;
                        parentNode: null;
                        prefix: null;
                        previousSibling: null;
                        specified: true;
                        textContent: "";
                        value: "";
                    };
                    style: {
                        baseURI: "file:///E:/cocos/CocosDashboard/resources/.editors/Creator/2.4.2/resources/app.asar/editor/index.html";
                        childNodes: NodeList[];
                        firstChild: null;
                        isConnected: false;
                        lastChild: null;
                        localName: "style";
                        name: "style";
                        namespaceURI: null;
                        nextSibling: null;
                        nodeName: "style";
                        nodeType: 2;
                        nodeValue: "";
                        ownerDocument: Element;
                        ownerElement: Element;
                        parentElement: null;
                        parentNode: null;
                        prefix: null;
                        previousSibling: null;
                        specified: true;
                        textContent: "";
                        value: "";
                    };
                };
                autocapitalize: ""
                baseURI: "file:///E:/cocos/CocosDashboard/resources/.editors/Creator/2.4.2/resources/app.asar/editor/index.html";
                childElementCount: 5;
                childNodes: NodeList[];
                children: HTMLCollection[];
                classList: DOMTokenList[];
                className: "main-dock";
                clientHeight: 928;
                clientLeft: 0;
                clientTop: 0;
                clientWidth: 209;
                contentEditable: "inherit";
                dataset: DOMStringMap;
                dir: "";
                draggable: false;
                firstChild: Element;
                firstElementChild: Element;
                hidden: false;
                id: "";
                innerHTML: string;
                innerText: "";
                inputMode: "";
                isConnected: true;
                isContentEditable: false;
                lang: "";
                lastChild: Element;
                lastElementChild: Element;
                localName: "ui-main-dock";
                namespaceURI: "http://www.w3.org/1999/xhtml";
                nextElementSibling: null;
                nextSibling: null;
                noCollapse(any);
                nodeName: "UI-MAIN-DOCK";
                nodeType: 1;
                nodeValue: null;
                nonce: "";
                offsetHeight: 928;
                offsetLeft: 0;
                offsetParent: Element;
                offsetTop: 54;
                offsetWidth: 209;
                onabort: null;
                onauxclick: null;
                onbeforecopy: null;
                onbeforecut: null;
                onbeforepaste: null;
                onblur: null;
                oncancel: null;
                oncanplay: null;
                oncanplaythrough: null;
                onchange: null;
                onclick: null;
                onclose: null;
                oncontextmenu: null;
                oncopy: null;
                oncuechange: null;
                oncut: null;
                ondblclick: null;
                ondrag: null;
                ondragend: null;
                ondragenter: null;
                ondragleave: null;
                ondragover: null;
                ondragstart: null;
                ondrop: null;
                ondurationchange: null;
                onemptied: null;
                onended: null;
                onerror: null;
                onfocus: null;
                onfullscreenchange: null;
                onfullscreenerror: null;
                ongotpointercapture: null;
                oninput: null;
                oninvalid: null;
                onkeydown: null;
                onkeypress: null;
                onkeyup: null;
                onload: null;
                onloadeddata: null;
                onloadedmetadata: null;
                onloadstart: null;
                onlostpointercapture: null;
                onmousedown: null;
                onmouseenter: null;
                onmouseleave: null;
                onmousemove: null;
                onmouseout: null;
                onmouseover: null;
                onmouseup: null;
                onmousewheel: null;
                onpaste: null;
                onpause: null;
                onplay: null;
                onplaying: null;
                onpointercancel: null;
                onpointerdown: null;
                onpointerenter: null;
                onpointerleave: null;
                onpointermove: null;
                onpointerout: null;
                onpointerover: null;
                onpointerup: null;
                onprogress: null;
                onratechange: null;
                onreset: null;
                onresize: null;
                onscroll: null;
                onsearch: null;
                onseeked: null;
                onseeking: null;
                onselect: null;
                onselectionchange: null;
                onselectstart: null;
                onstalled: null;
                onsubmit: null;
                onsuspend: null;
                ontimeupdate: null;
                ontoggle: null;
                onvolumechange: null;
                onwaiting: null;
                onwebkitfullscreenchange: null;
                onwebkitfullscreenerror: null;
                onwheel: null;
                outerHTML: string;
                outerText: "";
                ownerDocument: Element;
                parentElement: object;
                parentNode: object;
                part: DOMTokenList[];
                prefix: null;
                previousElementSibling: null;
                previousSibling: null;
                scrollHeight: 928;
                scrollLeft: 0;
                scrollTop: 0;
                scrollWidth: 1018;
                shadowRoot: Element;
                slot: "";
                spellcheck: true;
                style: CSSStyleDeclaration;
                tabIndex: -1;
                tagName: "UI-MAIN-DOCK";
                textContent: "";
                title: "";
                translate: true;
                _computedMinHeight: 556;
                _computedMinWidth: 1018;
                _preferredHeight: 928;
                _preferredWidth: 209;
                row: true;
            };
            saveLayout();
            tabbarSpace: number;
        };
        Dockable: {
            addDock(t, i, r);
            noCollapse: any;
            removeDock(e);
            _collapse();
            _dockable: true
            _initDockable();
            _makeRoomForNewComer(e, i);
            _notifyResize();
        };
        DragDrop: {
            dragging: boolean;
            end();
            filterFiles(e);
            getDragIcon(e);
            getLength();
            items(e);
            options();
            start(e, t);
            type(e);
            updateDropEffect(e, t);
        };
        DropArea();
        Droppable: {
            canDrop: any;
            droppable: any;
            multi: any;
            _initDroppable(r);
        }
        Focusable: {
            focusable: any;
            focused: any;
            unnavigable: any;
            _getFirstFocusableElement();
            _initFocusable(s, t);
            _setFocused(t);
        };
        Gradient();
        GradientPicker();
        Hint();
        Input();
        InputState: {
            _initInputState(n);
            _unselect(e);
        };
        Loader();
        MainDock: object;
        Markdown();
        Node();
        NumInput();
        Panel: object;
        PanelFrame: object;
        Progress();
        Prop();
        PropTable();
        Readonly: {
            canBeReadonly: any;
            readonly: any;
            _initReadonly(e);
            _isReadonlyInHierarchy(e);
            _isReadonlySelf();
            _propgateReadonly();
            _setIsReadonlyAttribute(e);
        };
        Resizable: {
            calcHeight(t);
            calcWidth(t);
            row: any;
            _finalizeMinMax();
            _finalizeMinMaxRecursively();
            _finalizePreferredSize();
            _finalizePreferredSizeRecursively();
            _finalizeStyle();
            _finalizeStyleRecursively();
            _initResizable();
            _notifyResize();
            _reflow();
            _reflowRecursively();
            _resizable: true;
        };
        Section();
        Select();
        Settings: {}
        Shadow();
        Slider();
        Splitter();
        Tab: object;
        Tabs: object;
        TextArea();
        VirtualList();
        VueUtils: {
            init();
        };
        WebView();
        acceptEvent(e)
        addDragGhost(e)
        addHitGhost(e, t, n)
        addLoadingMask(e, t)
        camelCase(e)
        cancelDrag();
        clear(e)
        createStyleElement(e)
        fire(e, t, n)
        focus(t)
        focusNext();
        focusParent(t)
        focusPrev();
        focusedElement: any;
        focusedPanelFrame: any;
        getProperty(e);
        getResource(e);
        importResource(e);
        importScript(e);
        importScripts(r);
        importStylesheet(e);
        importStylesheets(r);
        importTemplate(e);
        inDocument(e);
        inPanel(e);
        index(e);
        installDownUpEvent(t);
        isVisible(e);
        isVisibleInHierarchy(t);
        kebabCase(e);
        lastFocusedElement: any;
        lastFocusedPanelFrame: Element;
        loadGlobalScript(e, t);
        offsetTo(e, t);
        parentElement(e);
        parseArray(e);
        parseBoolean(e);
        parseColor(e);
        parseObject(e);
        parseString(e);
        regenProperty(e, r);
        /**
         * 注册自定义元素ui
         * Editor.UI.registerElement('foobar-label', {
            template: `
                <div class="text">Foobar</div>
            `,
            style: `
                .text {
                color: black;
                padding: 2px 5px;
                border-radius: 3px;
                background: #09f;
                   }
                 `
            });
            并在 Panel 中正确 require 后，你就可以在编辑器中使用 <foobar-label> 这个元素。
         * @param tagName 要注册的自定义元素ui的名字
         * @param prototype 元素对象
         */
        registerElement(tagName: string, prototype);
        registerProperty(e, r);
        removeDragGhost();
        removeHitGhost();
        removeLoadingMask();
        startDrag(t, n, o, r, i)
        toHumanText(e);
        unregisterProperty(e);
        walk(e, t, n)
        _DomUtils: {};
        _FocusMgr: {};
        _ResMgr: {};
        _focusParent(e);
        _getFirstFocusableChild(t);
    };
    static Undo: {
        Command: object;
        add(i, s);
        cancel();
        clear();
        collapseTo(i);
        commit();
        dirty();
        local();
        redo();
        register(i, s);
        reset();
        save();
        setCurrentDescription(i);
        undo();
        _global: undefined;
    }
    static User: {
        _enable: true;
        _events: {
            exception(data);
            login: [];
            logout: [];
            waiting();
        };
        _eventsCount: 4;
        _maxListeners: undefined;
        domain: null;
    };
    static Utils: {
        Intersection: {
            lineLine(n, t, e, r);
            linePolygon(n, e, r);
            lineRect(n, e, r);
            polygonPolygon(n, t);
            rectPolygon(n, t);
            rectRect(n, t);
        };
        MultipleValueDict: object;
        Polygon(t);
        UuidCache: {
            cache(r, n);
            clear();
            urlToUuid(r);
        };
        UuidUtils: {
            NonUuidMark: ".";
            Reg_UuidInLibPath: RegExp;
            compressHex(e, r);
            compressUuid(e, t);
            decompressUuid(e);
            getUuidFromLibPath(e);
            /**
             * 是否是uuid
             * @param e uuid
             */
            isUuid(e);
            /**
             *  生成一个随机的Uuid
             */
            uuid();
        };
        arrayCmpFilter(e, t);
        asyncif(r, t);
        filterAsync(r, t, e);
        fitSize(e, t, r, o);
        formatFrame(t, r);
        getDependsRecursively(r, t, e);
        padLeft(e, t, r);
        prettyBytes(e);
        refreshSelectedInspector(r, t);
        run(e, ...t);
        smoothScale(e, t);
        toFixed(e, t, r);
        toString(r);
        urlToPath(r);
        wrapError(e);
    };
    static Window: {
        center();
        focus();
        load(e, t);
        open(e, t, n);
        resize(e, t, n);
        resizeSync(e, o, n);
        /**设置布局 */
        main: {
            /**
             *  设置多面板布局
             * 例子： packages://plugin/layout.json
             * @param packagesJsonPath 插件布局json的位置
             */
            resetLayout(packagesJsonPath);
        }
    };
    /**
     *  资源操作
     */
    static assetdb: {
        /**
         *  在引擎编辑器内创建一个资源
         * @param e 资源创建路径 ，以db://开头
         * @param s 数据
         * @param t 回调
         */
        create(e, s, t);
        /**
         * 保存已有的资源，如果资源不存在，则根据参数数据保存在指定路径
         * @param e 资源路径，以db://开头
         * @param s 数据
         * @param t 回调
         */
        createOrSave(e, s, t);
        deepQuery(e);
        /**
         * 删除指定的资源
         * @param url 要删除的路径数组
         */
        delete(url: string[]);
        explore(e);
        exploreLib(e);
        /**
         * 导入指定资源
         * @param assetPathList 资源文件在浏览器中的位置
         * @param target 要导入到引擎的路径，以db://开头
         * @param call 回调
         */
        import(assetPathList: string[], target: string, call: Function);
        /**
         *  "project\library";
         */
        library: string;
        /**
         * 移动指定资源
         * @param e 资源路径
         * @param s 要移动的路径
         * @param t 
         * @param d 
         */
        move(e, s, t, d);
        queryAssets(e, s, t);
        queryInfoByUui(e, s);
        queryMetaInfoByUuid(e, s);
        queryPathByUrl(e, s);
        queryPathByUuid(e, s);
        queryUrlByUuid(e, s);
        queryUuidByUrl(e, s);
        /**
         * 刷新指定路径下的文件
         * @param e 要刷新的路径
         * @param s 回调
         */
        refresh(e, s);
        remote: {
            addListener(any);
            arrayCmpFilter(any);
            /**
             * "Project\temp\BackupAssets"
             */
            assetBackupPath: string;
            assetInfo(any);
            assetInfoByPath(any);
            assetInfoByUuid(any);
            attachMountPath(any);
            /**
             *  缓存路径
             * "Project\temp\general-asset-caches"
             */
            cache: string;
            clearImports(any);
            containsSubAssets(any);
            containsSubAssetsByPath(any);
            containsSubAssetsByUuid(any);
            copyAssetToLibrary(any);
            create(any);
            /**
             * 项目根路径
             */
            cwd: string;
            deepQuery(any);
            delete(any);
            dev: boolean;
            emit(any);
            error(any);
            eventNames(any);
            exchangeUuid(any);
            /**
             * 检查资源是否存在
             * @param url 路径
             */
            exists(url: string);
            existsByPath(any);
            existsByUuid(any);
            failed(any);
            fspathToUrl(any);
            fspathToUuid(any);
            getAssetBackupPath(any);
            getCachePath(any);
            getMaxListeners(any);
            getRelativePath(any);
            getWatchState(any);
            import(e);
            info(any);
            init(any);
            isMount(any);
            isMountByPath(any);
            isMountByUuid(any);
            isSubAsset(any);
            isSubAssetByPath(any);
            isSubAssetByUuid(any);
            /**
             *  Project\library
             */
            library: string;
            listenerCount(any);
            listeners(any);
            loadMeta(any);
            loadMetaByPath(any);
            loadMetaByUuid(any);
            log(any);
            /**
             * Project\temp\RemovedMetas"
             */
            metaBackupPath: string;
            mkdirForAsset(any);
            mount(any);
            mountInfo(any);
            mountInfoByPath(any);
            mountInfoByUuid(any);
            move(any);
            off(any);
            on(any);
            once(any);
            padLeft(any);
            prependListener(any);
            prependOnceListener(any);
            queryAssets(any);
            queryMetas(any);
            rawListeners(any);
            refresh(any);
            register(any);
            removeAllListeners(any);
            removeListener(any);
            saveAssetToLibrary(any);
            saveExists(any);
            saveMeta(any);
            setDefaultMetaType(any);
            setEventCallback(any);
            setMaxListeners(any);
            silent(any);
            subAssetInfos(any);
            subAssetInfosByPath(any);
            subAssetInfosByUuid(any);
            submitChanges(any);
            success(any);
            syncChanges(any);
            throw(any);
            unattachMountPath(any);
            unmount(any);
            unregister(any);
            updateMtime(any);
            /**
             * url转化成文件路径
             * @param url url
             */
            urlToFspath(url);
            /**
             * url转化成uuid
             * @param url url
             */
            urlToUuid(url);
            /**
             * uuid转化成文件
             * @param uuid uuid
             */
            uuidToFspath(uuid);
            /**
             * uuid转化成url
             * @param uuid uuid
             */
            uuidToUrl(uuid);
            warn(any);
            watchOFF(any);
            watchON(any);
            _MOUNT_PREFIX: string;
            _allPaths: any;
            _curTask: any;
            _dbAdd: any;
            _dbDelete: any;
            _dbMove: any;
            _dbReset: any;
            _dbpath: any;
            _dispatchEvent: any;
            _ensureDirSync: any;
            _eventCallback: any;
            _events: any;
            _eventsCount: any;
            _extname2infos: any;
            _fspath: any;
            _fspathToImportPathNoExt: any;
            _genTaskID: any;
            _getDestPathByMeta: any;
            _handleErrorResults: any;
            _handleMetaBackupResults: any;
            _handleRefreshResults: any;
            _importPath: any;
            _isAssetPath: any;
            _isMountPath: any;
            _maxListeners: any;
            _metaToAssetPath: any;
            _mountIDByMountPath: any;
            _mountIDByPath: any;
            _mountPaths: any;
            _mounts: any;
            _path2uuid: any;
            _paths: any;
            _pathsDirty: any;
            _rmMetas: any;
            _tasks: Object;
            _url(any);
            _uuid2meta: any;
            _uuid2mtime: any;
            _uuid2mtimePath: any;
            _uuid2path: any;
            _uuidToImportPathNoExt: any;
        }
        /**
         * 使用新的数据替换原有的资源内容
         * @param e 资源在引擎的路径，以db://开头
         * @param s 要替换的数据
         * @param t 回调
         */
        saveExists(e, s, t);
        saveMeta(e, s, t);
    };
    /**
     * 资源
     */
    static assets: {
        ["animation-clip"]();
        asset();
        ["audio-clip"]();
        ["auto-atlas"]();
        ["bitmap-font"]();
        buffer();
        dragonbones();
        ["dragonbones-atlas"]();
        ["dragonbones-bin"]();
        effect();
        fbx();
        font();
        gltf();
        javascript();
        json();
        ["label-atlas"]();
        markdown();
        material();
        mesh();
        ["native-asset"]();
        particle();
        ["physics-material"]();
        prefab();
        ["raw-asset"]();
        scene();
        skeleton();
        ["skeleton-animation-clip"]();
        spine();
        ["sprite-atlas"]();
        ["sprite-frame"]();
        text();
        texture();
        ["texture-packer"]();
        ["tiled-map"]();
        ["ttf-font"]();
        typescript();
    };
    /**
     * 引擎路径
     * "E:\cocos\CocosDashboard\resources\.editors\Creator\2.4.2\resources\app.asar"
     */
    static appPath: string;
    static argv: {};
    static assettype2name: object;
    static dev: false;
    static createVariablesWatcher(e);
    static fillDefaultValue(e, t, r, s);
    /**
     *  工作path :
     *  "E:\cocos\CocosDashboard\resources\.editors\Creator\2.4.2\resources\app.asar\editor-framework"
     */
    static frameworkPath: string;
    static getNodeDump(e);
    static getNodeFunctions(e);
    static getPropertyByPath(e, t);
    static gizmos: Object;
    static globalProfile: Object;
    static i18n: {
        clear();
        extend(t);
        format(r);
        formatPath(e);
        polyglot: {
            allowMissing: false;
            currentLocale: "en";
            /**引擎文字 */
            phrases: Object;
            warn();
        };
        replace(t);
        t(t, r);
        unset(t);
        updatePhrases();
        _phrases();
    };
    /**
     * import文件夹路径
     * "F:\cocosgame\cocos_2_4_2\RPG_fight_test\library\imports"
     */
    static importPath: string;
    static inspectors: object;
    static isBuilder: false;
    static isDarwin: false;
    static isElectron: true;
    static isMainProcess: false;
    static isNative: true;
    static isNode: true;
    static isPureWeb: false;
    static isRendererProcess: true;
    static isRetina: false;
    static isWin32: true;
    static lang: "zh";
    /**
     * library路径
     *  "F:\cocosgame\cocos_2_4_2\RPG_fight_test\library"
     */
    static libraryPath: string;
    static metas: {
        ["animation-clip"]: any;
        asset: any;
        ["audio-clip"]: any;
        ["auto-atlas"]: any;
        ["bitmap-font"]: any;
        buffer: any;
        ["custom-asset"]: any;
        dragonbones: object;
        ["dragonbones-atlas"]: object;
        ["dragonbones-bin"]: any;
        effect: any;
        fbx: any;
        folder: any;
        gltf: any;
        javascript: object;
        json: any;
        ["label-atlas"]: any;
        markdown: any;
        material: any;
        mesh: any;
        mount: {
            ["asset-icon"]: "unpack://static/icon/assets/mount.png";
        };
        ["native-asset"]: any;
        particle: object;
        ["physics-material"]: any;
        prefab: any;
        ["raw-asset"]: object;
        scene: object;
        skeleton: any;
        ["skeleton-animation-clip"]: any;
        spine: object;
        ["sprite-atlas"]: any;
        ["sprite-frame"]: any;
        text: any;
        texture: object;
        ["texture-packer"]: any;
        ["tiled-map"]: any;
        ["ttf-font"]: any;
        typescript: any;
    };
    static preprocessForSetProperty(t, a, r);
    static projectInfo: Object;
    static properties: Object;
    static remote: Object;
    static resetPropertyByPath(e, t, a);
    static sceneScripts: Object;
    static serialize: Object;
    static setAsset(e, t, a, r);
    static setDeepPropertyByPath(e, t, a, r, s);
    static setNodePropertyByPath(e, t, a);
    static setPropertyByPath(e, t);
    static trace(e, t, ...l);
    /**
     * 把基于asset路径等的转换为绝对路径
     * @readonly 1.db://  这个协议会映射到项目根目录，
     * @readonly 2.packages://  映射到项目本地的插件目录 packages 和全局的插件目录 
     * @readonly 3.unpack://  访问 Cocos Creator 安装目录下的开源内容，包括
     * @readonly unpack://engine JavaScript 引擎路径
     * @readonly unpack://cocos2d-x C++ 引擎路径
     * @readonly unpack://simulator 模拟器路径
     * @param t 自定义协议url（相对路径asset）
     */
    static url(t: string): string;
    static import(e);
    /**
     * 导入其他js文件
     * @param path 要导入的js文件路径
     */
    static require(path: string);
    /**
     * 在引擎的控制台输出一条消息
     * @param e Log参数
     * @param any  参数
     */
    static log(e, any?);
    /**
     * 在引擎的控制台输出一条输出
     * @param e Log参数
     * @param any  参数
     */
    static info(e, any);
    static logArgs();
    /**
     * 在引擎的控制台输出一条黄色的警告
     * @param e 参数
     * @param any 参数
     */
    static warn(e, any);
    /**
     * 在引擎控制台输出一条红色的错误消息
     * @param t 参数
     */
    static error(t);
    /**
     * 在引擎的控制台输出一条绿色的消息
     * @param e 参数
     * @param t 参数
     */
    static success(e, ...t);
    static failed(e, any);
    static watchVariable(e, c, n);
};

/**
 *  插件包名
 */
declare let PG_Name: string;
/**
 *  返回插件包下的js路径
 *  比如： init.js
 * @param str 要加载的js文件路径
 * @param return "packages://PG_Name/js/init.js"
 */
declare function PG_JsPath(str: string): string;
/**
 *  返回插件根目录
 * @param str 要返回基于str指定的路径
 *  "packages://PG_Name/"
 */
declare function PG_RootPath(str: string): string;

/**
 *  事件参考：
 * @base/electron-base-ipc@1.0.0:broadcast: (r,n)=> {…}
@base/electron-base-ipc@1.0.0:send: (n,s)=> {…}
@base/electron-base-ipc@1.0.0:send-reply: (e,r,s)=> {…}
@base/electron-base-ipc@1.1.4:broadcast: (e,n)=> {…}
@base/electron-base-ipc@1.1.4:send: (e,n)=> {…}
@base/electron-base-ipc@1.1.4:send-reply: (e,n,r,t)=> {…}
app:global-step-changed: (e,t)=>{Editor.UI.Settings.stepFloat=t}
asset-db:asset-changed: (5) [ƒ, ƒ, ƒ, ƒ, ƒ]
asset-db:asset-uuid-changed: (2) [ƒ, ƒ]
asset-db:assets-created: (2) [ƒ, ƒ]
asset-db:assets-deleted: (4) [ƒ, ƒ, ƒ, ƒ]
asset-db:assets-moved: (5) [ƒ, ƒ, ƒ, ƒ, ƒ]
asset-db:state-changed: (event, state) => {…}
asset-db:watch-state-changed: (event, state) => {…}
assets:clearSearch: (t,...e)=>{i.apply(this,[t,...e])}
assets:copy: (t,...e)=>{i.apply(this,[t,...e])}
assets:delete: (t,...e)=>{i.apply(this,[t,...e])}
assets:end-refresh: (t,...e)=>{i.apply(this,[t,...e])}
assets:find-usages: (t,...e)=>{i.apply(this,[t,...e])}
assets:hint: (t,...e)=>{i.apply(this,[t,...e])}
assets:new-asset: (t,...e)=>{i.apply(this,[t,...e])}
assets:paste: (t,...e)=>{i.apply(this,[t,...e])}
assets:rename: (t,...e)=>{i.apply(this,[t,...e])}
assets:search: (t,...e)=>{i.apply(this,[t,...e])}
assets:sort: (t,...e)=>{i.apply(this,[t,...e])}
assets:start-refresh: (t,...e)=>{i.apply(this,[t,...e])}
before-change-files: (t,...e)=>{i.apply(this,[t,...e])}
change-filter: (2) [ƒ, ƒ]
compiler:state-changed: (2) [ƒ, ƒ]
console:query-last-error-log: (t,...e)=>{i.apply(this,[t,...e])}
copy: (t,...e)=>{i.apply(this,[t,...e])}
curve:change: (t,...e)=>{i.apply(this,[t,...e])}
curve:state: (t,...e)=>{i.apply(this,[t,...e])}
delete: (t,...e)=>{i.apply(this,[t,...e])}
duplicate: (t,...e)=>{i.apply(this,[t,...e])}
editor:console-clear: (2) [ƒ, ƒ]
editor:console-error: (2) [ƒ, ƒ]
editor:console-failed: (2) [ƒ, ƒ]
editor:console-info: (t,...e)=>{i.apply(this,[t,...e])}
editor:console-log: (t,...e)=>{i.apply(this,[t,...e])}
editor:console-on-device-play: (t,...e)=>{i.apply(this,[t,...e])}
editor:console-success: (t,...e)=>{i.apply(this,[t,...e])}
editor:console-warn: (2) [ƒ, ƒ]
editor:dragend: (2) [ƒ, ƒ]
editor:dragstart: (2) [ƒ, ƒ]
editor:ipc-main2panel: (r,n,o,...s)=> {…}
editor:ipc-main2renderer: (r,n,...i)=> {…}
editor:ipc-reply: (e,...r)=> {…}
editor:panel-out-of-date: (n,o)=> {…}
editor:panel-run: (n,o,t)=>{e.focus(o);let i=e.find(o);i&&i.run&&i.run(t)}
editor:panel-undock: e=>{"scene"===e&&_Scene.EngineEvents.unregister()}
editor:panel-unload: (n,o)=> {…}
editor:project-profile-updated: (t,...e)=>{i.apply(this,[t,...e])}
editor:query-ipc-events: e=> {…}
editor:record-node-changed: (t,...e)=>{i.apply(this,[t,...e])}
editor:reset-layout: (t,r,i)=> {…}
editor:window-inspect: ƒ ()
filter: (t,...e)=>{i.apply(this,[t,...e])}
hierarchy:hint: (t,...e)=>{i.apply(this,[t,...e])}
hint: (t,...e)=>{i.apply(this,[t,...e])}
im-plugin:update-im-html: (event, html) => {
 vm.imHtml = html
 }
load-editor: async() => {…}
plugin-messages: (t,...e)=>{i.apply(this,[t,...e])}
preview-server:connects-changed: (event, count) => {
 vm.connected = count;
 }
preview-server:preview-port-changed: () => {
 vm.url = getUrl();
 }
reload-page: async() => {…}
rename: (t,...e)=>{i.apply(this,[t,...e])}
scene:add-component: (t,...e)=>{i.apply(this,[t,...e])}
scene:animation-clip-changed: (2) [ƒ, ƒ]
scene:animation-clips-changed: (t,...e)=>{i.apply(this,[t,...e])}
scene:animation-record-changed: (2) [ƒ, ƒ]
scene:animation-state-changed: (t,...e)=>{i.apply(this,[t,...e])}
scene:animation-time-changed: (t,...e)=>{i.apply(this,[t,...e])}
scene:apply-prefab: (t,...e)=>{i.apply(this,[t,...e])}
scene:break-prefab-instance: (t,...e)=>{i.apply(this,[t,...e])}
scene:center-nodes: (t,...e)=>{i.apply(this,[t,...e])}
scene:change-animation-current-clip: (t,...e)=>{i.apply(this,[t,...e])}
scene:change-animation-record: (t,...e)=>{i.apply(this,[t,...e])}
scene:change-animation-state: (t,...e)=>{i.apply(this,[t,...e])}
scene:change-node-lock: (t,...e)=>{i.apply(this,[t,...e])}
scene:choose-last-rigid-body: (t,...e)=>{i.apply(this,[t,...e])}
scene:choose-next-rigid-body: (t,...e)=>{i.apply(this,[t,...e])}
scene:copy-component: (t,...e)=>{i.apply(this,[t,...e])}
scene:copy-editor-camera-data-to-nodes: (t,...e)=>{i.apply(this,[t,...e])}
scene:copy-nodes: (t,...e)=>{i.apply(this,[t,...e])}
scene:create-node-by-classid: (t,...e)=>{i.apply(this,[t,...e])}
scene:create-node-by-prefab: (t,...e)=>{i.apply(this,[t,...e])}
scene:create-nodes-by-uuids: (t,...e)=>{i.apply(this,[t,...e])}
scene:create-prefab: (t,...e)=>{i.apply(this,[t,...e])}
scene:delete-nodes: (t,...e)=>{i.apply(this,[t,...e])}
scene:duplicate-nodes: (t,...e)=>{i.apply(this,[t,...e])}
scene:enter-prefab-edit-mode: (t,...e)=>{i.apply(this,[t,...e])}
scene:export-particle-plist: (t,...e)=>{i.apply(this,[t,...e])}
scene:generate-texture-packer-preview-files: (t,...e)=>{i.apply(this,[t,...e])}
scene:generate_attached_node: (t,...e)=>{i.apply(this,[t,...e])}
scene:has-copied-component: (t,...e)=>{i.apply(this,[t,...e])}
scene:is-child-class-of: (t,...e)=>{i.apply(this,[t,...e])}
scene:is-ready: (t,...e)=>{i.apply(this,[t,...e])}
scene:link-prefab: (t,...e)=>{i.apply(this,[t,...e])}
scene:load-package-scene-script: (t,...e)=>{i.apply(this,[t,...e])}
scene:mount-clip: (t,...e)=>{i.apply(this,[t,...e])}
scene:move-down-component: (t,...e)=>{i.apply(this,[t,...e])}
scene:move-nodes: (t,...e)=>{i.apply(this,[t,...e])}
scene:move-up-component: (t,...e)=>{i.apply(this,[t,...e])}
scene:new-property: (t,...e)=>{i.apply(this,[t,...e])}
scene:new-scene: (t,...e)=>{i.apply(this,[t,...e])}
scene:node-component-added: (t,...e)=>{i.apply(this,[t,...e])}
scene:node-component-pasted: (t,...e)=>{i.apply(this,[t,...e])}
scene:node-component-removed: (t,...e)=>{i.apply(this,[t,...e])}
scene:node-component-updated: (t,...e)=>{i.apply(this,[t,...e])}
scene:panel-unload: (t,...e)=>{i.apply(this,[t,...e])}
scene:paste-component: (t,...e)=>{i.apply(this,[t,...e])}
scene:paste-nodes: (t,...e)=>{i.apply(this,[t,...e])}
scene:play-on-device: (t,...e)=>{i.apply(this,[t,...e])}
scene:prefab-mode-changed: (t,...e)=>{i.apply(this,[t,...e])}
scene:preview-server-scene-stashed: (t,...e)=>{i.apply(this,[t,...e])}
scene:print-simulator-log: (t,...e)=>{i.apply(this,[t,...e])}
scene:query-animation-clip: (t,...e)=>{i.apply(this,[t,...e])}
scene:query-animation-hierarchy: (t,...e)=>{i.apply(this,[t,...e])}
scene:query-animation-list: (t,...e)=>{i.apply(this,[t,...e])}
scene:query-animation-properties: (t,...e)=>{i.apply(this,[t,...e])}
scene:query-animation-record: (t,...e)=>{i.apply(this,[t,...e])}
scene:query-animation-time: (t,...e)=>{i.apply(this,[t,...e])}
scene:query-asset-info: (t,...e)=>{i.apply(this,[t,...e])}
scene:query-dirty-state: (t,...e)=>{i.apply(this,[t,...e])}
scene:query-group-list: (t,...e)=>{i.apply(this,[t,...e])}
scene:query-hierarchy: (t,...e)=>{i.apply(this,[t,...e])}
scene:query-node: (t,...e)=>{i.apply(this,[t,...e])}
scene:query-node-functions: (t,...e)=>{i.apply(this,[t,...e])}
scene:query-node-info: (t,...e)=>{i.apply(this,[t,...e])}
scene:query-nodes-by-comp-name: (t,...e)=>{i.apply(this,[t,...e])}
scene:query-nodes-by-usedby-uuid: (t,...e)=>{i.apply(this,[t,...e])}
scene:query-texture-packer-preview-files: (t,...e)=>{i.apply(this,[t,...e])}
scene:ready: (3) [ƒ, ƒ, ƒ]
scene:redo: (t,...e)=>{i.apply(this,[t,...e])}
scene:regenerate-polygon-points: (t,...e)=>{i.apply(this,[t,...e])}
scene:reload-on-device: (t,...e)=>{i.apply(this,[t,...e])}
scene:reloading: (3) [ƒ, ƒ, ƒ]
scene:remove-component: (t,...e)=>{i.apply(this,[t,...e])}
scene:reset-all: (t,...e)=>{i.apply(this,[t,...e])}
scene:reset-component: (t,...e)=>{i.apply(this,[t,...e])}
scene:reset-node: (t,...e)=>{i.apply(this,[t,...e])}
scene:reset-property: (t,...e)=>{i.apply(this,[t,...e])}
scene:revert-prefab: (t,...e)=>{i.apply(this,[t,...e])}
scene:revert-prefab-changed: (t,...e)=>{i.apply(this,[t,...e])}
scene:save-clip: (t,...e)=>{i.apply(this,[t,...e])}
scene:saved: (t,...e)=>{i.apply(this,[t,...e])}
scene:search-skeleton-animation-clips: (t,...e)=>{i.apply(this,[t,...e])}
scene:set-animation-speed: (t,...e)=>{i.apply(this,[t,...e])}
scene:set-group-sync: (t,...e)=>{i.apply(this,[t,...e])}
scene:set-prefab-sync: (t,...e)=>{i.apply(this,[t,...e])}
scene:set-property: (t,...e)=>{i.apply(this,[t,...e])}
scene:soft-reload: (t,...e)=>{i.apply(this,[t,...e])}
scene:stash-and-save: (t,...e)=>{i.apply(this,[t,...e])}
scene:undo: (t,...e)=>{i.apply(this,[t,...e])}
scene:undo-cancel: (t,...e)=>{i.apply(this,[t,...e])}
scene:undo-commit: (t,...e)=>{i.apply(this,[t,...e])}
scene:undo-record: (t,...e)=>{i.apply(this,[t,...e])}
scene:unload-package-scene-script: (t,...e)=>{i.apply(this,[t,...e])}
scene:update-edit-mode: (t,...e)=>{i.apply(this,[t,...e])}
selection:activated: (3) [ƒ, ƒ, ƒ]
selection:changed: (t,...e)=>{i.apply(this,[t,...e])}
selection:deactivated: (3) [ƒ, ƒ, ƒ]
selection:hoverin: (t,...e)=>{i.apply(this,[t,...e])}
selection:hoverout: (t,...e)=>{i.apply(this,[t,...e])}
selection:selected: (4) [ƒ, ƒ, ƒ, ƒ]
selection:unselected: (5) [ƒ, ƒ, ƒ, ƒ, ƒ]
show-path: (t,...e)=>{i.apply(this,[t,...e])}
timeline:clear-node: (t,...e)=>{i.apply(this,[t,...e])}
timeline:delete-event: (t,...e)=>{i.apply(this,[t,...e])}
timeline:edit-event: (t,...e)=>{i.apply(this,[t,...e])}
timeline:exists-clip: (t,...e)=>{i.apply(this,[t,...e])}
timeline:property-add: (t,...e)=>{i.apply(this,[t,...e])}
timeline:property-add-key: (t,...e)=>{i.apply(this,[t,...e])}
timeline:property-clear: (t,...e)=>{i.apply(this,[t,...e])}
timeline:property-delete-selected-key: (t,...e)=>{i.apply(this,[t,...e])}
timeline:property-remove: (t,...e)=>{i.apply(this,[t,...e])}
timeline:rename-node: (t,...e)=>{i.apply(this,[t,...e])}
update-loading-tips: (event, tips) => {…}
v-electron-channel@0.0.1:delete: ƒ (event, channel, id)
_selection:activated: (e,t,i)=> {…}
_selection:context: (e,t,i)=> {…}
_selection:deactivated: (e,t,i)=> {…}
_selection:hoverin: (e,t,i)=> {…}
_selection:hoverout: (e,t,i)=> {…}
_selection:patch: (e,t,i,s)=> {…}
_selection:register: (e,t)=>{let i=new m(t);l[t]=i}
_selection:selected: (e,t,i)=> {…}
_selection:unselected: (e,t,i)=> {…}
 */