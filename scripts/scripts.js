var employees = [];
// var totalSalaries = 0;
var totalMonthlyCosts = 0;

$(document).ready(docReady);

function docReady() {
    console.log('JQ Ready');
    $('#submitEmployee').on('click', addEmployee);
    $('#submitEmployee').on('click', monthlyCostDisplay);
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
}