const express = require('express')
const router = express.Router();
const UserController = require('../controller/user.controller');
router.get('/login',UserController.showLogin)
router.post('/login',UserController.login)
router.get('/register',UserController.showAddUser)
router.post('/register', UserController.create)
router.get('/secure',UserController.verifyToken,UserController.showsecureroute);
router.get('/create',UserController.addproduct)
router.post('/addproduct',UserController.createProduct)
router.get('/delete/:id',UserController.deleteProduct)
router.get('/get',UserController.getAllProduct)
router.get('/',UserController.usergetAllProduct)
router.get('/addtocart',UserController.addtocart)
router.post('/search',UserController.search)
router.get('/updateproduct/:id', UserController.updateproduct);

router.post('/updateproduct/:id',UserController.saveupdate);
module.exports = router;
