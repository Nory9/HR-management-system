function renderTable(){
    const employees = JSON.parse(localStorage.getItem('employees'))||[];
    const departmentInfo={};
    let totalEmployees = 0;
    let totalSalary = 0;

    employees.forEach(x => {

        if(!departmentInfo[x.department]){
            departmentInfo[x.department]={
                count: 0,
                totalSalary: 0
            }
        }
        departmentInfo[x.department].count++;
        departmentInfo[x.department].totalSalary+=x.salary;
        totalEmployees++;
        totalSalary+=x.salary;
    });
    for (const department in departmentInfo) {
        const row = document.querySelector(`.table tbody tr.${department}`);
        if (row) {
            const avgSalary = departmentInfo[department].totalSalary / departmentInfo[department].count;
            row.innerHTML = `<td>${department}</td><td>${departmentInfo[department].count}</td><td>${departmentInfo[department].totalSalary}</td><td>${avgSalary.toFixed(2)}</td>`  
    }}
    document.querySelector('.table tfoot tr td:nth-child(2)').textContent = totalEmployees;
    document.querySelector('.table tfoot tr td:nth-child(3)').textContent = totalSalary;
    document.querySelector('.table tfoot tr td:nth-child(4)').textContent = (totalSalary / totalEmployees).toFixed(2);
}

document.addEventListener("DOMContentLoaded", function () {
    renderTable();
});
