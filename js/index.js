/**
 * Created by Administrator on 2018/12/7.
 */

window.onload = function () {

    var nav_item = document.getElementsByClassName('item-info');
    var login_box = document.getElementsByClassName('login-box');
    var banner_all = document.getElementById('banner');
    var banner_index = document.getElementById('banner-index').getElementsByTagName('span');
    var catalog_list = document.getElementById('catalog-list').getElementsByTagName('li');

    var timer;
    var count = 0;

    //top nav display
    for (var i = 0; i < nav_item.length; i++) {
        nav_item[0].onmouseover = function () {
            login_box[0].style.display = 'block';
        };
        nav_item[0].onmouseout = function () {
            login_box[0].style.display = 'none';
        };
    }

    //展示btn样式
    function showBtn(index) {
        for (var i = 0; i < banner_index.length; i++) {
            if (banner_index[i].className === 'banner-index-show') {
                banner_index[i].className = '';
                break;
            }
        }
        banner_index[index].className = 'banner-index-show';
    }

    //移动的banner距离
    function move(offset) {
        addAnimate();
        var distance = offset * (-1015);
        banner_all.style.left = distance + 'px';
    }

    //添加css3动画
    function addAnimate() {
        banner_all.style.transition = "all 1s";
        banner_all.style.webkitTransition = "all 1s";
        banner_all.style.mozTransition = "all 1s";
        banner_all.style.oTransition = "all 1s";
    }

    //banner 下方btn的鼠标经过事件
    for (let j = 0; j < banner_index.length; j++) {
        banner_index[j].onmouseover = function () {
            count = j;
            move(j);
            showBtn(j);
            stop();
        }
    }

    //banner 下方btn的鼠标移出事件
    for (let k = 0; k < banner_index.length; k++) {
        banner_index[k].onmouseout = function () {
            count = k;
            play();
        }
    }

    //计时器播放
    function play() {
        timer = setInterval(function () {
            if (count === 6) count = 0;
            move(count);
            showBtn(count);
            count++;
        }, 2000);
    }

    //计时器停止
    function stop() {
        clearInterval(timer);
    }

    //当鼠标在banner上停止播放
    banner_all.onmouseover = function () {
        stop();
    };

    //当鼠标在banner上开始播放
    banner_all.onmouseout = function () {
        play();
    };

    play();


    for (var a = 0; a < catalog_list.length; a++) {
        catalog_list[a].onmouseover = function (arg) {
            return function () {
                catalog_list[arg].className = 'lihover';
            }
        }(a);

        catalog_list[a].onmouseout = function (arg) {
            return function () {
                catalog_list[arg].className = '';
            }
        }(a);

    }

    banner_all.onclick = function () {
        window.location.href = "html/person.html"

    }


};

function href_login() {
    window.location.href = "html/login.html";
}

function href_register() {
    window.location.href = "html/register.html";
}