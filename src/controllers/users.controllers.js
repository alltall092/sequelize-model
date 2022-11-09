const UserServices=require('../Services/users.services');
const getAllUsers=async(req,res)=>{
try{
const result=await UserServices.getAll();
res.status(200).json(result);

}catch(error){
console.log(error);
}


};
const getById=async(req,res)=>{
try{
const {id}=req.params;
const result=await UserServices.getUserById(id);
res.status(200).json(result);
}
catch(error){
console.log(error)

}


}

const getUserWithAddres = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await UserServices.getUserJoinAddres(id);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  };
  
  const getUserWithTasks = async (req, res) => {
    try {
      const { id } = req.params;
      const result = await UserServices.getUserJoinTasks(id);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllTasks=async(req,res)=>{
  try{
const result=await UserServices.getTaskAll();
res.status(200).json(result);
res.end();

  } catch (error) {
    console.log(error);
  }
  res.end();
  }
  const getTasksById=async(req,res)=>{
try{
const {id}=req.params;
const result=await UserServices.getTaskById(id);
res.json(result);

} catch (error) {
  console.log(error);
}

  }
const postTasks=async(req,res)=>{
try {
  
    const newTask=req.body;
  
  const result=await UserServices.postTask(newTask);
  res.status(201).json(result);

} catch (error) {
  console.log(error);
}

}
const updateTask=async(req,res)=>{
try{
  const { id }=req.params;
    const newTask=req.body;
 
const result=await UserServices.putTask(newTask,id);
res.status(201).json(result);

}catch(error){
console.log(error);

}


}
const deleteTasks=async(req,res)=>{
try{ 
  const {id }=req.params;
const result=await UserServices.deleteTask(id);
res.status(200).json(result);


}catch (error) {console.log(error)}


}
const postsUser=async(req,res)=>{

try{
  
const newUser=req.body;
 const result=await UserServices.postUser(newUser);
  res.status(201).json(result);
  
}
catch(error){
  console.log(error)}

}
module.exports={getAllUsers,
    getUserWithAddres,
    getUserWithTasks,
  getById,
getAllTasks,
getTasksById,
postTasks,
updateTask,
deleteTasks,
postsUser

}