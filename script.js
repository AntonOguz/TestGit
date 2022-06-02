function hello() {

    console.log('hello');
}
function generateNumber() {
    const num = Math.round(random()*100)
    document.getElementById('text').textContent = num;

}