import express from "express"
import Kinfish from "../modal/kinfishModel.js"
const router  = express.Router()

router.get('/' , async(req , res)=>{
    
    try {
        const kinfishs = await Kinfish.find()
        res.json(kinfishs)
       
    }catch(err){
        res.send('Error' + err)
    }

})
router.get('/:id' , async(req , res)=>{
    
    try {
        const kinfish = await Kinfish.findById(req.params.id)
        res.json(kinfish)
        
       
    }catch(err){
        res.send('No user with this id')
    }

})
router.post('/' , async (req, res)=>{
    // res.send(  `New user has been added ${req.body.name}`)
    const kinfish = new Kinfish({
        name:req.body.name,
        tech:req.body.tech,
        subs:req.body.subs

    })
    try {
        const kinfish1 = await kinfish.save()
        res.json(kinfish1)
        return ;

    }catch(err){
        res.send("Error has occured")
    }
    
    


})
router.patch('/:id' ,async(req,res)=>{
    
    try {
    let kinfish = await Kinfish.findById(req.params.id)
    // let {name , tech , subs} = kinfish
    if(req.body.name){
        kinfish.name = req.body.name
    }if(req.body.tech){
        kinfish.tech = req.body.tech
    }if(req.body.subs){
        kinfish.subs = req.body.subs
    }
        const kinfish1 = await kinfish.save()
        res.json(kinfish1)
        
        
    }catch(err){
        res.send("Error has occured")
    }
})

router.delete('/:id' , async(req , res)=>{
    try {
        const kinfish = await Kinfish.findOneAndDelete(req.params.id)
    res.send("User has been deleted successfully") 

    }catch(err){
        res.send("Error has occured")
    }
    
})
export default router