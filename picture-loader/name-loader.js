const loaderUtils = require("loader-utils");
const schema = require("./name-options.json");
const validateOptions = require("schema-utils");

module.exports = function (source) {
    // 获取options配置项
    const options = loaderUtils.getOptions(this) || {};
    // 校验配置项是否符合规则
    validateOptions(schema, options, "name Loader");
    // 替换字符串
    const result = source.replace(/{{name}}/, options.name)
    // 拼接结果返回给webpack
    return `module.exports = '${result}'`;
};