window.addEventListener("load", init);
window.addEventListener("resize", change_size);

function querry(name) {
    return document.querySelector(name);
}

function querry_all_raw(name) {
    return document.querySelectorAll(name);
}

function querry_all(name, arg) {
    return document.querySelectorAll(name).forEach(elem => {arg(elem)});
}


function place_white(evt) {
    evt.target.innerHTML = "♙";
    evt.target.removeEventListener("click", place_white);
}

function place_black(evt) {
    evt.target.innerHTML = "♟";
    evt.target.removeEventListener("click", place_black);
}

function change_size() {
    querry("#chess").style.height = window.getComputedStyle(querry("#chess")).width;
}

function init()
{
    let board = querry("#chess");
    let color_num = 0;
    for (let x = 0; x < 8; x++)
    {
        for (let y = 0; y < 8; y++)
        {
            if(color_num == 0)
                board.innerHTML += '<div class="mezo white"></div>';
            else
                board.innerHTML += '<div class="mezo black"></div>';
            color_num++;
            color_num = color_num % 2;
        }
        color_num++;
        color_num = color_num % 2;
    }

    querry_all("#chess>.black", q=>q.addEventListener("click", place_black));
    querry_all("#chess>.white", q=>q.addEventListener("click", place_white));
    querry("#chess").style.height = window.getComputedStyle(querry("#chess")).width;
}