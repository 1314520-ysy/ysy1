window.onload = function () {
    //获取用户名输入框元素
    var username = document.getElementById("username");
    var warn = document.getElementById("warn");
    //添加此元素的onblue事件
    username.onblur = function () {
        //判定其值是否为数字、并且数字长度为11
        console.log("用户名：" + username.value);
        if (username.value.length == 11 && !isNaN(username.value)) {
            warn.innerText = "✔";
        } else {
            warn.innerText = "✘";
        }
    }
}