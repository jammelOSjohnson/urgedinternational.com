const {onCall} = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
admin.initializeApp();

// 2nd gen callable (Node 22)
// clients still call httpsCallable("creatRestauranteUser")
exports.creatRestauranteUser = onCall((request) => {
  return admin
      .auth()
      .createUser(request.data)
      .catch((error) => {
        const {code, details} = JSON.parse(JSON.stringify(error));
        console.log("CREATE_RESTAURANT_ERROR", code, details);
      });
});
