var fs = require("fs");
const writeFile = (format, content) => {
    fs.writeFile(`hello.${format}`, content, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log(format + "数据写入成功！");
    });
}

function encodeSvgDataUri(svg) {
    var uriPayload = encodeURIComponent(svg)
        .replace(/%0A/g, "")
        .replace(/%20/g, " ")
        .replace(/%3D/g, "=")
        .replace(/%3A/g, ":")
        .replace(/%2F/g, "/")
        .replace(/%22/g, "'");

    return "data:image/svg+xml," + uriPayload;
}

module.exports = {
    writeFile,
    encodeSvgDataUri
};