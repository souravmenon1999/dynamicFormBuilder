import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
    
      startDate: {
        type: Date,
        required:true,
      },
    
      endDate: {
        type: Date,
        required: true,
      },
    
      formId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'form', 
      }
});

const event = mongoose.model('Sample', eventSchema);

export default event;
