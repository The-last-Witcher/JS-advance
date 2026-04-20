async function getMemes(){
    const res = await fetch('https://api.imgflip.com/get_memes', {
        method: 'GET',
        mode: "cors",
        // cache: 'no-cache',
        // headers: {
        //     "Content-Type": "application/json"
        // },
        // credentials: 'include' // для передачи учетных данных
    })
    return await res.json()
}

const loader = document.getElementById('loader')
const content = document.getElementById('content')
const button = document.getElementById('meme_btn')

button.addEventListener('click', ev => {
    // fetch('https://api.imgflip.com/get_memes')
    //     .then(res => {
    //         return res.json()
    //     })
    //     .then((data) => {
    //         console.log(data)
    //         document.getElementById('meme_img').setAttribute('src', data.data.memes[Math.floor(Math.random() * 100)].url)
    //     })



    getMemes()
        .then((data) => {
            let rand = Math.floor(Math.random() * 100)

            button.disabled = true
            content.style.display = 'none'
            loader.style.display = 'block'

            setTimeout(() => {
                content.style.display = 'block'
                content.setAttribute('src', data.data.memes[rand].url)
                loader.style.display = 'none'
                button.disabled = false
            }, 3500)
        })
        .catch((err) => {
            content.innerHTML = '<p style="color: red;">Произошла ошибка доступа к серверу</p>'
        })
        
})

