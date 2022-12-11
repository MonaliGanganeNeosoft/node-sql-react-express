const dialogflow = require("@google-cloud/dialogflow");
const uuid = require("uuid");

require("dotenv").config();

const Connect_Dialog = async (req, res) => {
  try {
    const sessionId = uuid.v4();

    const sessionClient = new dialogflow.SessionsClient({
      keyFilename:
        "C:/Users/Neosoft/Desktop/pulkit-bot/dabadu-bot-wtnu-7c7756bc6906.json",
    });
    const sessionPath = sessionClient.projectAgentSessionPath(
      (projectId = process.env.NODE_PRODUCTID),
      sessionId
    );

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: req.body.textData,
          languageCode: "en-US",
        },
      },
    };

    const responses = await sessionClient.detectIntent(request);
    console.log("Detected intent");
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    if (result.intent) {
      return res.send(`  Response: ${result.fulfillmentText}`);
    } else {
      return res.send("  No intent matched.");
    }
  } catch {
    return res.status(200).json({ status: 401, msg: "unable to connect" });
  }
};
//-->first method
//--->
// const CreateIntent = async (req, res) => {
//   // const { displayName, trainingPhrasesParts, messageTexts } = req.body;
//   const projectId = process.env.NODE_PRODUCTID;

//   const displayName = "inventory";
//   const trainingPhrasesParts = ["how many cars you have?", "do have any xuv?"];
//   const messageTexts = [20, "yes"];

//   try {
//     async function createIntent() {
//       const intentsClient = new dialogflow.IntentsClient({
//         keyFilename:
//           "C:/Users/Neosoft/Desktop/pulkit-bot/dabadu-bot-wtnu-7c7756bc6906.json",
//       });

//       const agentPath = intentsClient.projectAgentPath(projectId);
//       const trainingPhrases = [];

//       trainingPhrasesParts.forEach((trainingPhrasesPart) => {
//         const part = {
//           text: trainingPhrasesPart,
//         };

//         // Here we create a new training phrase for each provided part.
//         const trainingPhrase = {
//           type: "EXAMPLE",
//           parts: [part],
//         };

//         trainingPhrases.push(trainingPhrase);
//       });
//       const messageText = {
//         text: messageTexts,
//       };

//       const message = {
//         text: messageText,
//       };

//       const intent = {
//         displayName: displayName,
//         trainingPhrases: trainingPhrases,
//         messages: [message],
//       };

//       const createIntentRequest = {
//         parent: agentPath,
//         intent: intent,
//       };
//       console.log("line 85");
//       // Create the intent
//       const response = await intentsClient.createIntent(createIntentRequest);
//       console.log("lin88");
//       console.log(response);
//       console.log(`Intent ${displayName} created`);
//       return res.send(`Intent ${displayName} created`);
//     }
//     createIntent();
//   } catch (err) {
//     return res.send(err);
//   }
// };

//-->second method->webhok for response

// const CreateIntent = async (req, res) => {
//   const {
//     displayName,
//     trainingPhrasesParts,
//     messageTexts,
//     entityName,
//     paraName,
//     paraDisplayName,
//   } = req.body;
//   // const projectId = "chatbot-351910";
//   const projectId = process.env.NODE_PRODUCTID;
//   console.log(
//     projectId,
//     displayName,
//     trainingPhrasesParts,
//     messageTexts,
//     entityName,
//     paraName,
//     paraDisplayName
//   );

//   try {
//     async function createIntent() {
//       const projectId = process.env.NODE_PRODUCTID;
//       const intentsClient = new dialogflow.IntentsClient({
//         keyFilename:
//           "C:/Users/Neosoft/Desktop/pulkit-bot/dabadu-bot-wtnu-7c7756bc6906.json",
//       });
//       const agentPath = intentsClient.projectAgentPath(projectId);
//       console.log(projectId);
//       const trainingPhrases = [];

//       trainingPhrasesParts.forEach((trainingPhrasesPart) => {
//         const part = trainingPhrasesPart;

//         // Here we create a new training phrase for each provided part.
//         const trainingPhrase = {
//           type: "EXAMPLE",
//           parts: [part],
//         };

//         trainingPhrases.push(trainingPhrase);
//       });
//       const messageText = {
//         text: messageTexts,
//       };

//       const message = {
//         text: messageText,
//       };
//       console.log(message);
//       console.log(trainingPhrases);
//       const parameters = [
//         {
//           entityTypeDisplayName: entityName,
//           displayName: paraDisplayName,
//           name: paraName,
//         },
//       ];
//       const intent = {
//         displayName: displayName,
//         trainingPhrases: trainingPhrases,
//         messages: [message],
//         // parameters: parameters,
//         webhookState: "WEBHOOK_STATE_ENABLEDx`",
//       };

//       const createIntentRequest = {
//         parent: agentPath,
//         intent: intent,
//       };

//       // Create the intent

//       const response = await intentsClient.createIntent(createIntentRequest);
//       if (response != undefined) {
//         res.sendStatus(200);
//       }
//     }
//     createIntent();
//   } catch (err) {
//     // console.log("hihii" + err.message);
//     res.sendStatus(400);
//   }
// };

//-->third method using context create intent
const CreateIntent = async (req, res) => {
  const {
    displayName,
    trainingPhrasesParts,
    outputContextArray,
    InputContextNamesArray,
  } = req.body;
  const projectId = process.env.NODE_PRODUCTID;
  try {
    async function createIntent() {
      const intentsClient = new dialogflow.IntentsClient({
        keyFilename:
          "C:/Users/Neosoft/Desktop/pulkit-bot/dabadu-bot-wtnu-7c7756bc6906.json",
      });
      const contextClient = new dialogflow.ContextsClient({
        keyFilename:
          "C:/Users/Neosoft/Desktop/pulkit-bot/dabadu-bot-wtnu-7c7756bc6906.json",
      });
      const agentPath = intentsClient.projectAgentPath(projectId);

      const trainingPhrases = [];
      const ParameterPhrases = [];
      trainingPhrasesParts.forEach((trainingPhrasesPart) => {
        const part = trainingPhrasesPart;
        const trainingPhrase = {
          type: "EXAMPLE",
          parts: [part],
        };

        trainingPhrases.push(trainingPhrase);
      });
      ParameterPhrases.forEach((trainingPhrasesPart) => {
        const parameter = {
          entityTypeDisplayName: trainingPhrasesPart.entityType,
          displayName: trainingPhrasesPart.alias,
          value: trainingPhrasesPart.text,
        };
        ParameterPhrases.push(parameter);
      });
      const sessionId = uuid.v4();
      const outputContexts = [];
      outputContextArray.forEach((outputcontext) => {
        const outputContext = {
          name: `projects/${projectId}/agent/sessions/${sessionId}/contexts/${outputcontext.contextName}`,
          lifespanCount: outputcontext.contextLifespan,
        };
        outputContexts.push(outputContext);
      });
      const InputContextNames = [];
      InputContextNamesArray.forEach((inputcontextnamesarray) => {
        const contextPath = contextClient.projectAgentSessionContextPath(
          projectId,
          sessionId,
          inputcontextnamesarray
        );
        const inputContext = {
          name: contextPath,
        };
        console.log(contextPath);
        InputContextNames.push(contextPath);
      });

      const intent = {
        displayName: displayName,
        trainingPhrases: trainingPhrases,
        webhookState: "WEBHOOK_STATE_ENABLED",
        inputContextNames: InputContextNames,
        outputContexts: outputContexts,
      };
      const createIntentRequest = {
        parent: agentPath,
        intent: intent,
      };
      // Create the intent
      const response = await intentsClient.createIntent(createIntentRequest);
      console.log(response);
      return res.send(`Intent ${displayName} created`);
    }
    createIntent();
  } catch (err) {
    return res.send(err);
  }
};

const ListIntent = async (req, res) => {
  try {
    const projectId = process.env.NODE_PRODUCTID;

    // Instantiates clients
    const intentsClient = new dialogflow.IntentsClient({
      keyFilename:
        "C:/Users/Neosoft/Desktop/pulkit-bot/dabadu-bot-wtnu-7c7756bc6906.json",
    });
    async function listIntents() {
      // Construct request

      // The path to identify the agent that owns the intents.
      const projectAgentPath = intentsClient.projectAgentPath(projectId);

      console.log(projectAgentPath);

      const request = {
        parent: projectAgentPath,
      };

      // Send the request for listing intents.
      const [response] = await intentsClient.listIntents(request);
      const responseId = [];
      response.forEach((intent) => {
        const NeedId = intent.name.split("/");

        responseId.push({
          Intent_Id: NeedId[4],
          Intent_Name: intent.displayName,
        });
      });
      return res.send(responseId);
    }

    listIntents();
  } catch (err) {
    return res.send(err);
  }
};

const ListTraningPhase = async (req, res) => {
  try {
    const projectId = process.env.NODE_PRODUCTID;
    const intentId = req.params.id;
    `    // const { IntentsClient } = require("@google-cloud/dialogflow");
`;
    // Create the intents client
    // const intentClient = new IntentsClient();
    const intentsClient = new dialogflow.IntentsClient({
      keyFilename:
        "C:/Users/Neosoft/Desktop/pulkit-bot/dabadu-bot-wtnu-7c7756bc6906.json",
    });
    // Specify working intent
    const intentName = `projects/${projectId}/agent/intents/${intentId}`;

    // Compose the get-intent request
    const getIntentRequest = {
      name: intentName,
      intentView: "INTENT_VIEW_FULL",
    };

    const intent = await intentsClient.getIntent(getIntentRequest);

    return res.send(intent[0].trainingPhrases);
    // [END dialogflow_list_training_phrase
  } catch (err) {
    return res.send(err);
  }
};
//-->nw-->its working for change agent name
const CreateAgent = async (req, res) => {
  try {
    const { AgentsClient } = require("@google-cloud/dialogflow");
    const projectId = process.env.NODE_PRODUCTID;
    const parent = "projects/" + projectId + "/locations/global";

    const agent = {
      parent: parent,
      displayName: req.body.displayName,
      defaultLanguageCode: "en",
      timeZone: "America/Los_Angeles",
    };
    console.log(agent);
    const client = new AgentsClient({
      keyFilename:
        "C:/Users/Neosoft/Desktop/pulkit-bot/dabadu-bot-wtnu-7c7756bc6906.json",
    });
    async function setAgent() {
      const request = {
        agent,
      };
      console.log(request, "375");
      const [response] = await client.setAgent(request);
      res.send(`response: ${JSON.stringify(response, null, 2)}`);
    }
    await setAgent();
  } catch (err) {
    console.log(err);
  }
};

const UpdateIntent = async (req, res) => {
  try {
    const projectId = process.env.NODE_PRODUCTID;
    const intentId = req.params.id;
    const displayName = req.body.displayName;
    const intentClient = new dialogflow.IntentsClient({
      keyFilename:
        "C:/Users/Neosoft/Desktop/pulkit-bot/dabadu-bot-wtnu-7c7756bc6906.json",
    });

    const agentPath = intentClient.projectAgentPath(projectId);
    const intentPath = agentPath + "/intents/" + intentId;

    const intent = await intentClient.getIntent({ name: intentPath });
    intent[0].displayName = displayName;
    const updateMask = {
      paths: ["display_name"],
    };
    const updateIntentRequest = {
      intent: intent[0],
      updateMask: updateMask,
      languageCode: "en",
    };
    const result = await intentClient.updateIntent(updateIntentRequest);
    return res.send(result);
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
};
//-->nw
const DeleteIntent = async (req, res) => {
  try {
    const projectId = process.env.NODE_PRODUCTID;
    console.log(projectId);
    const intentId = req.params.id;
    console.log(intentId);
    const intentsClient = new dialogflow.IntentsClient({
      keyFilename:
        "C:/Users/Neosoft/Desktop/pulkit-bot/dabadu-bot-wtnu-7c7756bc6906.json",
    });

    const intentPath = intentsClient.projectAgentIntentPath(
      projectId,
      intentId
    );

    const request = { name: intentPath };

    const result = await intentsClient.deleteIntent(request);
    return res.send(`Intent ${intentPath} deleted`);
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
};
module.exports = {
  Connect_Dialog,
  CreateIntent,
  ListIntent,
  ListTraningPhase,
  CreateAgent,
  UpdateIntent,
  DeleteIntent,
};
