import BaseModel from './Generic_model.js';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUploadPath = path.join(__dirname, "..", "Uploads");



// Grants Model
export class Grants extends BaseModel {
  constructor() {
    super('grants', 'S_ID', baseUploadPath)
  }
}

// ConsultancyReport Model
export class ConsultancyReport extends BaseModel {
  constructor() {
    super('consultancy_report', 'S_ID', baseUploadPath)
  }
}


// SSTP_FDP_Workshop Model
export class SSTP_FDP_Workshop extends BaseModel {
  constructor() {
    super('sttp_fdp_conference_attended', 'S_ID', baseUploadPath)
  }
}



//  Extension Activity
export class Extension_Activity extends BaseModel {
  constructor() {
    super('extension_activity', 'S_ID',baseUploadPath)
  }
}


//  Industrial Visit, Tours, Field Trip
export class Industrial_Visits extends BaseModel {
  constructor() {
    super('industrial_fields_tour', 'S_ID', baseUploadPath)
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