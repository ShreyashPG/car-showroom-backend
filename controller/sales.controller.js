// BookPublications Controller
import GenericController from './Generic_controller.js';

import { 

  MonthlySales, 
  StockReport, 
 
  Profit_Loss_Report,

  Lead_Conversions,
  
  AllUsernames,
  EmployeeSaleTables,

} from '../model/sales.model.js';



// MonthlySales Controller
export class MonthlySalesController extends GenericController{
  constructor(){
      super(MonthlySales,'S_ID');
  }
}

// StockReport Controller
export class StockReportController extends GenericController{
  constructor(){
      super(StockReport,'S_ID');
  }
}




// Profit_Loss_Report Controller
export class Profit_Loss_ReportController extends GenericController{
  constructor(){
      super(Profit_Loss_Report,'S_ID');
  }
}


// Lead_Conversions Controller
export class Lead_ConversionsController extends GenericController {
  constructor() {
    super(Lead_Conversions,'S_ID')
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