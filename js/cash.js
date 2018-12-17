/**
 * Created by Administrator on 2018/12/17.
 */
window.onload = function () {

    var all_choose = document.getElementById('all-choose');
    var checks = document.getElementsByTagName('input');
    var money = document.getElementById('money');
    var money_hint = document.getElementById('money-hint');


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
    }

};
