const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const Razorpay = require('razorpay');
const {PORT, RAZORPAY_PUBLIC_KEY, RAZORPAY_SECRET_KEY} = process.env;
const ShortId = require("short-unique-id");