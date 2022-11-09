const Users = require("../models/users.models");
const Address = require("../models/addresses.models");
const Categories = require("../models/categories.models");
const TaskCategories = require("../models/taskcategories.models");
const Tasks = require("../models/tasks.models");
class UserServices{

    static async getAll(){

        try{
          const result=await Users.findAll();
return result;
        }catch(err){
          console.error('err ', err);
        }
    }
static  async getUserById(id){
try{
  const result=await Users.findByPk(id)
return result;
}catch(err){
  console.error('err ', err);
}

}

static async getUserJoinAddres(id) {
  try {
    const result = await Users.findOne({
      where: { id }, // {id: id}
      attributes: ["id", "username"], // incluyo columnas
      include: {
        model: Address,
        as: "home",
        attributes: {
          exclude: ["id", "user_id", "userId"], // excluyo columnas
        },
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
}

static async getUserJoinTasks(id) {
  try {
    const result = await Users.findOne({
      where: { id },
      attributes: ["username"],
      include: {
        model: Tasks,
        as: "todo",
        attributes: ["title", "description", "is_complete"],
        include: {
          model: TaskCategories,
          as: "categories",
          attributes: ["category_id"],
          include: {
            model: Categories,
            as: "categories",
            attributes: ["name"],
          },
        },
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
}
static async getTaskAll(){
try{
const result=await Tasks.findAll();
return result;
}catch(error){
throw error;

}

};
static async getTaskById(id){
try{
const result=await Tasks.findByPk(id);
return result;
}catch(error){
throw error;

}

}
static async postTask(newTask){
try{
const result=await Tasks.bulkCreate(newTask);


return result;
}catch(error){
throw error;


}
}
static async putTask(newTask,id){
try{
  //const id=await Tasks.findByPk(id);
const result=await Tasks.update(newTask,{
  where:{id}})
return result;
}catch(error){
throw error;

}

}
static  async deleteTask(id){
try{
const result=await Tasks.destroy({where:{id}});
return result;
}catch(error){
throw error;

}

}
static  async postUser(newUser){


const result=await Users.build(newUser);
return result;

}
}
module.exports=UserServices;