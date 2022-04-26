const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.creatRestauranteUser = functions.https.onCall((data) => {
  return admin.auth().createUser(data)
      .catch((error) => {
        const {code, details} = JSON.parse(JSON.stringify(error));
        console.log("CREATE_RESTAURANT_ERROR", code, details);
      });
});
