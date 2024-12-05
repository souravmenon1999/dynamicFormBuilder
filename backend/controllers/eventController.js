
import mongoose from 'mongoose';
import event from '../models/eventModel.js';
import form from '../models/formModel.js'

// Example controller function
export const addEvent = async (req, res) => {

  const {name, startDate, endDate, formID} = req.body;
  

  if ( !name||  !startDate ||  !endDate || !formID ){
   return res.status(400).json({error: 'check all fields'})
  }

  const ObjectId = mongoose.Types.ObjectId;
  const formId = new ObjectId(formID);

const schemaData ={name, startDate, endDate, formId}

  

  try {
    const checkFormID = await form.findById(formId);
    if(!checkFormID) return res.status(300).json({message: "invalid formID"})

  } catch (error) {

    return res.status(300).json({message: "invalid id"})
    
  }

 
  try {
    const response = await event.create(schemaData);
    return res.status(200).json({message:"event created successfully"});
  } catch (error) {
    return res.status(500).json({ message: 'Server Error' });
  }
};
