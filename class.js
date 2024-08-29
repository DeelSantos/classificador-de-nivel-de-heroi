const prompt = require('prompt-sync')();


let nomeHeroi = prompt('Digite o nome do Herói: ');
let xpHeroi = prompt('Digite o nível do Herói: ');

if(xpHeroi < 1000) {
    console.log(`O Herói ${nomeHeroi} está no nível de ${xpHeroi} e está no ranking Ferro`);
    
} else if (xpHeroi > 1000 && xpHeroi <= 2000) {
    console.log(`O Herói ${nomeHeroi} está no nível de ${xpHeroi} e está no ranking Bronze`);
} else if (xpHeroi > 2000 && xpHeroi <= 5000) {
    console.log(`O Herói ${nomeHeroi} está no nível de ${xpHeroi} e está no ranking Prata`);
} else if (xpHeroi > 5000 && xpHeroi <= 7000) {
    console.log(`O Herói ${nomeHeroi} está no nível de ${xpHeroi} e está no ranking Ouro`);
} else if (xpHeroi > 7000 && xpHeroi <= 8000) {
    console.log(`O Herói ${nomeHeroi} está no nível de ${xpHeroi} e está no ranking Platina`);
} else if (xpHeroi > 8000 && xpHeroi <= 9000) {
    console.log(`O Herói ${nomeHeroi} está no nível de ${xpHeroi} e está no ranking Ascendente`);
} else if (xpHeroi > 9000 && xpHeroi <= 10000) {
    console.log(`O Herói ${nomeHeroi} está no nível de ${xpHeroi} e está no ranking Imortal`);
} else{
    console.log(`O Herói ${nomeHeroi} está no nível de ${xpHeroi} e está no ranking Radiante`);
}




