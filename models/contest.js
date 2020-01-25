 var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
	username: {type: String, unique : true, required: true},

	name:{type:String,required:true},

	count: Number,

});
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Contest", UserSchema);