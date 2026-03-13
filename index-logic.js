// 找到主按钮
var friendsBtn = document.querySelector('.friends-btn');

friendsBtn.onclick = function(e) {
    e.preventDefault(); // 阻止立刻跳转，先放烟花
    
    // 喷发纸屑
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });

    // 延迟 1 秒再跳转，让惊喜飞一会儿
    setTimeout(function() {
        window.location.href = "friends.html";
    }, 1000);
};


document.getElementById('secret-snoopy').onclick = function() {
    // 1. 弹出输入框
    var password = prompt("史努比说：请输入我们的专属暗号（纪念日或生日）才能进入秘密基地哦！");

    // 2. 检查密码（比如假设密码是 0520 或你们的纪念日）
    if (password === "0314" || password === "0707") { 
        alert("暗号正确！正在前往史努比的秘密信封... ❤️");
        window.location.href = "love.html"; // 跳转到你的祝福页
    } else if (password !== null) {
        // 如果点取消 password 会是 null，所以这里判断一下
        alert("哎呀，暗号不对哦~ 史努比不能让你进去！再想想？");
    }
};