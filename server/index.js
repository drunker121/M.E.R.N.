const express =require('express');
const app = express();

const dotenv = require('dotenv');
dotenv.config({path: './config.env'});

const mongoose = require('mongoose');
const mongodb = require('./mongodb')
mongodb();


