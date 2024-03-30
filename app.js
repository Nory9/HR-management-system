function Employee(id,full_name,department,level,image,salary){
this.id=id,
this.full_name=full_name,
this.department=department
this.level=level,
this.image=image,
this.salary=salary
}
Employee.prototype.generateID=function(){
    return this.id=Math.floor(Math.random()*(9999-1000)+1000);
}

    const form = document.getElementById("input-form");
    const output =document.getElementById("card-container");
// form.addEventListener("submit",outputData);
function outputData(event){
     event.preventDefault();
     const full_name=document.getElementById("name").value;

     const department=document.querySelector("input[name='department']:checked").value;

     const level=document.querySelector('input[name="level"]:checked').value;

     const image =document.getElementById("image").value;

     const employee = new Employee(null ,full_name, department, level, image);
     employee.generateID();

    const card=document.createElement('div');
    card.classList.add('card');

    const img=document.createElement('img');
    img.classList.add('image');
    img.src=employee.image;
    card.appendChild(img);

    const name=document.createElement('p');
    name.classList.add('name');
    name.textContent=`Name: ${employee.full_name}`;
    card.appendChild(name);

    const id=document.createElement('p');
    id.classList.add('id');
    id.textContent=`ID: ${employee.id}`;
    card.appendChild(id);

    const dep=document.createElement('p');
    dep.classList.add('dep');
    dep.textContent=`Department: ${employee.department}`;
    card.appendChild(dep);

    const lvl=document.createElement('p');
    lvl.textContent=`Level: ${employee.level}`;
    lvl.classList.add('level');
    card.appendChild(lvl);

    output.appendChild(card);
 }
 
 
 document.addEventListener("DOMContentLoaded", function() {
    form.addEventListener("submit", outputData);
});

// form.addEventListener("submit",outputData);
//  window.addEventListener("DOMContentLoaded",Employee.prototype.render);
