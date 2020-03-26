function createInfo (mensaje,node,element,className = '') {
    const newNode = document.createElement(element)
    const text = mensaje
    const textNode = document.createTextNode(text)
    newNode.appendChild(textNode)
    node.appendChild(newNode)
    newNode.className = className
    return newNode
}

function addConsecutiveDays (lista) {

    let index = lista.length

    if ( index > 4) {
        return lista
    }
    else {
        let date = new Date
        date.setDate(date.getDate() + index)
        let day = date.getDate()
        let month = date.getMonth()
        let year = date.getFullYear()
        let fullDate = `${day}/${month}/${year}`

        lista.push(fullDate)
        addConsecutiveDays(lista)
    }
}

function loadingScreen (weatherSection, mapa, ciudad,) {
    const loadingNode = document.getElementById('loadAnimation')
    const loadingContainer = document.getElementById('loading__container')

    if (weatherSection.childElementCount > 0){
        weatherSection.innerHTML = ''
        ciudad.innerHTML= ''
        mapa.innerHTML = ''
    }
    
    loadingNode.className = 'lds-facebook'
    loadingContainer.className = 'loading__container'
}

function noLoadingScreen () {
    const loadingNode = document.getElementById('loadAnimation')
    const loadingContainer = document.getElementById('loading__container')

    loadingNode.classList.remove("lds-facebook")
    loadingContainer.classList.remove("loading__container")

}

    

export {createInfo,addConsecutiveDays, loadingScreen, noLoadingScreen}