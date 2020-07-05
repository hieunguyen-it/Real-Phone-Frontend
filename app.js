var circle = document.getElementById("cricle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");

var rotaeValue = circle.style.transform;
var rotaeSum;

upBtn.onclick = function()
{
    rotaeSum = rotaeValue + "rotate(-90deg)";
    circle.style.transform = rotaeSum; // sử dụng style.trasform để quay thuộc tính js cho phép lấy giá trị css bất kỳ
    rotaeValue = rotaeSum ;
}

downBtn.onclick = function()
{
    rotaeSum = rotaeValue + "rotate(90deg)";
    circle.style.transform = rotaeSum;
    rotaeValue = rotaeSum ;
}