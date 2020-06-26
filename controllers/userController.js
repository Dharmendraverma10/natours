const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    results: users.length,
    data: {
      users,
    },
  });
});

exports.getUser = (req, res, next) => {
  res.status(500).json({
    status: 'error',
    data: {
      message: 'Implemented Further',
    },
  });
};

exports.createUser = (req, res, next) => {
  res.status(500).json({
    status: 'error',
    data: {
      message: 'Implemented Further',
    },
  });
};

exports.updateUser = (req, res, next) => {
  res.status(500).json({
    status: 'error',
    data: {
      message: 'Implemented Further',
    },
  });
};

exports.deleteUser = (req, res, next) => {
  res.status(500).json({
    status: 'error',
    data: {
      message: 'Implemented Further',
    },
  });
};
