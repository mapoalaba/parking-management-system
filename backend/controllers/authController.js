// 사용자 인증 관련 요청을 처리합니다 (로그인, 회원가입 등).
const express = require('express');
const { check, validationResult } = require('express-validator');
const User = require('../models/userModel');
const router = express.Router();

// @route   POST api/auth/check-username
// @desc    Check if username is already taken
// @access  Public
router.post(
  '/check-username',
  [
    check('username', 'Username is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username } = req.body;

    try {
      let user = await User.findOne({ username });
      if (user) {
        return res.json({ exists: true });
      } else {
        return res.json({ exists: false });
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ errors: [{ msg: 'Server error' }] });
    }
  }
);

module.exports = router;
