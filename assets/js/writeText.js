function write(destination, message, speed, type) {
    var i = 0;
    var interval = setInterval(function () {
        if (!type == '') {
            document.getElementById(destination).innerHTML = document.getElementById(destination).innerHTML.slice(0, -1);
        }
        document.getElementById(destination).innerHTML += message.charAt(i) + type;
        i++;
        if (i > message.length) {
            if (!type == '') {
                document.getElementById(destination).innerHTML = document.getElementById(destination).innerHTML.slice(0, -1);
            }
            clearInterval(interval);
        }
    }, speed * 1000);
}