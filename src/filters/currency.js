// 加上千分号
// export default function (num) {
//     const n = Number(num);
//     return `￥${n.toFixed(0).replace(/./g, (c, i, a) => {
//         console.log(c);
//         console.log(i);
//         console.log(a);
//         const currency = (i && c != '.' && ((a.length - i) % 3 === 0) ? `,` :) //这里没看清老师怎么写的
//         return currency;
//     })}`;
// }

export default function(value) {
    if (!value) return '0';
    var intPart = Number(value).toFixed(0); //获取整数部分
    var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); //将整数部分逢三一断
    var floatPart = "0.00"; //预定义小数部分
    var value2Array = value.toString().split(".");
    //=2表示数据有小数位
    if (value2Array.length == 2) {
        floatPart =Number(value).toFixed(2);
        return `￥${floatPart}`;
    } else {
        return `￥${intPartFormat}`;
    }
}