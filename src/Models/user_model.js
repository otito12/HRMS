const userModel = {
  id: 0,
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  address: {
    streetAdd: "",
    city: "",
    state: "",
    zip: "",
  },
  dob: new Date(),
  aboutMe: "",
  skills: [],
  languages: [],
  gender: "male",
  department: "",
  officeLocation: "",
  taxNo: "",
  jobTitle: "",
  employeeRole: "",
  managerName: "",
  managerId: "",
  managees: [], // list of short profiles see userShort_model
  hireDate: new Date(),
  isStaffed: false,
  currentProject: {}, //see project_model.js
  currentProjectRole: {}, // see role_model
  previousProject: [], // list of project_model.js
  nextAvailable: new Date(),
  isPermanent: false,
};

export default userModel;
