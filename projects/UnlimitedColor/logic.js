// generate a random color

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

let intervalId;
function startChangingColor() {
    if (!intervalId) {
        intervalId = setInterval(changeBackgroundColor, 1000);
    }

    function changeBackgroundColor() {
        document.body.style.backgroundColor = randomColor();
    }
}

function stopChangingColor() {
    clearInterval(intervalId);
    intervalId = null;
}
