import express from 'express';

const router = express.Router();
router.use(express.json());
// const VERIFY_TOKEN = "my_verify_token_123";

const VERIFY_TOKEN = process.env.WA_Verify_Token;
const ACCESS_TOKEN = process.env.WA_Access_Token;
const PHONE_NUMBER_ID = process.env.WA_Phone_Number_id;

// ✅ POST → receive messages
router.get('/send1', async (req, res) => {
    await sendMessage({ inToNumber: "919248111788" });

    res.status(200).send("sent 1");
});

router.get('/send2', async (req, res) => {
    await sendMessage({ inToNumber: "919885886051" });

    res.status(200).send("sent 2");
});


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

async function sendMessage({ inToNumber }) {
    const returnFromWa = await fetch(`https://graph.facebook.com/v22.0/${PHONE_NUMBER_ID}/messages`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${ACCESS_TOKEN}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            messaging_product: "whatsapp",
            to: inToNumber, // e.g. 919876543210
            text: { body: "Hello from fetch 🚀" }
        })
    });

    console.log("Message sent ✅", returnFromWa);
};

export { router };