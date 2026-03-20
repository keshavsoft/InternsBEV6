import express from 'express';

const router = express.Router();
router.use(express.json());
// const VERIFY_TOKEN = "my_verify_token_123";

const VERIFY_TOKEN = process.env.WA_Verify_Token;

// ✅ GET → verification
router.get('/webhook', (req, res) => {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];
    console.log("VERIFY_TOKEN : ", VERIFY_TOKEN);

    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        console.log("✅ Webhook verified");
        res.status(200).send(challenge);
    } else {
        res.sendStatus(403);
    }
});

// ✅ POST → receive messages
router.post('/webhook', (req, res) => {
    console.log("Incoming:", JSON.stringify(req.body, null, 2));
    res.sendStatus(200);
});

export { router };