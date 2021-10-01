const projectModel = {
  projectId: 0,
  projectName: "",
  clientName: "",
  pManagerName: "",
  pManagerEmployeeId: "",
  projectStartDate: new Date(),
  projectEndDate: new Date(),
  projectLocation: "",
  projectStaffed: [], // list of short profiles see useShort_model
  projectOpenRoles: [], // list of open roles see role_model
};

export default projectModel;
