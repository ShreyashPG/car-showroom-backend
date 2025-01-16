// BookPublications Controller
import GenericController from './Generic_controller.js';

import { 

  Grants, 
  ConsultancyReport, 
 
  SSTP_FDP_Workshop,

  Industrial_Visits,
  
  AllUsernames,
  EmployeeTeacherTables,

} from '../model/teachers.model.js';



// Grants Controller
export class GrantsController extends GenericController{
  constructor(){
      super(Grants,'T_ID');
  }
}

// ConsultancyReport Controller
export class ConsultancyReportController extends GenericController{
  constructor(){
      super(ConsultancyReport,'T_ID');
  }
}




// SSTP_FDP_Workshop Controller
export class SSTP_FDP_WorkshopController extends GenericController{
  constructor(){
      super(SSTP_FDP_Workshop,'T_ID');
  }
}


// Industrial_Visits Controller
export class Industrial_VisitsController extends GenericController {
  constructor() {
    super(Industrial_Visits,'T_ID')
  }
}


export class AllUsernamesController extends GenericController {
  constructor() {
    super(AllUsernames,'T_ID')
  }
}

export class EmployeeTeacherTablesController extends GenericController {
  constructor() {
    super(EmployeeTeacherTables, 'P_ID')
  }
}