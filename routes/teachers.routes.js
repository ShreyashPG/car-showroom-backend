import express from 'express';
import multer from 'multer';

const router = express.Router();
const upload = multer();

import {

    GrantsController,
    ConsultancyReportController,

    SSTP_FDP_WorkshopController,

    Industrial_VisitsController,

    AllUsernamesController,
    EmployeeTeacherTablesController
} from '../controller/teachers.controller.js';



// Grants Routes
const controller4 = new GrantsController();
router.get("/grants/all", controller4.getAll);
router.get("/grants/:username", controller4.getByUsername);
router.post("/grants/create-new", controller4.create);
router.delete("/grants/remove", controller4.deleteByUsername);
router.put("/grants/update", controller4.updateByUsername);
router.post("/grants/filter", controller4.filterData);
// router.post("/grants/allcols", controller4.getAllColumns); //get names of all columns
// router.post("/grants/get-filter-cols", controller4.getFilteringColumns) // get names of filtering columns
// router.post("/grants/get-distinct-vals", controller4.getDistinctValues) // get the distinct values from filtering cols
router.post("/grants/get-distinct-cols-vals", controller4.getFilteringColumnsWithDistinctValues);  //get distinct values from filter cols
router.post("/grants/upload-file", upload.array('files'), controller4.uploadFile);

// ConsultancyReport Routes
const controller5 = new ConsultancyReportController();
router.get("/cons-rep/all", controller5.getAll);
router.get("/cons-rep/:username", controller5.getByUsername);
router.post("/cons-rep/create-new", controller5.create);
router.delete("/cons-rep/remove", controller5.deleteByUsername);
router.put("/cons-rep/update", controller5.updateByUsername);
router.post("/cons-rep/filter", controller5.filterData);
// router.post("/cons-rep/allcols", controller5.getAllColumns); //get names of all columns
// router.post("/cons-rep/get-filter-cols", controller5.getFilteringColumns) // get names of filtering columns
// router.post("/cons-rep/get-distinct-vals", controller5.getDistinctValues) // get the distinct values from filtering cols
router.post("/cons-rep/get-distinct-cols-vals", controller5.getFilteringColumnsWithDistinctValues);  //get distinct values from filter cols
router.post("/cons-rep/upload-file", upload.array('files'), controller5.uploadFile);



// SSTP_FDP_Workshop Routes
const controller8 = new SSTP_FDP_WorkshopController();
router.get("/sf-ws/all", controller8.getAll);
router.get("/sf-ws/:username", controller8.getByUsername);
router.post("/sf-ws/create-new", controller8.create);
router.delete("/sf-ws/remove", controller8.deleteByUsername);
router.put("/sf-ws/update", controller8.updateByUsername);
router.post("/sf-ws/filter", controller8.filterData);
// router.post("/sf-ws/allcols", controller8.getAllColumns); //get names of all columns
// router.post("/sf-ws/get-filter-cols", controller8.getFilteringColumns) // get names of filtering columns
// router.post("/sf-ws/get-distinct-vals", controller8.getDistinctValues) // get the distinct values from filtering cols
router.post("/sf-ws/get-distinct-cols-vals", controller8.getFilteringColumnsWithDistinctValues);  //get distinct values from filter cols
router.post("/sf-ws/upload-file", upload.array('files'), controller8.uploadFile);



// Industrial_Visits Routes
const controller17 = new Industrial_VisitsController();
router.get("/visit-tours/all", controller17.getAll);
router.get("/visit-tours/:username", controller17.getByUsername);
router.post("/visit-tours/create-new", controller17.create);
router.delete("/visit-tours/remove", controller17.deleteByUsername);
router.put("/visit-tours/update", controller17.updateByUsername);
router.post("/visit-tours/filter", controller17.filterData);
// router.post("/visit-tours/allcols", controller17.getAllColumns); //get names of all columns
// router.post("/visit-tours/get-filter-cols", controller17.getFilteringColumns) // get names of filtering columns
// router.post("/visit-tours/get-distinct-vals", controller17.getDistinctValues) // get the distinct values from filtering cols
router.post("/visit-tours/get-distinct-cols-vals", controller17.getFilteringColumnsWithDistinctValues);  //get distinct values from filter cols
router.post("/visit-tours/upload-file", upload.array('files'), controller17.uploadFile);


const controller19 = new AllUsernamesController();

router.get("/getUsernames/usernames", controller19.getAllUsers)

const controller20 = new EmployeeTeacherTablesController();

router.get("/gettables/tables-stud-fact", controller20.getTableNamesST);

export default router;