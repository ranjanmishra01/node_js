const express = require('express');
const router = express.Router();

const { handleGetAllUsers,
getUserById, 
patchUserById,
deleteUserById, 
createPost} = require("../controllers/car");



router.route("/")
.get(handleGetAllUsers)
.post(createPost);

router.route("/:id")
.get(getUserById)
.patch(patchUserById)
.delete(deleteUserById);

module.exports = router;