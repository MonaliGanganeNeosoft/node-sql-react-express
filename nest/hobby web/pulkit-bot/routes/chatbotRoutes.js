const express = require("express");
const {
  Connect_Dialog,
  CreateIntent,
  ListIntent,
  ListTraningPhase,
  CreateAgent,
  UpdateIntent,
  DeleteIntent,
} = require("../controllers/chatbotController");
const {
  CreateEntity,
  listEntityTypesAsync,
  checkBatchDeleteEntitiesProgress,
} = require("../controllers/entityController");
const { handleWebhook } = require("../controllers/webhook");
const {
  webhookforcreteintent,
} = require("../controllers/webhookforcreteintent");
const chatbot = require("../controllers/chatbot");
const {
  detectEventIntentController,
} = require("../controllers/eventIntentController");
const router = express.Router();
router.post("/text", Connect_Dialog);
router.post("/createIntent", CreateIntent);
router.get("/listIntents", ListIntent);
router.get("/listTraningPhase/:id", ListTraningPhase);

router.post("/createAgent", CreateAgent); //-->nw
router.put("/updateIntent/:id", UpdateIntent);

router.delete("/deleteIntent/:id", DeleteIntent); //-->nw

router.post("/handleWebhook", handleWebhook); //--> working
//-->for cars webhook seprate
router.post("/handlecars", webhookforcreteintent);
router.post("/createEntity", CreateEntity);
router.get("/listEntityTypesAsync", listEntityTypesAsync);
router.delete(
  "/checkBatchDeleteEntitiesProgress",
  checkBatchDeleteEntitiesProgress
);

router.post("/text_query", async (req, res) => {
  const { text, userId } = req.body;
  console.log("req", req.body);
  const resultQuery = await chatbot.textQuery(text, userId);
  console.log(resultQuery, "46 resultquery");
  const resObj = {
    intentName: resultQuery.intent.displayName,
    userQuery: resultQuery.queryText,
    fulfillmentText: resultQuery.fulfillmentText,
  };
  res.send(resObj);
});

router.get("/eventDetect", detectEventIntentController);

module.exports = router;
