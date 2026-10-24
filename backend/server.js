const express=require('express');const cors=require('cors');const path=require('path');require('dotenv').config();
const app=express();app.use(cors());app.use(express.json());
app.use('/api/doctors',require('./routes/doctors'));app.use('/api/appointments',require('./routes/appointments'));
app.use(express.static(path.join(__dirname,'../frontend')));
app.get('/api/health',(req,res)=>res.json({status:'MediBook API running'}));
const PORT=process.env.PORT||5000;app.listen(PORT,()=>console.log(`MediBook running: http://localhost:${PORT}`));
