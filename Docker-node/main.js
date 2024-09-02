import express from 'express'; 
const app = express()// Express application
const PORT = process.env.PORT || 8000  // port nahi doge to by default ye 8000 pe run hoga
app.get('/',(req,res)=>{
    return res.json({message :"Hey , I am nodeJs in container Jay Ganesh "});
});//home route 

app.listen(PORT, ()=> console.log(`Server started on PORT : ${PORT}`))