// 打字机效果逻辑
const myWishText = "有些话，只想单独对你说... 这是我为你准备的专属惊喜。"; // 引导语
let i = 0;
const speed = 150; // 打字速度

function typeWriter() {
    const element = document.getElementById("typing-text");
    if (element && i < myWishText.length) {
        element.innerHTML += myWishText.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// 确保页面加载完后开始打字
document.addEventListener("DOMContentLoaded", typeWriter);