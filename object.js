const student = {
    fullName : "shahsawar ali",
    age : 20,
    cgpa : 3.78,
    isPass : true,
};
console.log(student.age);
student["age"]=student["age"] + 1;
console.log(student.age);
console.log(student["fullName"]);
student["fullName"]="shah sb";
console.log(student["fullName"]);