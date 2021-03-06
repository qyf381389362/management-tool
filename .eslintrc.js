// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    // 'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'no-regex-spaces': 'error', // 禁止正则表达式字面量中出现多个空格
    'no-multi-spaces': 'error', // 禁止出现多个空格而且不是用来作缩进的
    'array-bracket-spacing': ['error', 'never'], // 数组紧贴括号部分不允许包含空格。
    // 'object-curly-spacing': ['error', 'never'], // 对象紧贴花括号部分不允许包含空格。
    'block-spacing': ['error', 'never'], // 单行代码块中紧贴括号部分不允许包含空格。
    'comma-spacing': ['error', {
      'before': false,
      'after': true
    }], //在变量声明、数组字面量、对象字面量、函数参数 和 序列中禁止在逗号前使用空格,要求在逗号后使用一个或多个空格
    'semi-spacing': ['error', {
      'before': false,
      'after': true
    }], //禁止分号周围的空格
    'computed-property-spacing': ['error', 'never'], // 禁止括号和其内部值之间的空格
    'no-trailing-spaces': 'error', // 禁用行尾空格
    'no-spaced-func': 'error', // 禁止 function 标识符和圆括号之间有空格
    // "space-before-function-paren": ["error", "never"], // 禁止函数圆括号之前有一个空格
    'space-before-blocks': ['error', 'always'], // 禁止语句块之前的空格
    'space-in-parens': ['error', 'never'], // 禁止圆括号内的空格
    'space-infix-ops': ['error', {
      'int32Hint': false
    }], // 要求中缀操作符周围有空格,设置 int32Hint 选项为 true (默认 false) 允许 a|0 不带空格。
    'space-unary-ops': 'error', // 要求或禁止在一元操作符之前或之后存在空格,new、delete、typeof、void、yield要求有空格，-、+、--、++、!、!!要求无空格。
    'spaced-comment': ['error', 'always'], // 要求在注释前有空白
    'arrow-spacing': 'error', // 要求箭头函数的箭头之前和之后有空格
    'generator-star-spacing': ['error', {
      'before': false,
      'after': true
    }], // 强制 generator 函数中 * 号前有空格，后无空格。
    'yield-star-spacing': ['error', {
      'before': true,
      'after': false
    }], // 强制 yield* 表达式中  * 号前有空格，后无空格。
    'no-irregular-whitespace': 'error', // 禁止不规则的空白。
    'template-curly-spacing': ['error', 'never'], // 强制模板字符串中花括号内不能出现空格

    'max-len': ['error', 1000], // 每行字符不能超过100个
    'no-multiple-empty-lines': 'error', // 不允许多个空行
    'newline-per-chained-call': ['error', {
      'ignoreChainWithDepth': 2
    }], //要求方法链中每个调用都有一个换行符
    'eol-last': 'error', // 要求文件末尾保留一行空行
    'lines-around-comment': ['error', {
      'beforeBlockComment': true
    }], // 强制注释周围有空行

    'curly': ["error", "multi-line"], // if、else if、else、for、while强制使用大括号，但允许在单行中省略大括号。
    //'semi': ['error', 'always'], //不得省略语句结束的分号

    'camelcase': ['error', {
      properties: 'never'
    }], // 要求使用骆驼拼写法

    "no-unused-vars": 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    "indent": ["error", 2],
    "no-console": 0, //不允许出现console语句
    // allow async-await
    'generator-star-spacing': 0,
    "no-var": 1, //使用let和const代替var
    "eqeqeq": ["error", "smart"], //比较的时候使用严格等于
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-extend-native': ["error", {
      "exceptions": ["String", "Object", "Array"]
    }]
    // "vue/no-parsing-error": [2, {
    //   "x-invalid-end-tag": false
    // }]
  }
}
