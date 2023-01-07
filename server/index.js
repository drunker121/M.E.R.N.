const express =require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

const PORT = process.env.PORT;

const mongoose = require('mongoose');
const mongodb = require('./mongodb')
mongodb();


