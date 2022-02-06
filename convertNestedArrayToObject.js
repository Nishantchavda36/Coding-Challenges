// The argument will look like this:

// [
//   [['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],
//   [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]
// ]
// Output
// [{firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'}, {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}]

function convertNestedArrayToObject(employeeData){
   arr = []
  for (var i = 0; i < employeeData.length; i ++) {
    var obj = {}
    for (var j = 0; j < employeeData[i].length; j ++) {
      var key = employeeData[i][j][0];
      var value = employeeData[i][j][1];
      obj[key] = value;
    }
    arr.push(obj);
  }
  return arr;
  }





let x =convertNestedArrayToObject([
    [['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],
    [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]
  ]);
x
