# givaudan-pc

## Project setup
```
npm install
```

## lib-flexible和px2rem-loader 适配PC端大屏
```
1. 打开./node_modules/lib-flexible/flexible.js，找到如下片段源码：
    function refreshRem(){
        var width = docEl.getBoundingClientRect().width;
        if (width / dpr > 540) {
            width = 540 * dpr;
        }
        var rem = width / 10;
        docEl.style.fontSize = rem + 'px';
        flexible.rem = win.rem = rem;
    }
    屏幕宽度除以dpr（dpr是一个倍数，PC端一般为1）的值大于540这个特定值的时不再进行适配了，
    即此时width的值被写死成540*dpr了

2. 由于本项目要适配的PC端大屏幕尺寸是基于1920的设计稿，需要适配宽度在768以上的屏幕，故将上面的源码修改为：
    function refreshRem(){
        var width = docEl.getBoundingClientRect().width;
        if (width / dpr > 540) {
            width = width * dpr;
        }
    或
        if (width / dpr >= 768) {
            width = width * dpr;
        }
        var rem = width / 10;
        docEl.style.fontSize = rem + 'px';
        flexible.rem = win.rem = rem;
    }

```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
