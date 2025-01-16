import express from 'express';
import multer from 'multer';

const upload = multer();
const router = express.Router();

import {
    EmployeeInternshipDetailsController,

    EmployeeCertificateCoursesController,

    EmployeeEventParticipationController,
    EmployeeEventOrganizationController,
 
    AllUsernamesController,
} from '../controller/employee_controller.js';


const controller1 = new EmployeeInternshipDetailsController();
router.get("/internship-details/all", controller1.getAll);
router.get("/internship-details/:username", controller1.getByUsername);
router.post("/internship-details/create-new", controller1.create);
router.delete("/internship-details/remove", controller1.deleteByUsername);
router.put("/internship-details/update", controller1.updateByUsername);
router.post("/internship-details/filter", controller1.filterData); //added filter data route for all tables
router.post("/internship-details/upload-file", upload.array('files'), controller1.uploadFile);

const controller4 = new EmployeeCertificateCoursesController();
router.get("/certificate-courses/all", controller4.getAll);
router.get("/certificate-courses/:username", controller4.getByUsername);
router.post("/certificate-courses/create-new", controller4.create);
router.delete("/certificate-courses/remove", controller4.deleteByUsername);
router.put("/certificate-courses/update", controller4.updateByUsername);
router.post("/certificate-courses/filter", controller4.filterData);
router.post("/certificate-courses/upload-file", upload.array('files'), controller4.uploadFile);



const controller6 = new EmployeeEventParticipationController();
router.get("/event-participation/all", controller6.getAll);
router.get("/event-participation/:username", controller6.getByUsername);
router.post("/event-participation/create-new", controller6.create);
router.delete("/event-participation/remove", controller6.deleteByUsername);
router.put("/event-participation/update", controller6.updateByUsername);
router.post("/event-participation/filter", controller6.filterData);
router.post("/event-participation/upload-file", upload.array('files'), controller6.uploadFile);


const controller7 = new EmployeeEventOrganizationController();
router.get("/event-org/all", controller7.getAll);
router.get("/event-org/:username", controller7.getByUsername);
router.post("/event-org/create-new", controller7.create);
router.delete("/event-org/remove", controller7.deleteByUsername);
router.put("/event-org/update", controller7.updateByUsername);
router.post("/event-org/filter", controller7.filterData);
router.post("/event-org/upload-file", upload.array('files'), controller7.uploadFile);




const controller10 = new AllUsernamesController();
router.get("/getUsernames/usernames", controller10.getAllUsers)

export default router;