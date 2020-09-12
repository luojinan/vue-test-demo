module.exports = {
  root: true,//此项是用来告诉eslint找当前配置文件不能往父级查找
  env: {
    node: true//此项指定环境的全局变量，下面的配置指定为node环境
  },
  // extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
};
