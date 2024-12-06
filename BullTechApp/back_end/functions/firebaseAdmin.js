const admin = require('firebase-admin');
const serviceAccount = JSON.parse(process.env.PRIVATE_KEY);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`
});

module.exports = { admin };
