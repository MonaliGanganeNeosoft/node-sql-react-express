const dialogflow = require("@google-cloud/dialogflow");
const uuid = require("uuid");
const EntityClient = new dialogflow.EntityTypesClient({
  keyFilename:
    "C:/Users/Neosoft/Desktop/pulkit-bot/dabadu-bot-wtnu-7c7756bc6906.json",
});
const intentClient = new dialogflow.IntentsClient({
  keyFilename:
    "C:/Users/Neosoft/Desktop/pulkit-bot/dabadu-bot-wtnu-7c7756bc6906.json",
});
// const CreateEntity = async (req, res) => {
//   const { displayName, entities } = req.body;
//   console.log(req.body);
//   const projectId = process.env.NODE_PRODUCTID;
//   console.log(projectId);
//   try {
//     const agentPath = EntityClient.projectAgentPath(projectId);
//     // const entites = {
//     //   displayName: "vehicletype",
//     //   kind: "KIND_MAP",
//     //   entities: [
//     //     { value: "two-wheeler" },
//     //     { value: "two-wheeler", synonyms: ["twowheeler", "two", "2"] },
//     //     { value: "four-wheeler" },
//     //     { value: "four-wheeler", synonyms: ["fourwheeler", "four", "4"] },
//     //   ],
//     // };

//     const entites = {
//       displayName: displayName,
//       kind: "KIND_MAP",
//       entities: entities,
//     };

//     const request = {
//       parent: agentPath,
//       entityType: entites,
//     };
//     // const [operation] = await EntityClient.createEntityType(request);
//     // const [response] = await operation.promise();
//     const response = await EntityClient.createEntityType(request);
//     return res.send(response);
//   } catch (err) {
//     console.log("inside err");
//     console.log(err);
//     return res.send(err);
//   }
// };

const CreateEntity = async (req, res) => {
  const projectId = process.env.NODE_PRODUCTID;
  console.log(req.body);
  const { displayName, entities } = req.body;
  console.log(req.body);
  try {
    const agentPath = EntityClient.projectAgentPath(projectId);
    const entites = {
      displayName: displayName,
      kind: "KIND_MAP",
      entities: entities /*  [
              { value: 'Red' },
              { value: 'Gray', synonyms: ['white'] },
              { value: 'Black' },
          ], */,
    };
    const request = {
      parent: agentPath,
      entityType: entites,
    };
    const [response] = await EntityClient.createEntityType(request);
    return res.send(response);
  } catch (err) {
    console.log("inside err");
    console.log(err);
    return res.send(err);
  }
};

const listEntityTypesAsync = async (req, res) => {
  async function callListEntityTypes() {
    const { EntityTypesClient } = require("@google-cloud/dialogflow").v2;
    const dialogflowClient = new EntityTypesClient({
      keyFilename:
        "C:/Users/Neosoft/Desktop/pulkit-bot/dabadu-bot-wtnu-7c7756bc6906.json",
    });
    const projectId = process.env.NODE_PRODUCTID;
    const agentPath = EntityClient.projectAgentPath(projectId);
    // Construct request
    const request = {
      parent: agentPath,
    };

    // Run request
    const iterable = await dialogflowClient.listEntityTypesAsync(request);
    for await (const response of iterable) {
      console.log(response);
      res.send(response);
    }
  }

  callListEntityTypes();
};
const checkBatchDeleteEntitiesProgress = async (req, res) => {
  // Imports the Dialogflow library
  const { EntityTypesClient } = require("@google-cloud/dialogflow").v2;

  // Instantiates a client
  const dialogflowClient = new EntityTypesClient();

  async function callBatchDeleteEntities() {
    const { EntityTypesClient } = require("@google-cloud/dialogflow").v2;
    const dialogflowClient = new EntityTypesClient({
      keyFilename:
        "C:/Users/Neosoft/Desktop/pulkit-bot/dabadu-bot-wtnu-7c7756bc6906.json",
    });
    const projectId = process.env.NODE_PRODUCTID;
    const agentPath = EntityClient.projectAgentPath(projectId);
    // Construct request
    const request = {
      parent: agentPath,
      entityValues: req.body.entityValues,
    };

    // Run request
    const [operation] = await dialogflowClient.batchDeleteEntities(request);
    const [response] = await operation.promise();
    console.log(response);
    res.send(response);
  }

  callBatchDeleteEntities();
};
module.exports = {
  CreateEntity,
  listEntityTypesAsync,
  checkBatchDeleteEntitiesProgress,
};
