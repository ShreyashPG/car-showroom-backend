// BookPublications Controller
import GenericController from './Generic_controller.js';

import { 

  Grants, 
  ConsultancyReport, 
 
  SSTP_FDP_Workshop,

  Industrial_Visits,
  
  AllUsernames,
  EmployeeSaleTables,

} from '../model/sales.model.js';



// Grants Controller
export class GrantsController extends GenericController{
  constructor(){
      super(Grants,'S_ID');
  }
}

// ConsultancyReport Controller
export class ConsultancyReportController extends GenericController{
  constructor(){
      super(ConsultancyReport,'S_ID');
  }
}




// SSTP_FDP_Workshop Controller
export class SSTP_FDP_WorkshopController extends GenericController{
  constructor(){
      super(SSTP_FDP_Workshop,'S_ID');
  }
}


// Industrial_Visits Controller
export class Industrial_VisitsController extends GenericController {
  constructor() {
    super(Industrial_Visits,'S_ID')
  }
}


export class AllUsernamesController extends GenericController {
  constructor() {
    super(AllUsernames,'S_ID')
  }
}

export class EmployeeSaleTablesController extends GenericController {
  constructor() {
    super(EmployeeSaleTables, 'P_ID')
  }
}