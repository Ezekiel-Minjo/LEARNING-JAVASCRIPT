// Company policies (top of chain)
var CompanyPolicies = {
    vacation: "20 days per year",
    insurance: "Full coverage"
};

// Department policies (middle of chain)
var EngineeringDept = {
    meetingDay: "Monday",
    codeReview: "Required"
};

// Individual employee (bottom of chain)
var engineer = {
    name: "Mike",
    project: "Mobile App"
};

// Create the prototype chain
Object.setPrototypeOf(EngineeringDept, CompanyPolicies);
Object.setPrototypeOf(engineer, EngineeringDept);

// Mike can access policies from anywhere in the chain
console.log(engineer.vacation);
console.log(engineer.codeReview);
console.log(engineer.project);