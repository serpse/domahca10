

//    1

for (let iterator = 20; iterator <= 30; iterator += 0.5){
    console.log (iterator)
}


//    2


for(let i = 10; i <= 100; i += 10) {
console.log(i, i * 27)

}

//   3
const mam = +prompt('');
for (let i=0; i <= 100; i++) {
    if (i**2 <= mam) {
        console.log (`${i} в квадраті ${i ** 2}`);
}
}

//      4    

let n = 100;

primeNumber:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j === 0) continue primeNumber; 
  }

  console.log(i); 
}

//   5
const a = +prompt('Ввод:');
let b = 0;
if (a > 0) {
    for (let i = 1; i < a; i++) {
        if (3 ** i === a) {
            b += 1;
        }
    }
    if (b !== 0) {
        console.log('Можливо');
    } else {
        console.log('Не можливо');
    }
} else {
    console.log('жаль что нажали отмена');
}

