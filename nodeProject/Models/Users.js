import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true    
    },
    age: {
        type: Number,
        requiredP: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

export default mongoose.model('user', userSchema)