let button = document.querySelector('button')
let div = document.querySelector('div')


const buttonMessage = () => {
    
    let newMessage = document.createElement('p')
    newMessage.innerHTML = "Well, that's not very nice."
    div.appendChild(newMessage)

    rollbar.info('Someone has dissed your web page.')
    
}

button.addEventListener('click', buttonMessage)

