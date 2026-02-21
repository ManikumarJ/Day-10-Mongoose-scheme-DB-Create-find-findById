import userModel from '../controllers/dataControl.js'

export const createData = async (req, res) => {

  try {

    const add = await userModel.create(req.body)

    if(add){
        res.status(201).json({msg:"Successfully Added"})
    }else{

        res.status(404).json({msg:"Soemthing error"})
    }
    
    } 
    catch (error) {
     res.status(404).json({msg:"Soemthing error",error})
    }
};