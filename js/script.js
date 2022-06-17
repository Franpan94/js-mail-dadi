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
