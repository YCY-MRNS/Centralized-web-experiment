/**
 * Created by Administrator on 2018/12/7.
 */

window.onload = function () {

    var nav_item = document.getElementsByClassName('item-info');
    var login_box = document.getElementsByClassName('login-box');
    var banner_all = document.getElementById('banner');
    var banner_index = document.getElementById('banner-index').getElementsByTagName('span');
    var show_list_content = document.getElementsByClassName('show-list-content');
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
        banner_index[index - 1].className = 'banner-index-show';
    }

    //移动的banner距离
    function move(offset) {
        var distance = parseInt(banner_all.style.left) + offset;
        banner_all.style.left = offset + 'px';
    }

    //banner 下方btn的鼠标经过事件
    for (var j = 0; j < banner_index.length; j++) {
        banner_index[j].onmouseover = function () {
            var index = parseInt(this.getAttribute('index'));
            var offset = (index - 1) * (-1015);
            move(offset);
            showBtn(index);
            stop();
        }
    }

    //banner 下方btn的鼠标移出事件
    for (var k = 0; k < banner_index.length; k++) {
        banner_index[k].onmouseout = function () {
            count = parseInt(this.getAttribute('index')) - 1;
            play();
        }
    }

    //计时器播放
    function play() {
        timer = setInterval(function () {
            if (count === 6) count = 0;
            move(count * (-1015));
            showBtn(count + 1);
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

        catalog_list[a].onmouseover = function () {
            for (var i = 0; i < show_list_content.length; i++) {
                if (show_list_content[i] = this) {
                    show_list_content[i].style.display = 'block';
                }
            }
        };

        catalog_list[a].onmouseout = function () {
            for (var i = 0; i < show_list_content.length; i++) {
                if (show_list_content[i] = this) {
                    show_list_content[i].style.display = 'none';
                }
            }
        };
    }

};

function href_login() {
    alert('href_login');
}

function href_register() {
    alert('href_register');
}