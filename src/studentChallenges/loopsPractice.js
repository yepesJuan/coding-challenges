const employeeInfo = [
  {
    name: "Jonh",
    dob: "08/20",
  },
  {
    name: "Alex",
    dob: "09/20",
  },
  {
    name: "Jake",
    dob: "10/20",
  },
  {
    name: "Julie",
    dob: "05/20",
  },
  {
    name: "Jonh",
    dob: "05/20",
  },
  {
    name: "Jimmy",
    dob: "12/20",
  },
  {
    name: "Joe",
    dob: "11/20",
  },
  {
    name: "Joey",
    dob: "05/20",
  },
  {
    name: "Kayla",
    dob: "06/20",
  },
  {
    name: "Jennifer",
    dob: "05/20",
  },
  {
    name: "Stephanie",
    dob: "05/20",
  },
  {
    name: "Sandra",
    dob: "03/20",
  },
];

employeeInfo.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});

function birthdayMonth(month) {
  const employee = [];
  for (let i = 0; i < employeeInfo.length; i++) {
    if (employeeInfo[i].dob.slice(0, 2) == month) {
      employee.push(employeeInfo[i].name);
    }
  }
  return employee.join(", ");
}

const months = {
  Jan: "01",
  Feb: "02",
  Mar: "03",
  Apr: "04",
  May: "05",
  Jun: "06",
  Jul: "07",
  Aug: "08",
  Sep: "09",
  Oct: "10",
  Nov: "11",
  Dec: "12",
};

console.log(birthdayMonth(months.Jun));
