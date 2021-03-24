const User = require("../models/user");
const bcrypt = require("bcrypt");
const { promisify } = require("util");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const DBError = require("../utils/DBError");

const secret = process.env.SECRET;
const jwtExpiration = process.env.EXPIRATION;
const nodeEnv = process.env.NODE_ENV;
//tools
const encryptPw = async (password) => {
  return await bcrypt.hash(password, 12);
};
const sendToken = (user, statusCode, req, res) => {
  const token = user.signJwt();
  const options = {
    expires: new Date(Date.now() + jwtExpiration),
    secure: nodeEnv === "production",
    httpOnly: nodeEnv === "production",
  };

  res.cookie("jwt", token, options);
  res.header("x-auth-header", token);
  user.password = undefined;
  res.status(statusCode).json({
    status: "success",
    token,
    user,
  });
};

const decryptJwt = async (token) => {
  const jwtVerify = promisify(jwt.verify);
  return await jwtVerify(token, secret);
};

//requests

exports.signup = async (req, res) => {
  const { name, email, password, clearance } = req.body;
  try {
    const pw = await encryptPw(password);

    const newUser = await User.create({
      name,
      email,
      password: pw,
      clearance,
    });
  //  sendToken(newUser, 201, req, res);
  } catch (error) {
    let errorHandled = error;
    if (error.name === "MongoError") errorHandled = DBError(error);

    res.status(400).json({ message: errorHandled.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).select("+password");
    const compare = await bcrypt.compare(password, user.password);
    compare
      ? sendToken(user, 200, req, res)
      : res.status(400).json({ message: "login failed" });
  } catch (error) {
    if (error.name === "MongoError") error = DBError(error);
    res.status(400).json({ error: error.message });
  }
};

exports.logout = async (req, res) => {
  const options = {
    expires: new Date(Date.now() + 1000),
    secure: nodeEnv === "production",
    httpOnly: nodeEnv === "production",
  };
  res.header("x-auth-header", "expiredtoken");
  res.cookie("jwt", "expiredtoken", options);
  res.status(200).json({ status: "success", message: "user logged out" });
};

exports.secure = async (req, res, next) => {
  let token = req.header("x-auth-header");
  if (req.cookies) token = req.cookies.jwt;
  if (!token || token === "expiredtoken")
    return res
      .status(401)
      .json({ status: "unauthorized", message: "You are not authorized" });

  const jwtInfo = await decryptJwt(token);
  const user = await User.findById(jwtInfo.id);
  if (!user)
    return res
      .status(401)
      .json({ status: "unauthorized", message: "You are not authorized" });

  req.user = user;
  console.log("user authorized");
  next();
};

exports.isAdmin = async (req, res, next) => {
  const clearance = req.user.clearance;
  if (clearance !== "admin") {
    return res
      .status(403)
      .json({ message: "You do not have the required authority level" });
  } else {
    next();
  }
};

exports.secretContent = async (req, res) => {
  const user = req.user;
  return res.status(200).json({
    status: "Secret content shown",
    userInfo: user,
  });
};

exports.clearanceLevel = (...clearanceLevel) => {
  return (req, res, next) => {
    clearanceLevel.includes(req.user.clearance)
      ? next()
      : res.status(401).json({
          status: "unauthorized",
          message: "Not a available at your current clearance  level",
        });
  };
};

exports.blackList = (...inputs) => {
  return (req, res, next) => {
    const { body } = req;
    console.log(body);
    let bodyProps;
    for (let prop in inputs) {
      bodyProps = inputs[prop];
      if (body[bodyProps]) delete body[bodyProps];
    }
    console.log(req.body);
    next();
  };
};
