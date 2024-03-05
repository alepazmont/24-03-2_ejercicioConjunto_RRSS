const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode");

const createUser = async (request, response, next) => {
  try {
    /* const { username, name, lastname, email, birthday, gender, city, users } =
      request.body;
    const user = new User(
      username,
      name,
      lastname,
      email,
      birthday,
      gender,
      city,
      users
    ); */
    const user = new User();
    user.username = request.body.username;
    user.name = request.body.name;
    user.lastname = request.body.lastname;
    user.email = request.body.email;
    user.birthday = request.body.birthday;
    user.gender = request.body.gender;
    user.city = request.body.city;
    user.users = request.body.users;

    const salt = 10;
    console.log(request.body);
    user.password = await bcrypt.hash(request.body.password, salt);

    if (await User.findOne({ username: request.body.username })) {
      return response.status(400).json({
        status: 400,
        message: HTTPSTATUSCODE[400],
        data: user,
      });
    }

    await user.save();
    return response.status(201).json({
      status: 201,
      message: HTTPSTATUSCODE[201],
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const authenticate = async (request, response, next) => {
  try {
    const userInfo = await User.findOne({ username: request.body.username });
    console.log(bcrypt.compareSync(request.body.password, userInfo.password));
    if (bcrypt.compareSync(request.body.password, userInfo.password)) {
      userInfo.password = "not provided";
      const token = jwt.sign(
        {
          id: userInfo._id,
          username: userInfo.username,
        },
        request.app.get("secretKey"),
        { expiresIn: "1d" }
      );

      return response.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        data: { user: userInfo, token: token },
      });
    } else {
      return response.json({
        status: 400,
        message: HTTPSTATUSCODE[400],
        data: null,
      });
    }
  } catch (error) {
    return next(error);
  }
};

const logout = (request, response, next) => {
  try {
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      token: null,
    });
  } catch (error) {
    return next(error);
  }
};

const getUsers = async (request, response, next) => {
  try {
    const users = await User.find();
    response.status(200).json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
  authenticate,
  logout,
  getUsers,
};
