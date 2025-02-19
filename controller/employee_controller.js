// BookPublications Controller
import GenericController from './Generic_controller.js';
import { 
  EmployeeInternshipDetails, 

  EmployeeCertificateCourses, 
 
  EmployeeEventParticipation, 
  EmployeeEventOrganization, 

  AllUsernames,
} from '../model/employee_model.js';


export class EmployeeInternshipDetailsController extends GenericController {
  constructor() {
    super(EmployeeInternshipDetails,'S_ID');
  }

}



export class EmployeeCertificateCoursesController extends GenericController{
  constructor(){
      super(EmployeeCertificateCourses,'S_ID');
  }
}



export class EmployeeEventParticipationController extends GenericController{
  constructor(){
      super(EmployeeEventParticipation,'S_ID');
  }
}


export class EmployeeEventOrganizationController extends GenericController{
  constructor(){
      super(EmployeeEventOrganization,'S_ID');
  }
}


export class AllUsernamesController extends GenericController {
  constructor() {
    super(AllUsernames,'S_ID')
  }
}