module.exports = {
    "parser":"@typescript-eslint/parser", // 语法解析
    "plugins":["@typescript-eslint"], // 语法检查
    "rules":{
        "no-var":"error",  // 不允许用 var 来定义
        "no-extra-semi":"error", // 不允许多个分号
        "@typescript-eslint/indent":["error",2] // 缩进只能用两个空格
    },
    "parserOptions":{
        "ecmaVersion":6, // ECMA版本为6
        "sourceType":"module", // 资源类型：莫库啊
        "ecmaFeatures":{  // 资源引入允许使用 ES6 模块(import/export/export default)
            "modules":true
        }
    }
}