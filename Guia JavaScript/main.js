/**
 * 
 let name = 'Kassio'
 let age = 34
 let stars = 1.8
 let isSubscriabed = true

let student = {
  name: 'Kassio',
  age: 34,
  weight: 84,
  isSubscriabed: true
}

console.log(
  `${student.name} tem ${student.age} anos e ${student.weight}kg de peso.`
)

let students = [] // criaçao de um array vazio

students = [student] // atribuição de um valor ao array

console.log(students[0])

const aluno = {
  name: 'Zé',
  age: 30,
  weight: 180,
  isSubscriabed: false
}
students = {
  student,
  aluno
}
console.log(students)
 */
/**
 * 
 * 
function frases() {
  console.log('Frase 1')
  console.log('Frase 2')
  console.log('Frase 3')
}
frases()

 */

/**
 * 
 let frase = 'A casa é bonita!'
 // verificar se existe uma palavra na frase
 console.log(frase.includes('casa'))
 // split separa as strings pelo caractere escolhido
 let novraFrase = frase.split(' ')
 console.log(novraFrase)
 // join adiciona o caracter que quiser
 let novraFraseAdulterada = novraFrase.join('_')
 console.log(novraFraseAdulterada)
 
 */

let techs = ['html', 'css', 'js']
console.log(techs)
// push insere item na ultima posição do array
techs.push('nodejs')
console.log(techs)
// unshift insere no começo do array
techs.unshift('sql')
console.log(techs)
// pop remove o ultimo item do array
techs.pop()
console.log(techs)
// shift remove o primeiro item do array
techs.shift()
console.log(techs)
// slice pega alguns elementos do array
//console.log(techs.slice(1, 3))

// splice remove os elementos do array
//console.log(techs.splice(1, 2))

// encontrar um elemento no array
let index = techs.indexOf('css')
console.log(index)

//console.log(techs)
