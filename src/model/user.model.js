const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto')
const UserSchema = new Schema({
 username: {
  type: String,
  trim: true,
  unique: true,
  match: [/.+\@.+\..+/, 'Please fill a valid username'],
  required: 'username is mandatory'
 },
 role: {
  type: String,
  default: 'user',
  enum: ["user","admin"]
 },
 hashed_password: {
  type: String,
  required: 'Password is mandatory'
 },
 salt: String,
 updated: Date,
 created: {
  type: Date,
  default: Date.now
 }
})
UserSchema
 .virtual('password') //set virtual property pwd
 .set(function(password){
  this._password = password //this field is not stored in DB
  this.salt = this.makeSalt()
  this.hashed_password = this.encryptPassword(password)
 })
 .get(function (){
  return this._password
 })
UserSchema.methods = {
 authenticate: function(plainText){
  return this.encryptPassword(plainText) === this.hashed_password
 },
 encryptPassword: function(password){
  if(!password) return ''
  try{
   return crypto
    .createHmac('sha1',this.salt)
    .update(password)
    .digest('hex')
  }catch(err){
   return ''
  }
 },
 makeSalt: function(){
  return Math.round((new Date().valueOf() * Math.random())) + ''
 }
}
var User = mongoose.model('User',UserSchema)
module.exports = User;