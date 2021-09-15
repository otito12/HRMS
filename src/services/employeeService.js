const KEYS = {
    employees: 'employees',
    employeeId: 'employeeId'
}

export const getDepartmentCollection = () => ([
    {id:'it',label:'IT'},
    {id:'sales',label:'Sales'},
    {id:'management',label:'Management'}
])

export function getAllEmployees(){
    if(localStorage.getItem(KEYS.employees)==null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]));
    return JSON.parse(localStorage.getItem(KEYS.employees));
}

export function generateEmployeeId(){
    if(localStorage.getItem(KEYS.employeeId)==null)
        localStorage.setItem(KEYS.employeeId, '0');
    let id = parseInt(localStorage.getItem(KEYS.employeeId));
    localStorage.setItem(KEYS.employeeId, (++id).toString());
    return id;
}

export function insertEmployee(data){
    let employees= getAllEmployees();
    data['id'] = generateEmployeeId();
    employees.push(data);
    localStorage.setItem(KEYS.employees,JSON.stringify(employees));
}

export function updateEmployee(data){
    let employees= getAllEmployees();
    let recordIndex = employees.findIndex(x => x.id == data.id);
    employees[recordIndex]= {...data};
    localStorage.setItem(KEYS.employees,JSON.stringify(employees));
}

export function deleteEmployee(data){
    let employees= getAllEmployees();
    employees = employees.filter(x => x.id != data);
    localStorage.setItem(KEYS.employees,JSON.stringify(employees));
}



