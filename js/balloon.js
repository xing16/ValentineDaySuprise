// 定义气球对象
function Balloon(pic) {
    // 气球的载体 div
    this.div = document.createElement('div');
    if (pic == null) {
        // 气球半径大小，随机生成
        this.radius = randomRange(25, 100);
        // 气球颜色
        this.background = setBackground();
    } else {
        // 图片半径稍微大些
        this.radius = randomRange(50, 100);
        // 背景图片
        this.background = "url(" + pic + ")";
    }
    // this.background = 'blue';
    // 气球位置 left,top
    this.left = randomRange(0, 1000);
    this.top = randomRange(0, 700);
    // 气球 x,y 速度,x,y方向的速度大小决定了气球的最终的方向
    this.speedX = randomRange(-6, 6);
    // this.speedX = 0;
    this.speedY = randomRange(-6, 6);
}

// 给气球设置宽高背景等 css 属性，并添加到body 中，才能显示出来
Balloon.prototype.show = function () {
    var style = this.div.style;
    style.width = this.radius * 2 + "px";
    style.height = this.radius * 2 + "px";
    style.background = this.background;
    style.left = this.left + "px";
    style.top = this.top + "px";
    // 以下属性在<style>设置无效，可适配不同尺寸的图片
    style.backgroundPosition = "center";
    style.backgroundRepeat = "no-repeat";
    style.backgroundSize = "cover";

    // 添加到 body 中
    document.body.appendChild(this.div);
};

// 气球运动起来
Balloon.prototype.run = function () {
    var balloon = this;
    setInterval(function () {
        var left = balloon.div.offsetLeft + balloon.speedX;
        var top = balloon.div.offsetTop + balloon.speedY;
        // 左边界
        if (left < 0) {
            left = 0;
            balloon.speedX *= -1;
        }
        // 上边界
        if (top < 0) {
            top = 0;
            balloon.speedY *= -1;
        }
        // 右边界,大于浏览器宽度
        if (left > document.body.clientWidth - balloon.radius * 2) {
            left = document.body.clientWidth - balloon.radius * 2;
            balloon.speedX *= -1;
        }
        // 下边界
        if (top > document.body.clientHeight - balloon.radius * 2) {
            top = document.body.clientHeight - balloon.radius * 2;
            balloon.speedY *= -1;
        }

        // 一定不要忘掉单位px
        balloon.div.style.left = left + "px";
        balloon.div.style.top = top + "px";
    }, 30);
};


// 设置背景
function setBackground() {
    var r = randomRange(0, 255);
    var g = randomRange(0, 255);
    var b = randomRange(0, 255);
    return "rgba(" + r + "," + g + "," + b + "," + 0.5 + ")";
}


/**
 * 随机生成指定范围之间的随机数
 * @param min
 * @param max
 * @returns {*}
 */
function randomRange(min, max) {
    // Math.random() 取值在 0 - 1 之间
    return Math.random() * (max - min) + min;
}

var picArray = ["../img/love01.png", "../img/love02.png", "../img/love03.png",
    "../img/love05.png", "../img/love06.png", "../img/love07.png"
];

