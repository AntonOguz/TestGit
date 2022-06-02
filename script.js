function hello() {

    console.log('hello');
}
function generateNumber() {
    const num = Math.round(Math.random()*100)
    document.getElementById('text').textContent = num;

}