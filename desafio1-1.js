const nome = 'Carlos';
const peso = 84;
const altura = 1.88;

let IMC = peso / (altura * altura);

if (IMC >= 30)
    console.log(`${nome} esta acima do peso.`);
else
    console.log(`${nome} nao esta acima do peso`);

const nome2 = 'Silvana';
const sexo = 'F';
const idade = 48;
const contribuicao = 23;

if (sexo === 'M'){
    if(contribuicao > 35){
        console.log(`${nome2}, voce pode se aposentar`);
    } else {
        console.log(`${nome2}, voce nao pode se aposentar`);
    }
} else{
    if(contribuicao > 30){
        console.log(`${nome2}, voce pode se aposentar`);
    } else {
        console.log(`${nome2}, voce ainda nao pode se aposentar`);
    }
}