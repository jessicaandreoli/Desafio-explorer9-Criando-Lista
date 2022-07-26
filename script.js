let students = []
  
function student(name, email, password, nOne, nTwo, nTree) {
  this.name = name
  this.email = email
  this.password = password
  this.nOne = Number(nOne)
  this.nTwo = Number(nTwo)
  this.nTree = Number(nTree)
  this.media = function () {
    return ((this.nOne + this.nTwo + this.nTree)/3).toFixed(2)
  }
  this.situation = function () {
    if (this.media() >= 7)  {
      return "Aprovado(a)"
    } 
    return "Reprovado(a)"
  } 
  
}

function save() {
  let name = document.getElementById("name").value
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  let nOne = document.getElementById("noteOne").value
  let nTwo = document.getElementById("noteTwo").value
  let nTree = document.getElementById("noteTree").value

  let newStudent = new student(name, email, password, nOne, nTwo, nTree)
  students.push(newStudent)
  console.log(students)
  clear()
  result(students)
  
}

function clear() {
  document.getElementById("name").value = null
  document.getElementById("email").value = null
  document.getElementById("password").value = null
  document.getElementById("noteOne").value = null
  document.getElementById("noteTwo").value = null
  document.getElementById("noteTree").value = null
}

function result(students) {
  document.getElementById("list").innerHTML= null
  for(let i = 0; i < students.length; i++) {
   document.getElementById("list").innerHTML += `<li> Nome: <b>${students[i].name}</b> Média: <b>${students[i].media()}</b> Situação: <b>${students[i].situation()}</b></li>`
  }
}






