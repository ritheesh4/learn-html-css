
function loadData(e) {
    xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true);
    xhr.onload = function () {
        if (this.status === 200) {
            const user = JSON.parse(this.responseText);
            // user.forEach(element => console.log(element.id));
            user.forEach(element => {
                
                document.getElementById(element.id).innerHTML = `<div>${element.review}</div>`;
                console.log(element.test)
            });
        }
    }
    xhr.send();

}

loadData()


document.getElementById('1').innerHTML = "9";
document.querySelector('.details').innerHTML += `<div>Ritheesh</div>`