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
