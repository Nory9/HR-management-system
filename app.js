function Employee(id, full_name, department, level, image, salary) {
    this.id = id,
    this.full_name = full_name,
    this.department = department,
    this.level = level,
    this.image = image,
    this.salary = salary
}

Employee.prototype.generateID = function () {
    return this.id = Math.floor(Math.random() * (9999 - 1000) + 1000);
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

    outputElement.appendChild(card);
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("input-form");
    const output = document.getElementById("card-container");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const full_name = document.getElementById("name").value;
        const department = document.querySelector("input[name='department']:checked").value;
        const level = document.querySelector('input[name="level"]:checked').value;
        const image = document.getElementById("image").value;

        const employee = new Employee(null, full_name, department, level, image);
        employee.generateID();

        employee.outputData(output);
    });
});
