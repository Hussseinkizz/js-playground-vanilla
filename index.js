let students = [
  {
    id: 1,
    name: 'john',
    marks: [
      {
        subject: 'math',
        score: '60',
      },
      {
        subject: 'english',
        score: '40',
      },
      {
        subject: 'entrepreneurship',
        score: '20',
      },
    ],
  },
  {
    id: 2,
    name: 'sarah',
    marks: [
      {
        subject: 'math',
        score: '50',
      },
      {
        subject: 'english',
        score: '62',
      },
      {
        subject: 'entrepreneurship',
        score: '10',
      },
    ],
  },
  {
    id: 3,
    name: 'dorah',
    marks: [
      {
        subject: 'math',
        score: '60',
      },
      {
        subject: 'english',
        score: '50',
      },
      {
        subject: 'entrepreneurship',
        score: '50',
      },
    ],
  },
  {
    id: 4,
    name: 'ben',
    marks: [
      {
        subject: 'math',
        score: '35',
      },
      {
        subject: 'english',
        score: '40',
      },
      {
        subject: 'entrepreneurship',
        score: '30',
      },
    ],
  },
  {
    id: 5,
    name: 'hassan',
    marks: [
      {
        subject: 'math',
        score: '80',
      },
      {
        subject: 'english',
        score: '50',
      },
      {
        subject: 'entrepreneurship',
        score: '10',
      },
    ],
  },
];

// display all studnents in a table ui
let table = document.querySelector('.students-table');
let tableBody = table.querySelector('tbody');

let newRow = students.map(function (student) {
  let newString = `<tr>
<td>${student.name}</td>
        <td>Foo</td>
        <td>Foo</td>
        <td>Foo</td>
      </tr>`;
  return newString;
});
console.log(newRow);
tableBody.innerHTML = newRow;

// highlight the best performing student overall with green color
// highlight the worst performing student overall with red color
// get highest ranking student in math subject
// get lowest ranking student in entrepreneurship
// get student average score
// make it possible to filter data shown in the table by subject
// use the following ranking criteria and put a tag at the end of each student's row:
// below 40 - poor
// 50 and above - good
// 70 and above - awesome
