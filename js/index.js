

const name = document.querySelector('#click')
// console.log("My name is " + name )
click
name.addEventListener('click', runEvent)
// event handler
function runEvent(e){
    document.body.innerHTML = 'My name is Umunade Allen'
}