import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const ActorSchema = new Schema(
  {
    profile_path: { Type: String },
    adult: { type: Boolean },
    id: { type: Number, required: true, unique: true },
  //   known_for: [{
  //     poster_path: { type: String },
  //     adult: { type: Boolean },
  //     overview: { type: String },
  //     release_date: { type: String },
  //     original_title: { type: String },
  //     genre_ids: [{ type: Number }],
  //     id: { type: Number, required: true, unique: true },
  //     media_type: { type: String },
  //     original_language: { type: String },
  //     title: { type: String },
  //     backdrop_path: { type: String },
  //     popularity: { type: Number },
  //     vote_count: { type: Number },
  //     video: { type: Boolean },
  //     vote_average: { type: Number }
  // } || {
  //   poster_path: { type: String },
  //   popularity: { type: Number },
  //   id: { type: Number, required: true, unique: true },
  //   overview: { type: String },
  //   backdrop_path: { type: String },
  //   vote_average: { type: Number },
  //   media_type: { type: String },
  //   first_air_date:{ type: String },
  //   origin_country: [{ type: String }],
  //   genre_ids: [{ type: Number }],
  //   original_language: { type: String },
  //   vote_count: { type: Number },
  //   name: { type: String },
  //   original_name: { type: String },
  // } ],
  name: { type: String },
  popularity: { type: Number }
  }
);

ActorSchema.statics.findByActorDBId = function (id) {
  return this.findOne({ id: id });
};

export default mongoose.model('Actors', ActorSchema);


