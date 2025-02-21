// 在 window.onload 中绑定事件，确保DOM元素加载完毕
window.onload = function() {
    let yesButton = document.getElementById("yes");
    let noButton = document.getElementById("no");
    let questionText = document.getElementById("question");
    let mainImage = document.getElementById("mainImage");

    let clickCount = 0;

    const noTexts = [
        "？你认真的吗…", 
        "要不再想想？", 
        "不许选这个！", 
        "我会很伤心…", 
        "别嘛~", 
        "我不要！！！",
        "不可以的:(",  
        "不行:("
    ];

    noButton.addEventListener("click", function() {
        clickCount++;
        let yesSize = 1 + (clickCount * 1.2);
        yesButton.style.transform = `scale(${yesSize})`;

        let noOffset = clickCount * 50;
        noButton.style.transform = `translateX(${noOffset}px)`;

        let moveUp = clickCount * 25;
        mainImage.style.transform = `translateY(-${moveUp}px)`;
        questionText.style.transform = `translateY(-${moveUp}px)`;

        if (clickCount <= 8) {
            noButton.innerText = noTexts[clickCount - 1];
        }

        switch (clickCount) {
            case 1: mainImage.src = "images/shocked.gif"; break;
            case 2: mainImage.src = "images/think.gif"; break;
            case 3: mainImage.src = "images/angry.gif"; break;
            case 4: mainImage.src = "images/crying1.gif"; break;
            case 5: mainImage.src = "images/crying2.gif"; break;
            case 6: mainImage.src = "images/crying3.gif"; break;
            case 7: mainImage.src = "images/crying4.gif"; break;
            case 8: mainImage.src = "images/crying99.gif"; break;
        }
    });

    yesButton.addEventListener("click", function() {
        // 只替换成功页面部分，而不完全替换 body
        let yesScreen = document.createElement("div");
        yesScreen.className = "yes-screen";

        let yesText = document.createElement("h1");
        yesText.className = "yes-text";
        yesText.textContent = "!!!我可是超级爱你的呦!! ( >᎑<)♡︎ᐝ";

        let yesImage = document.createElement("img");
        yesImage.src = "images/hug.gif";
        yesImage.alt = "拥抱";
        yesImage.className = "yes-image";

        yesScreen.appendChild(yesText);
        yesScreen.appendChild(yesImage);

        document.body.innerHTML = ''; // 清空原有内容
        document.body.appendChild(yesScreen);

        document.body.style.overflow = "hidden";
    });
};
