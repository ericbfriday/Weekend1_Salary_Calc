var employees = [];

$( document ).ready( docReady ) 


function docReady() {
    $( '#submitEmployee' ).on ('click', addEmployee );
} // end docReady

function addEmployee( ) {
    console.log('running addEmployee');
    new Employee( $( '#firstName').val(), $( '#lastName').val(), $( '#idNumber').val(), $( '#jobTitle').val(), $( '#annualSalary').val() );
}

function Employee(firstNameIn, lastNameIn, idNumberIn, jobTitleIn, annualSalaryIn){
    this.firstName = firstNameIn;
    this.lastName = lastNameIn;
    this.idNumber = idNumberIn;
    this.jobTitle = jobTitleIn;
    this.annualSalary = annualSalaryIn;
    // add employee to employee array
    employees.push( this );
    console.log('pushing employee into employees array');
    
} // end Employee constructor