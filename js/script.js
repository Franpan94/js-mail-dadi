let email=['jason@gmail.com' , 'michael@libero.it' , 'john@libero.it' , 'antony@gmail.com' , 'josh@gmail.com' , 'manager@libero.it' , 'fede@gmail.com' , 'george@libero.it' , 'miguel@gmail.com' , 'mary@libero.it'];
console.log(email);

document.getElementById('e-mail').innerHTML=email;

let useremail= prompt('Inserisci email:');
document.getElementById('user-email').innerHTML=useremail;
console.log(useremail);

let verificated=false;

for(let i=0 ; i < email.length; i++){
    console.log(email[i]);
    let element= email[i];

    if(useremail==element){
        verificated= true;
    } 
}
console.log(verificated); 
document.getElementById('verifi-cated').innerHTML=verificated;



// Esercizio Dadi
let usercasual= Math.floor((Math.random() * 6) + 1);
let numberuser= document.getElementById('number-user');
numberuser.innerHTML = 'Il numero del giocatore è ' + usercasual;

let pccasual= Math.floor((Math.random() * 6) + 1);
let numberpc= document.getElementById('number-pc');
numberpc.innerHTML = 'Il numero del computer è ' + pccasual;

let generator= document.getElementById('generator-btn');

generator.addEventListener ('click', function(){
 
    let output= document.getElementById('output-ticket');
    
    if(usercasual > pccasual){
    output.innerHTML='Il giocatore con il valore '+ usercasual;

 } else if(usercasual < pccasual) {
    output.innerHTML='Il computer con il valore '+ pccasual;
 
} else {
    output.innerHTML='Il gioco si ripete, poichè non si può determinare un vincitore';
}
   
})