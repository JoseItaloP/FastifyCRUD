const {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/usersController");

//USER SCHEMA
const UsersS = {
  type: "object",
  propeties: {
    name: { type: "string" },
    id: { type: "number" },
  },
};

//ROUTE OPTIONS
const getAllOpt = {
  schema: {
    response: {
      200: {
        type: "array",
        usersList: UsersS,
      },
    },
  },
  handler: getUsers,
};

const getSingleOpt = {
  schema: {
    response: {
      200: { user: UsersS },
    },
    404: {
      type: "object",
      message: { type: "string" },
    },
  },
  handler: getUser,
};

const postCreateOpt = {
  schema: {
    body: {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string" },
      },
    },
    response: {
      201: { newUser: UsersS },
    },
  },
  handler: createUser,
};

const putEditOpt = {
  schema: {
    response: {
      200: { updatedUser: UsersS },
    },
  },
  handler: updateUser,
};

const deletelOpt = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
  handler: deleteUser,
};

const usersRoute = (fastify, options, done) => {
  //GET ALL USERS
  fastify.get("/users", getAllOpt);

  //GET SINGE USER
  fastify.get("/users/:id", getSingleOpt);

  //POST CREATE USER
  fastify.post("/users", postCreateOpt);

  //PUT EDIT USER
  fastify.put("/users/:id", putEditOpt);

  //DELETE USER
  fastify.delete("/users/:id", deletelOpt);

  done();
};

module.exports = usersRoute;
