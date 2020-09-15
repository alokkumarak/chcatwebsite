const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const slug = require("slugs");

const novelSchema = new mongoose.Schema({
  title: String,
  slug: String,
})

const chapterSchema = new mongoose.Schema ({
  //foreign key - need to research how to connect to an id in novelSchema - like novelID
  // chaperNumber:
  chapterName: String,
  text: String,
  slug: String,
})

const storiesArticlesSchema = new mongoose.Schema ({
  type: String, //create constants to have a choice wether story, article
  title: String,
  text: String,
  slug: String,
})

module.exports = mongoose.model("Novel", novelSchema);
