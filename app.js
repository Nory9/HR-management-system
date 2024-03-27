function Employee(id,full_name,department,level,image,salary){
this.id=id,
this.full_name=full_name,
this.department=department
this.level=level,
this.image=image,
this.salary=salary
}
Employee.prototype.salaryCalc=function(){
    if(this.level=="Junior"){
        return Math.floor(Math.random()*(1000-500+1)+500);
    }
    else if(this.level=="Mid-Senior"){
        return Math.floor(Math.random()*(1500-1000+1)+1000);
    }
    else if(this.level=="Senior"){
        return Math.floor(Math.random()*(2000-1500+1)+1500);
    }
}
Employee.prototype.netSalary=function(){
    return this.salary*0.075;
}
const employees = [
    new Employee(1000, "Ghazi Samer", "Administration", "Senior"),
    new Employee(1001, "Lana Ali", "Finance", "Senior"),
    new Employee(1002, "Tamara Ayoub", "Marketing", "Senior"),
    new Employee(1003, "Safi Walid", "Administration", "Mid-Senior"),
    new Employee(1004, "Omar Zaid", "Development", "Senior"),
    new Employee(1005, "Rana Saleh", "Development", "Junior")
];

 console.log(Employee);
 function render(){
     for(let i=0;i<employees.length;i++){
        const employee=employees[i];
        const Name=document.querySelector(`.N${i+1}`);
        const Salary=document.querySelector(`.S${i+1}`);
        Name.textContent=employee.full_name;
        Salary.textContent=employee.salaryCalc();
     }
 }

 window.addEventListener("DOMContentLoaded",render);
