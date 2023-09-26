const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

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
    // Handling response if above validation defination does not met
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    } 


    // It will console in the Terminal
    console.log(req.body);
    res.send('User Route');
});

module.exports = router;

