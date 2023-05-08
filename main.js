const joketext = document.getElementById('jokeText');
const joke = document.getElementById('jokebtn');
joke.addEventListener('click',() => {
    console.log('Button clicked');
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => {
        console.log(response)
        response.json().then(data => {
            console.log(data.value);
            joketext.innerHTML = data.value
        })
    })
})
