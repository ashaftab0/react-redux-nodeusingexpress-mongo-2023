const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../../models/User')
const gravatar = require('gravatar');
const bycrypt = require('bcryptjs');

async function savingDataToDatabase(req, res) {
    const { name, email, password } = req.body;
    try {
         //// See if user exists
         let user = await User.findOne({ email });
         if (user) {
            return res.status(400).json({ errors: [{ msg: 'User already exists'}] });
         }
         

        //// Get user gravatar - based on email - to fetch the URL of gravatar
         const avatar = gravatar.url(email, {
            s: '200', // default size
            r: 'pg',  // rating
            d: 'mm'   // default
         })
        // New user Instance
         user = new User({
            name, 
            email, 
            password, 
            avatar
         })

        //// Encrypt password
        const salt = await bycrypt.genSalt(10);
        user.password = await bycrypt.hash(password, salt);

         // Data saved to database
        await user.save();

        //// Return jsonwebtoken - because as soon as User Regsitered, he/she should be LoggedIn state
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server error')
    }
}



// @route    POST api/users
// @desc     Register User
// @access   Public
router.post('/', 
[
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid Email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
],
(req, res) => {
    // Handling response if above validation defination does not met and pushing error object in response
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    } 

    savingDataToDatabase(req, res);
    
    // It will console in the Terminal
    console.log(req.body);
    res.send('User Registered');
});

module.exports = router;

