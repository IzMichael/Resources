function splitString(string, search) {
    let isValid = string !== '' // Disallow Empty
        &&
        typeof string === 'string' // Allow strings
        ||
        typeof string === 'number' // Allow numbers

    if (!isValid) {
        return false
    } // Failed
    else {
        string += ''
    } // Ensure string type

    // Search
    let searchIndex = string.indexOf(search)
    let isBlank = ('' + search) === ''
    let isFound = searchIndex !== -1
    let noSplit = searchIndex === 0
    let parts = []

    // Remains whole
    if (!isFound || noSplit || isBlank) {
        parts[0] = string
    }
    // Requires splitting
    else {
        parts[0] = string.substring(0, searchIndex)
        parts[1] = string.substring(searchIndex).slice(0, 1)
        parts[2] = string.substring(searchIndex).slice(0, -1)
    }

    return parts
}

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

function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, (s*1000)));
}