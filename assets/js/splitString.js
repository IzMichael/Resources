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