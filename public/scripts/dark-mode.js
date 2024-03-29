const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    background: getStyle(html, "--white"),
    white: getStyle(html, "--bg-panel"),
    whiteDois: getStyle(html, "--bg-panel"),
    black: getStyle(html, "--black"),
    iconsDetails: getStyle(html, "--iconsDetails"),
    lightBlue: getStyle(html, '--light-blue'),
    greyDark: getStyle(html, '--grey-dark'),
    questionRead: getStyle(html, '--question-read'),
    greyLight: getStyle(html, '--grey-light')
}

const darkMode = {
    background: "#000",
    white: "00000",
    whiteDois: "#fff",
    black: "#fffff0",
    iconsDetails: '#E5EAF1',
    lightBlue: '#204f96',
    greyDark: '#fff',
    questionRead: '#2e3035',
    greyLight: '#363636'

}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}

checkbox.addEventListener("change", ({target}) => {

    if(target.checked){
        changeColors(darkMode)
    
        localStorage.setItem('theme', 'dark')
    }
    else{
        changeColors(initialColors)

        localStorage.setItem('theme', 'normal')
    }

})


if(localStorage.getItem('theme') == 'dark'){
    checkbox.checked = true
    changeColors(darkMode)
}
else{
    changeColors(initialColors)
}

