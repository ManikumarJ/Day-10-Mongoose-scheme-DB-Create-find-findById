import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema(
  {
    movieName: { type: String,required: true } ,
    ProducerName: {type: String, required: true},
    DirectorName: { type: String, required: true},
    accterName: {type: String,required: true },
    acctressName: { type: String, required: true},
    MovieType: {type: String},
    movieLanguage: { type: String},
    status: { type: String,default:"Active"},
    RealingDate: {type: Date},
    createdBy: {type: String},
    updatedBy: {type: String}
  },
  { timestamps: true }
);


const movieDataModel = mongoose.model("movieData",movieSchema)

export default movieDataModel;