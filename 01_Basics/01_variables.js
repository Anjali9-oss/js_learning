const studentId=123
let studentMail="Abc@gmail.com"
var studentPwd="2345"

//now because of scope block issue we avoid using var

// studentId=34---> this should not be done as studentId is const type

console.log(studentId);

//another way of printing/displaying the variables
console.table([studentId,studentMail,studentPwd])
