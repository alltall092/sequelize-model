const express=require('express');

const {getAllUsers,getAllTasks,getTasksById,postTasks, updateTask,postsUser,deleteTasks}=require('../controllers/users.controllers');
const router=express.Router();


router.get('/user',getAllUsers);
router.post('/user',postsUser);
router.get('/tasks',getAllTasks);
router.get('/tasks/:id',getTasksById);
router.post('/tasks',postTasks);
router.put('/tasks/:id',updateTask);
router.delete('/tasks/:id',deleteTasks);
module.exports=router;