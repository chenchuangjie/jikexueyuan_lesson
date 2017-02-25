fis.match('::packager', {
    spriter: fis.plugin('csssprites')
});

fis.match('*.{js,css,jpg,png}', {
    useHash: true
});

fis.match('*.js', {
    optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
    useSprite: true,
    optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
    optimizer: fis.plugin('png-compressor')
});
/*HTML压缩*/
fis.match('*.html', {
    //invoke fis-optimizer-html-minifier
    optimizer: fis.plugin('html-minifier')
});
fis.match('*.{css,less,scss}', {
    preprocessor: fis.plugin('autoprefixer', {
        "browsers": ["Android >= 2.1", "iOS >= 4", "ie >= 8", "firefox >= 15"],
        "cascade": true
    })
})
/*Less转换CSS*/
fis.match('*.less', {
    useSprite: true,
    // fis-parser-less 插件进行解析
    parser: fis.plugin('less'),
    // .less 文件后缀构建后被改成 .css 文件
    rExt: '.css'
});


/*fis..match('文件',[配置信息])*/
