const noname = "Не вказано";

class Employee {
  name = noname;
  pay = noname;
  profession = noname;
  constructor(name, pay, profession) {
    if (name) {
      this.name = name;
    }
    if (pay) {
      this.pay = pay + ' грн';
    }
    if (profession) {
      this.profession = profession;
    }
  }
}

const workers = [
  new Employee("", 10000, "Директор"),
  new Employee("Вика", 5000, "Касир"),
  new Employee("Ира", "", "Швея"),
];

function newEmployee(employee) {
  const $employeeTr = document.createElement("tr"),
    $nameTd = document.createElement("td"),
    $professionTd = document.createElement("td"),
    $payTd = document.createElement("td");

  $employeeTr.appendChild($nameTd);
  $employeeTr.appendChild($professionTd);
  $employeeTr.appendChild($payTd);

  $nameTd.innerText = employee.name;
  $professionTd.innerText = employee.profession;
  $payTd.innerText = employee.pay;

  return $employeeTr;
}

function render() {
  const $workersList = document.getElementById("js-workers-list");

  for (let employee of workers) {
    $workersList.appendChild(newEmployee(employee));
  }
}
render();

export default Employee;
