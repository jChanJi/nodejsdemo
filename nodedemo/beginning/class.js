var student = require('./student')
var teacher = require('./teacher')

function add(teacherName, studentNames){
teacher.add(teacherName)
studentNames.forEach(function(item, index){
  student.add(item)
})
}
exports.add = add
