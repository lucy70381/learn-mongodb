const express = require('express');
const router = express.Router();
const User = require('../models/user');

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const allUser = await User.find();
  res.status(200).json({
    status: 'success',
    data: allUser,
  });
});

router.delete('/', async (req, res, next) => {
  await User.deleteMany({});
  res.status(200).json({
    status: 'success',
    data: '',
  });
});

router.post('/', async (req, res, next) => {
  try {
    const data = req.body;
    let { nickName, gender, avatar } = data;
    if (!nickName || !gender) {
      // 回傳失敗
      res.status(400).json({ status: 'fail', message: '使用者資料未填寫完整' });
    } else {
      // 新增至 User model
      const newUser = await User.create({
        nickName,
        gender,
        avatar,
      });
      // 回傳成功
      res.status(200).json({ status: 'success', data: newUser });
    }
  } catch (error) {
    // 回傳失敗
    res.status(400).json({ status: 'fail', message: error.message });
  }
});

// 修改
router.patch('/:id', async (req, res, next) => {
  try {
    // 取得 id
    const { id } = req.params;
    const data = req.body;
    let { nickName, gender, avatar } = data;
    if (!nickName || !gender) {
      // 回傳失敗 "使用者資料未填寫完整"
      res
        .status(400)
        .json(
          { status: 'fail', message: '使用者資料未填寫完整' },
          { new: true }
        );
    } else {
      const editContent = {
        nickName,
        gender,
      };
      // 找出此筆 id 並編輯資料
      const editUser = await User.findByIdAndUpdate(id, editContent);

      if (editUser) {
        // 回傳成功
        res.status(200).json({ status: 'success', data: editUser });
      } else {
        // 回傳失敗 "id 不存在"
        res.status(400).json({ status: 'fail', message: 'id 不存在' });
      }
    }
  } catch (error) {
    // 回傳失敗
    res.status(400).json({ status: 'fail', message: error.message });
  }
});

module.exports = router;
