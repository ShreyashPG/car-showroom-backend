import BaseModel from './Generic_model.js';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUploadPath = path.join(__dirname, "..", "Uploads");


export class EmployeeInternshipDetails extends BaseModel {
  constructor(){
    super('employee_internship_details','S_ID', baseUploadPath)
  }
}

// Grants Model
export class EmployeeCertificateCourses extends BaseModel {
  constructor() {
    super('employee_certificate_course', 'S_ID', baseUploadPath)
  }
}

// Event Participated
export class EmployeeEventParticipation extends BaseModel {
  constructor() {
    super('employee_event_participated', 'S_ID', baseUploadPath)
  }
}

// Event Organized
export class EmployeeEventOrganization extends BaseModel {
  constructor() {
    super('employee_event_organized', 'S_ID', baseUploadPath)
  }
}


//fetch all usernames 

export class AllUsernames extends BaseModel {
  constructor() {
    super('login_details', 'S_ID')
  }
}