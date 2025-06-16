import express from 'express';
import multer from 'multer';

 const router = express.Router();
const upload = multer();

import {

    MonthlySalesController,
    StockReportController,

    Profit_Loss_ReportController,

    Lead_ConversionsController,

    AllUsernamesController,
    EmployeeSaleTablesController
} from '../controller/sales.controller.js';



// MonthlySales Routes
const controller4 = new MonthlySalesController();
router.get("/monthlySales/all", controller4.getAll);
router.get("/monthlySales/:username", controller4.getByUsername);
router.post("/monthlySales/create-new", controller4.create);
router.delete("/monthlySales/remove", controller4.deleteByUsername);
router.put("/monthlySales/update", controller4.updateByUsername);
router.post("/monthlySales/filter", controller4.filterData);
// router.post("/monthlySales/allcols", controller4.getAllColumns); //get names of all columns
// router.post("/monthlySales/get-filter-cols", controller4.getFilteringColumns) // get names of filtering columns
// router.post("/monthlySales/get-distinct-vals", controller4.getDistinctValues) // get the distinct values from filtering cols
router.post("/monthlySales/get-distinct-cols-vals", controller4.getFilteringColumnsWithDistinctValues);  //get distinct values from filter cols
router.post("/monthlySales/upload-file", upload.array('files'), controller4.uploadFile);

// StockReport Routes
const controller5 = new StockReportController();
router.get("/stock-report/all", controller5.getAll);
router.get("/stock-report/:username", controller5.getByUsername);
router.post("/stock-report/create-new", controller5.create);
router.delete("/stock-report/remove", controller5.deleteByUsername);
router.put("/stock-report/update", controller5.updateByUsername);
router.post("/stock-report/filter", controller5.filterData);
// router.post("/stock-report/allcols", controller5.getAllColumns); //get names of all columns
// router.post("/stock-report/get-filter-cols", controller5.getFilteringColumns) // get names of filtering columns
// router.post("/stock-report/get-distinct-vals", controller5.getDistinctValues) // get the distinct values from filtering cols
router.post("/stock-report/get-distinct-cols-vals", controller5.getFilteringColumnsWithDistinctValues);  //get distinct values from filter cols
router.post("/stock-report/upload-file", upload.array('files'), controller5.uploadFile);



// Profit_Loss_Report Routes
const controller8 = new Profit_Loss_ReportController();
router.get("/profit-loss/all", controller8.getAll);
router.get("/profit-loss/:username", controller8.getByUsername);
router.post("/profit-loss/create-new", controller8.create);
router.delete("/profit-loss/remove", controller8.deleteByUsername);
router.put("/profit-loss/update", controller8.updateByUsername);
router.post("/profit-loss/filter", controller8.filterData);
// router.post("/profit-loss/allcols", controller8.getAllColumns); //get names of all columns
// router.post("/profit-loss/get-filter-cols", controller8.getFilteringColumns) // get names of filtering columns
// router.post("/profit-loss/get-distinct-vals", controller8.getDistinctValues) // get the distinct values from filtering cols
router.post("/profit-loss/get-distinct-cols-vals", controller8.getFilteringColumnsWithDistinctValues);  //get distinct values from filter cols
router.post("/profit-loss/upload-file", upload.array('files'), controller8.uploadFile);



// Lead_Conversions Routes
const controller17 = new Lead_ConversionsController();
router.get("/lead-conversions/all", controller17.getAll);
router.get("/lead-conversions/:username", controller17.getByUsername);
router.post("/lead-conversions/create-new", controller17.create);
router.delete("/lead-conversions/remove", controller17.deleteByUsername);
router.put("/lead-conversions/update", controller17.updateByUsername);
router.post("/lead-conversions/filter", controller17.filterData);
// router.post("/lead-conversions/allcols", controller17.getAllColumns); //get names of all columns
// router.post("/lead-conversions/get-filter-cols", controller17.getFilteringColumns) // get names of filtering columns
// router.post("/lead-conversions/get-distinct-vals", controller17.getDistinctValues) // get the distinct values from filtering cols
router.post("/lead-conversions/get-distinct-cols-vals", controller17.getFilteringColumnsWithDistinctValues);  //get distinct values from filter cols
router.post("/lead-conversions/upload-file", upload.array('files'), controller17.uploadFile);


const controller19 = new AllUsernamesController();

router.get("/getUsernames/usernames", controller19.getAllUsers)

const controller20 = new EmployeeSaleTablesController();

router.get("/gettables/tables-stud-fact", controller20.getTableNamesST);

export default router;