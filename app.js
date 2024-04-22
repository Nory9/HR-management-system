function Employee(id, full_name, department, level, image, salary) {
    this.id = id,
    this.full_name = full_name,
    this.department = department,
    this.level = level,
    this.image = image,
    this.salary = salary
}

Employee.prototype.generateID = function () {
    // return this.id =1000+
     return this.id = Math.floor(Math.random() * (9999 - 1000) + 1000);
}
Employee.prototype.generateSalary =function (){
    if(this.level=="Junior"){
        return this.salary= Math.floor(Math.random()*(1000-500+1)+500);
    }
    else if(this.level=="Mid-Senior"){
        return this.salary= Math.floor(Math.random()*(1500-1000+1)+1000);
    }
    else if(this.level=="Senior"){
        return this.salary=  Math.floor(Math.random()*(2000-1500+1)+1500);
    }
}

Employee.prototype.outputData = function (outputElement) {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.classList.add('image');
    img.src = this.image;
    card.appendChild(img);

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = `Name: ${this.full_name}`;
    card.appendChild(name);

    const id = document.createElement('p');
    id.classList.add('id');
    id.textContent = `ID: ${this.id}`;
    card.appendChild(id);

    const dep = document.createElement('p');
    dep.classList.add('dep');
    dep.textContent = `Department: ${this.department}`;
    card.appendChild(dep);

    const lvl = document.createElement('p');
    lvl.textContent = `Level: ${this.level}`;
    lvl.classList.add('level');
    card.appendChild(lvl);
    
    const sal = document.createElement('p');
    sal.classList.add('salary');
    sal.textContent = `Salary : ${this.salary}`;
    card.appendChild(sal);

    outputElement.appendChild(card);
}
const output = document.getElementById("card-container");
let arr=[];
arr.push(new Employee(1000,'Ghazi Samer','Administration','Senior','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhGJhe2cm0i7MDHOen5GoRejraG6V2v2X2i8S2ot_pEM4PMX6tZGgqQ0kOqHXq68q3iE8&usqp=CAU'));
arr.push(new Employee(1001,'Lana Ali','Finance','Senior','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRddVmH1GCC4gPW6OuM2Jhf_HclCbeu1WtiisUHOuRqA5gEzP_t6IdavSJLqyN6Tdt0GJg&usqp=CAU'));
arr.push(new Employee(1002,'Tamara Ayoub','Marketing','Senior','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVAZvKMptw2eorY7F5T3CKUMw2z0_UOjulm5IAaNZxklRhbQgQJZlKn6QPSJ1Zo6EDXrc&usqp=CAU'));
arr.push(new Employee(1003,'Safi Walid','Administration','Mid-Senior','https://us.123rf.com/450wm/yupiramos/yupiramos1803/yupiramos180304632/96617963-young-man-model-avatar-character-vector-illustration-design.jpg?ver=6'));
arr.push(new Employee(1004,'Omar Zaid','Development','Senior','https://us.123rf.com/450wm/yupiramos/yupiramos1802/yupiramos180201958/94700505-young-man-avatar-character-vector-illustration-design.jpg?ver=6'));
arr.push(new Employee(1005,'Rana Saleh','Development','Junior','https://media.istockphoto.com/id/1364952860/vector/female-signing-ok-by-hand.jpg?s=612x612&w=0&k=20&c=sF1cveduJ-IoIv-2R9xeWaD4sqK6b6wVmOWGy4BKHL0='));
arr.push(new Employee(1000,'Hadi Ahmad','Finance','Mid-Senior','https://us.123rf.com/450wm/yupiramos/yupiramos1802/yupiramos180209008/95163413-young-man-happy-avatar-character-vector-illustration-design.jpg?ver=6'));
arr.forEach(x =>{
    x.outputData(output);
})
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("input-form");
    const output = document.getElementById("card-container");

    let employees=JSON.parse(localStorage.getItem("employees"))||[];
    employees.forEach(function (employeeData) {
        const employee = new Employee(employeeData.id, employeeData.full_name, employeeData.department, employeeData.level, employeeData.image,employeeData.salary);
        employee.outputData(output);
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const full_name = document.getElementById("name").value;
        const department = document.querySelector("input[name='department']:checked").value;
        const level = document.querySelector('input[name="level"]:checked').value;
        const image = document.getElementById("image").value;

        const employee = new Employee(null, full_name, department, level, image,null);
        employee.generateID();
         employee.generateSalary();
        employees.push(employee);
        localStorage.setItem("employees",JSON.stringify(employees));
        employee.outputData(output);
    });
});
