/**
 * Created by Administrator on 2018/12/19.
 */
window.onload = function () {
    var btn_checked = document.getElementById('btn-checked');
    var input_checked = document.getElementById('input-checked');


    btn_checked.onclick = function () {
        input_checked.checked = input_checked.checked == false;
    }

};