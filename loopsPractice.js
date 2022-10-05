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
console.log(employeeInfo);

// find all employees whose bday month is in may

// console.log(employeeInfo[0].dob.slice(0, 2))
// console.log(employeeInfo[1].dob.slice(0, 2))
// console.log(employeeInfo[2].dob.slice(0, 2))
// console.log(employeeInfo[3].dob.slice(0, 2))
// console.log(employeeInfo[4].dob.slice(0, 2))
// console.log(employeeInfo[5].dob.slice(0, 2))

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

// // find the employee who's birthdays who are in May
// function birthdaysMonth(employeeInfo, month) {
//   const employees = [];
//   for (let i = 0; i < employeeInfo.length; i++) {
//     if (employeeInfo[i].dob.slice(0, 2) == month) {
//       employees.push(employeeInfo[i].name);
//     }
//   }
//   return employees;
// }

// // console.log(Birthdays(employeeInfo))

// function findEmployeesByBirthdayMonth(_employeeInfo, month, months) {
//   let key = Object.keys(months).find(k => months[k] === month)
//   const employeeNames = birthdaysMonth(_employeeInfo, month);
//   if (!employeeNames.length) {
//     return `No Bdays in ${key}`;
//   }
//   return employeeNames.join();
// }

// const months = {
//   Jan: "01",
//   Feb: "02",
//   Mar: "03",
//   Apr: "04",
//   May: "05",
//   Jun: "06",
//   Jul: "07",
//   Aug: "08",
//   Sep: "09",
//   Oct: "10",
//   Nov: "11",
//   Dec: "12",
// };

// // let key = Object.keys(months).find(k => months[k] === "02")
// // console.log(key)

// const { Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec } = months;

// console.log(findEmployeesByBirthdayMonth(employeeInfo, Jan, months));
