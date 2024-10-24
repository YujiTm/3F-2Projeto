const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertValue(variavel)
}

export {
    getCSS
}
