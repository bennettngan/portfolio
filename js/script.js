document.body.innerHTML = document.body.innerHTML.replace(/Bennett/ig, 'SAMUEL');
document.body.innerHTML = document.body.innerHTML.replace(/Aerospace/ig, 'Computer');
document.body.innerHTML = document.body.innerHTML.replace(/Drone/ig, 'Bennett');
document.body.innerHTML = document.body.innerHTML.replace(/Samuel/ig, 'Drone');
const bodyText = document.body.innerHTML;
let newBodyText = "";
for (var i = 0; i < bodyText.length; i++) {
    let rand = Math.random();
    if (rand < 0.5) {
        newBodyText += bodyText.charAt(i).toLowerCase();
    }
    else {
        newBodyText += bodyText.charAt(i).toUpperCase();
    }
}
document.body.innerHTML = newBodyText;