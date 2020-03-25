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

export {createInfo,addConsecutiveDays}