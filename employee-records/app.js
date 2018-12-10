var employees = [];


function Employee(name, salary, jobTitle){
    this.name = name;
    this.salary = salary;
    this.jobTitle = jobTitle;
    this.hours = "Full Time";
    this.print = printEmployeeForm;
}


function printEmployeeForm(){
    console.log(this);
}

var mark = new Employee("Mark", 105000, "Software Dev");
var mike = new Employee("Mikey", 50000, "Janitor");
var amber = new Employee("Amber", 70000, "Lactation Consultant");


mark.print();
mike.print();
amber.print();

employees.push(mark, mike, amber);

console.log(employees)
