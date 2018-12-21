/**
 * Created by Administrator on 2018/12/17.
 */
window.onload = function () {

    var all_choose = document.getElementById('all-choose');
    var checks = document.getElementsByTagName('input');
    var money = document.getElementById('money');
    var price = document.getElementsByClassName('price');
    var money_hint = document.getElementById('money-hint');
    var btn_delete = document.getElementsByClassName('book-delete');
    var chooseBook = document.getElementsByClassName('chooseBook1');
    var result = 0;


    setInterval(function () {

        for (let i = 0; i < btn_delete.length; i++) {
            btn_delete[i].onclick = function () {
                chooseBook[i].style.display = 'none';
                price[i].innerHTML = '0';
            }
        }

        for (var i = 0; i < price.length; i++) {
            result += parseFloat(price[i].innerHTML)
        }
        money.innerText = result;
        result = 0;

    }, 100);


    //全选checkbox
    all_choose.onclick = function () {
        if (all_choose.checked) {
            for (var j = 0; j < checks.length; j++) {
                checks[j].checked = true;
                money.style.display = 'inline-block';
                money_hint.style.display = 'inline-block';
            }
        } else {
            for (var i = 0; i < checks.length; i++) {
                checks[i].checked = false;
                money.style.display = 'none';
                money_hint.style.display = 'none';
            }
        }
    };


}
;
