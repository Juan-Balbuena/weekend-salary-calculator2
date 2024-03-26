function addData() {

    let firstName =
        document.querySelector("#first-name").value;
    let lastName =
        document.querySelector("#last-name").value;
    let idNumber =
        document.querySelector("#id-number").value;
    let title =
        document.querySelector("#title").value;
    let annualSalary = 
        document.querySelector("#annual-salary").value;
    
    let table = document.querySelector("#output-table");
    let newRow = table.insertRow(table.rows.length);
    
    newRow.insertCell(0).innerHTML = firstName;
    newRow.insertCell(1).innerHTML = lastName;
    newRow.insertCell(2).innerHTML = idNumber;
    newRow.insertCell(3).innerHTML = title;
    newRow.insertCell(4).innerHTML = annualSalary;
    newRow.insertCell(5).innerHTML =
        '<button onclick="deleteData(this)">Delete</button>';
    
        clearInputs();
}

console.log(addData);

function deleteData(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
function clearInputs() {
    document.querySelector("#first-name").value = "";
    document.querySelector("#last-name").value = "";
    document.querySelector("#id-number").value = "";
    document.querySelector("#title").value = "";
    document.querySelector("#annual-salary").value = "";
}
 function totalMonthly (){
    let monthlyExpensess =
    document.querySelector("#annual-salary").value = document.querySelector("#annual-salary").value/12;
 
    let p = document.querySelector("#monthly-salary")

}

 console.log(totalMonthly);