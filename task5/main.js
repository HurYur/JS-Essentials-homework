function a () { return 5; }
function b (value1, value2) {
    var result = value1+value2;
    return result;
}
function c (value1, value2) {
    var result = Math.pow(value1, value2);
    return result;
}
function d(value1) {
    var result = { a : value1 };
    return result;
}
function e(value1) {
    return function () {
        return value1;
    }
}
function f(value1, value2) {
    var result=[];
    for(var i=0; i<value2; i++){
        result[i] = value1;
    }
    return result;
}
function g(value1) {
    var result = 99;
    if (value1 !== undefined) {
        result = value1;
    }
    return result;
}
function h(value1) { // typeproblem typeof h()
    return value1();
}
function j(value1) { // typeproblem typeof j()
    var sum = 0;
    value1.forEach(function foo(element){
        sum = element + sum;
    });
    return sum;
}
function k(value1) {
    var result = 0;
    for (var key in value1) {
        result = result + value1[key];
    }
    return result;
}
function m(value1, value2) { // typeproblem typeof m()
    var result = [];
    for(var i=0; i < value1.length; i++){
        result[i]=value1[i] + value2[i];
    }
    return result;
}

function n(value1) {
    return function (value2) {
        return function (value3){
            return value1+value2+value3;
        }
    }
}