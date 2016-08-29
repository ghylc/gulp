#基于Gulp的前端自动化

##安装：
    nodejs
    ruby                             //gulp-ruby-sass插件用到

##初始化：
    npm init                         //生成package.json
    npm install gulp -g              //全局安装gulp,只需要安装一次
    npm install gulp --save-dev      //局部安装gulp
    在项目目录中创建gulpfile.js文件
    gem install sass

##用到的主要插件：
    gulp
    browser-sync                      //同步
    del                               //删除
    gulp-notify                       //通知
    gulp-concat                       //合并
    gulp-rename                       //重命名
    gulp-sourcemaps                   //资源映射
    gulp-ruby-sass                    //sass
    gulp-clean-css                    //css压缩
    gulp-autoprefixer                 //css3前缀补全
    gulp-imagemin                     //图片压缩
    gulp-base64                       //图片转base64
    gulp-uglify                       //js压缩
    gulp-jshint                       //js校验
    mockjs                            //json测试数据生成
    
##插件安装：
    npm install --save-dev gulp browser-sync del gulp-notify gulp-concat gulp-rename gulp-sourcemaps gulp-ruby-sass gulp-clean-css gulp-autoprefixer gulp-imagemin gulp-base64 gulp-uglify jshint gulp-jshint

##项目目录结构：
```
└── src
    ├── sass
    ├── css
    ├── js
    ├── img
    ├── fonts
    ├── index.html
└── dist
    ├── css
    ├── js
    ├── img
    ├── fonts
    ├── index.html
```

##Gulp的方法和参数说明：
   http://www.gulpjs.com.cn/docs/api/
   
##文件匹配：
    jquery.js
    *.js
    !排除某个文件
    **/*.js多层级目录

##sass使用：
    变量：以$开头
    嵌套
    可计算：height: (100px / 2);
    引用父选择符&
    继承：@extend .someclass
    占位符：%placeholder   引用：@extend %placeholder
    mixin：
    function:

##待了解的插件：
    gulp-compass                      //不建议使用，完全可以自己弄一套函数库
    run-sequence                      //保证任务按顺序依次执行 
    gulp-remember
    jade
    yeoman
    bower
    gulp.spritesmith                  //图片合并
    gulp-tinypng
    gulp-typescript
    gulp-coffee
    gulp-react
    gulp-template
    gulp-rev                          //添加版本号
    gulp-rev-replace                  //版本号替换
    gulp-htmlmin
    bower
    gulp-ejs
    
##相关链接：
    npm：https://www.npmjs.com/
    gulp中文官网：http://www.gulpjs.com.cn/
    nodejs：https://nodejs.org/en/
    ruby：http://www.ruby-lang.org/en/downloads/
    sass：http://www.sass.hk/ | http://sass.bootcss.com/docs/sass-reference/#each-directive
    compass：http://compass-style.org/help/tutorials/production-css/
    mockjs：http://mockjs.com/examples.html

##未完待续。。。
