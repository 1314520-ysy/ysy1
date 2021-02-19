var times = 3;//3次机会
/*
*登录函数，用来判断登录
*有效的登录信息为：peter/123
*/
function validate(account, password) {
    if (account == "peter" && password == "123"&& times>0) {
        window.location.href = './主页.html';//分支一跳转至首页
    } else if (times <= 0) {
        document.getElementById('hint').innerHTML = '3次登录失败,禁止再进行登录';
} else{
    times--;
    document.getElementById('hint').innerHTML = '账号或密码错误，还有'+times+'次错误';
}
}
    



//     let res;
//     if (account == "peter" && pwd == "123") {
//         res = true;//登录成功
//     } else {
//         res = false;//登录失败
//     }

//     return res;
// }