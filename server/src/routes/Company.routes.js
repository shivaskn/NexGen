import express from 'express'
import { changeJobApplicationStatus, changeVisiblity, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controller/company.controller.js'
import upload from '../middleware/multer.js'
import { protectCompany } from '../middleware/authMiddlewar.js'
const router = express.Router()

router.post('/register',upload.single('image'),registerCompany)
router.post('/login',loginCompany)
router.get('/company',protectCompany,getCompanyData)
router.post('/post-job',protectCompany,postJob)
router.get('/applicants',protectCompany,getCompanyJobApplicants)
router.get('/list-jobs',protectCompany,getCompanyPostedJobs)
router.post('/change-status',protectCompany,changeJobApplicationStatus)
router.post('/change-visibility',protectCompany,changeVisiblity)

export default router