const router=require('express').Router();
const db=require('../db');
router.get('/',async(req,res)=>{try{const [rows]=await db.query('SELECT * FROM doctors ORDER BY id');res.json(rows)}catch(e){res.status(500).json({error:e.message})}});
module.exports=router;
