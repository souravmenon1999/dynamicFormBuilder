import Sample from '../models/formModel.js';
import form from '../models/formModel.js';

// Example controller function
export const addForm = async (req, res) => {

  const {name, fields} = req.body;
  const schemaData ={name, fields}

  if ( !name||  !fields ){
   return  res.status(400).json({error: 'check all fields'})
  }

  try {
    const response = await form.create(schemaData);
    return res.status(200).json({message:"form created successfully"});
  } catch (error) {
   return res.status(500).json({ message: 'Server Error' });
  }
};
