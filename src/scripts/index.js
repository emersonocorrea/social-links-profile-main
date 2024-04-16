

const render = () => {
    const items = ["GitHub", "FrontEnd Mentor", "Linkedin", "Twitter", "instagram"]
    const list = document.querySelector('.list')
    list.innerHTML = ''

    items.forEach(item => {        
        const listItem = document.createElement('li')
        const button = document.createElement('a')

        button.classList.add('button')

        button.innerText = item

        listItem.append(button)
        list.appendChild(listItem)
        
    })

}

render()