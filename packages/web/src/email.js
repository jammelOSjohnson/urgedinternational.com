import emailjs from 'emailjs-com';

var sendEmail = async function sendEmail (SERVICE_ID,TEMPLATE_ID, RequestParams, USER_ID){
    var res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, RequestParams , USER_ID).then(function(result){
        ////console.log(result.text);
        return true;
    }, function(error){
        ////console.log(error.text);
        return false;
    });

    return res;
}

export default sendEmail;