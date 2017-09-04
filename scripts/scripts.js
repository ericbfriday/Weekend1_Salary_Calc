var employees = [];
var totalMonthlyCosts = 0;

$(document).ready(docReady);

function docReady() {
    console.log('JQ Ready');
    $('#submitEmployee').on('click', addEmployee);
    $('#submitEmployee').on('click', monthlyCostDisplay);
    $('#submitEmployee').on('click', displayEmployees);
} // end docReady function

function addEmployee() {
    //    console.log('running addEmployee');
    new Employee($('#firstName').val(), $('#lastName').val(), $('#idNumber').val(), $('#jobTitle').val(), $('#annualSalary').val());

    // resetting fields to default attributes
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
} // end addEmployee function

function Employee(firstNameIn, lastNameIn, idNumberIn, jobTitleIn, annualSalaryIn) {
    this.firstName = firstNameIn;
    this.lastName = lastNameIn;
    this.idNumber = idNumberIn;
    this.jobTitle = jobTitleIn;
    this.annualSalary = annualSalaryIn;
    // making monthly salary calculation as a property of the employee
    this.monthlySalary = Math.round(annualSalaryIn / 12);
    // adding monthly salary to totalMonthlyCosts
    totalMonthlyCosts += Number(this.monthlySalary);
    // add employee to employee array
    employees.push(this);
    //    console.log('pushing employee into employees array');
} // end Employee constructor

function monthlyCosts (employees, monthlySalary) {
    return employees.reduce( function(a, b) {
        return a + b[Employee.monthlySalary];
    }, 0);
} // end monthlyCosts function

function monthlyCostDisplay () {
    $('#monthlyCostDisplay').html(totalMonthlyCosts);
} // end monthlyCostDisplay function

function displayEmployees() {
//    console.log('Adding Employee');
    $('#displayEmployee').append('<tr id=' + employees.slice(-1)[0].idNumber + '>' +
        '<td>' + employees.slice(-1)[0].firstName + '</td>' +
        '<td>' + employees.slice(-1)[0].lastName + '</td>' +
        '<td>' + employees.slice(-1)[0].idNumber + '</td>' +
        '<td>' + employees.slice(-1)[0].jobTitle + '</td>' +
        '<td>' + employees.slice(-1)[0].annualSalary + '</td>' +
        '<td>' + '<button class="delete">Delete</button>' + '</td>' +
        '</tr>'
    );
    $('.delete').on('click', deleter);
} // end displayEmployees function

function deleter() {
    console.log('deleting employee');
    $(this).closest ('tr').remove();
}// end deleter function