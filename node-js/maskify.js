
function maskify(cc) {

    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);

}

console.log(maskify("1234567890"));