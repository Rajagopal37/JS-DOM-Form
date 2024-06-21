var showData = null;

function onSubmit(event) {
    event.preventDefault();

    var formData = getFormData();

    if (!validateFormData(formData)) {
        alert("Please select at least two food options.");
        return;
    }

    if (showData === null) {
        insertData(formData);
    }
    resetForm();
}

function getFormData() {
    let inputData = {};
    inputData['first-name'] = document.getElementById("first-name").value;
    inputData['last-name'] = document.getElementById("last-name").value;
    inputData['email'] = document.getElementById("email").value;

    // Get the gender value
    let gender = document.querySelector('input[name="gender"]:checked');
    inputData['gender'] = gender ? gender.value : '';

    inputData['address'] = document.getElementById("address").value;
    inputData['pincode'] = document.getElementById("pincode").value;
    inputData['state'] = document.getElementById("state").value;
    inputData['country'] = document.getElementById("country").value;

    // Get the selected food options
    let selectedFoods = [];
    document.querySelectorAll('input[name="food"]:checked').forEach(checkbox => {
        selectedFoods.push(checkbox.value);
    });
    inputData['food'] = selectedFoods.join(', ');

    return inputData;
}

function validateFormData(data) {
    // Check if at least two food options are selected
    let selectedFoods = data['food'].split(', ').filter(food => food !== '');
    return selectedFoods.length >= 2;
}

function insertData(data) {
    var table = document.getElementById('storelist').getElementsByTagName('tbody')[0];

    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data['first-name'];
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data['last-name'];
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data['email'];
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data['gender'];
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data['address'];
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data['pincode'];
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data['state'];
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data['country'];
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data['food'];
}

function resetForm() {
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("email").value = "";
    let gender = document.querySelector('input[name="gender"]:checked');
    if (gender) gender.checked = false;
    document.getElementById("address").value = "";
    document.getElementById("pincode").value = "";
    document.getElementById("state").value = "";
    document.getElementById("country").value = "";
    document.querySelectorAll('input[name="food"]:checked').forEach(checkbox => {
        checkbox.checked = false;
    });
    showData = null;
}
