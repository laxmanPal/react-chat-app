const express = require("express");
const router = express.Router();

router.get("/" , (req , res)=>{
    res.send("Server is up and running  on port 4000")
});

module.exports = router;