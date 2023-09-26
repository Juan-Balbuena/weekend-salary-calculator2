function addData() {
    // Get input values
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
    
    // Get the table and insert a new row at the end
    let table = document.querySelector("#output-table");
    let newRow = table.insertRow(table.rows.length);
    
    // Insert data into cells of the new row
    newRow.insertCell(0).innerHTML = firstName;
    newRow.insertCell(1).innerHTML = lastName;
    newRow.insertCell(2).innerHTML = idNumber;
    newRow.insertCell(3).innerHTML = title;
    newRow.insertCell(4).innerHTML = annualSalary;

        '<button onclick="editData(this)">Edit</button>'+
        '<button onclick="deleteData(this)">Delete</button>';
    
    // Clear input fields
    // clearInputs();
}

console.log(addData);