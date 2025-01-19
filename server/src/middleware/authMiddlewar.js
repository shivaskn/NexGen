import jwt from 'jsonwebtoken'
import Company from '../model/company.js'

export const  protectCompany = async (req,res,next) =>{
    const token = req.headers.token

 if(!token){
    return res.json({
        success:false,
        message:"Not authorized, Login Again"
    })
 }

 try {
    const decoded = jwt.verify(token,process.env.JWT_KEY)
    req.company = await Company.findById(decoded.id).select('-password')
    next()
 } catch (error) {
    res.json({
        success:false,
        message:error.message
    })
 }
}