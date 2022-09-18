import mongoose from 'mongoose';

const postSchema = mongoose.Schema( //DESCRIBING HOW EACH POST WILL BE
    {
    name: String,
    creator: String,
    title: String,
    message: String,
    tags: [String],
    selectedFile: String,
    likes:{
        type: [String],
        default: [],
    },

    createdAt:{
       type:Date,
       default: new Date()
    },
   }
);

//BELOW WE TURN THE SCHEMA INTO A MODEL

const PostMessage = mongoose.model('PostMessage', postSchema);



export default PostMessage;