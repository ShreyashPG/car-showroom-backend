import BaseModel from './Generic_model.js';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUploadPath = path.join(__dirname, "..", "Uploads");



// Grants Model
export class Grants extends BaseModel {
  constructor() {
    super('grants', 'T_ID', baseUploadPath)
  }
}

// ConsultancyReport Model
export class ConsultancyReport extends BaseModel {
  constructor() {
    super('consultancy_report', 'T_ID', baseUploadPath)
  }
}


// SSTP_FDP_Workshop Model
export class SSTP_FDP_Workshop extends BaseModel {
  constructor() {
    super('sttp_fdp_conference_attended', 'T_ID', baseUploadPath)
  }
}



//  Extension Activity
export class Extension_Activity extends BaseModel {
  constructor() {
    super('extension_activity', 'T_ID',baseUploadPath)
  }
}


//  Industrial Visit, Tours, Field Trip
export class Industrial_Visits extends BaseModel {
  constructor() {
    super('industrial_fields_tour', 'T_ID', baseUploadPath)
  }
}

//fetch all usernames 

export class AllUsernames extends BaseModel {
  constructor() {
    super('teacher_login', 'T_ID')
  }
}

// get table names for employee and teahers

export class EmployeeTeacherTables extends BaseModel {
  constructor() {
    super('alltables_stud_fact', 'P_ID')
  }
}