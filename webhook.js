import express from 'express';

const app = express();

app.use(express.json());

const VERIFY_TOKEN = "my_verify_token_123"; // same in Meta

// 🔹 Step 1: Verification (GET)
app.get('/webhook', (req, res) => {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode === 'subscribe' && token === VERIFY_TOKEN) {
        console.log("Webhook verified");
        res.status(200).send(challenge);
    } else {
        res.sendStatus(403);
    }
});

// 🔹 Step 2: Receive messages (POST)
app.post('/webhook', (req, res) => {
    console.log("Incoming webhook:", JSON.stringify(req.body, null, 2));

    // IMPORTANT: Always respond 200
    res.sendStatus(200);
});

app.listen(3000, () => console.log("Server running on port 3000"));