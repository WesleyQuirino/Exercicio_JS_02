let Studants = [
  { nome: "Marcelo", nota1: 88, nota2: 63 },
  { nome: "Julia", nota1: 90, nota2: 60 },
  { nome: "Maria", nota1: 50, nota2: 66 },
  { nome: "Daniel", nota1: 70, nota2: 80 },
  { nome: "Leticia", nota1: 90, nota2: 90 },
]

function avarege(nota1, nota2) {
  let calcAverage = ((nota1 / 10 + nota2 / 10) / 2).toFixed(1)
  return calcAverage
}
let message

function studantsAverage(studant) {
  let avaregeResult = avarege(studant.nota1, studant.nota2)
  if (avaregeResult >= 7) {
    message = `A média foi ${avaregeResult}
    Parabens ${studant.nome} você foi aprovado(a)!`
  } else {
    message = `A média foi ${avaregeResult}
    Não foi dessa vez ${studant.nome} você não foi aprovado(a)!`
  }
  return message
}

for (let studant of Studants) {
  studantsAverage(studant)
  alert(message)
}
