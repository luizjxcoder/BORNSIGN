const express = require("express");
const path = require("path");
const cors = require("cors");
const { escape } = require("querystring");
const pot = 5000;

const app = exress()

// config JSON and  forma data response
app.use(express.json())
app.use(express.urlencoded({extend: false}))

