import BaseModel from './Generic_model.js';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUploadPath = path.join(__dirname, "..", "Uploads");



// MonthlySales Model
export class MonthlySales extends BaseModel {
  constructor() {
    super('monthlySales', 'S_ID', baseUploadPath)
  }
}

// StockReport Model
export class StockReport extends BaseModel {
  constructor() {
    super('stock_report', 'S_ID', baseUploadPath)
  }
}


// Profit_Loss_Report Model
export class Profit_Loss_Report extends BaseModel {
  constructor() {
    super('profit_loss_report', 'S_ID', baseUploadPath)
  }
}



//  Extension Activity
export class Extension_Activity extends BaseModel {
  constructor() {
    super('extension_activity', 'S_ID',baseUploadPath)
  }
}


//  Lead Conversions
export class Lead_Conversions extends BaseModel {
  constructor() {
    super('lead_conversions', 'S_ID', baseUploadPath)
  }
}

//fetch all usernames 

export class AllUsernames extends BaseModel {
  constructor() {
    super('sale_login', 'S_ID')
  }
}

// get table names for employee and teahers

export class EmployeeSaleTables extends BaseModel {
  constructor() {
    super('alltables_stud_fact', 'P_ID')
  }
}