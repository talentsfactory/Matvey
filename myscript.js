    var button = document.getElementById('myButton');
    var logo = document.getElementById('headerLogo');
    var modal = document.getElementById('myModal');
    var mcl = document.getElementById("myClose");
    var content = document.getElementById('myContent');

    // logo.onmouseenter = function() {
    //     logo.style.fontSize = "60px";
    // }

    // logo.onmouseenter = function() {
    //     logo.style.fontSize = "";
    // }

    button.onclick = function() {
        modal.style.display = "block";
        setTimeout(opacity1, 100)
    }

    function opacity1() {
        content.style.opacity = "1";
    }

    mcl.onclick = function() {
    //     alert('Сообщение отправлено! хорошего настроения')
        content.style.opacity = "0";
        setTimeout(none, 1000);
    }

    function none() {
        modal.style.display = "none";
    }
