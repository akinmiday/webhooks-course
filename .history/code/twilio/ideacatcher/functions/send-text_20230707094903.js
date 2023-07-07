exports.handler = (context, event, callback) => {
    const client = context.getTwilioClient();
    console.log("sending text......");
    client.messages.create({
        to: context.PHONE_NUMBER,
        from: context.TWILIO_NUMBER,
        body: `New Idea: ${event.TranscriptionText}`
    }).then(message => {
        callback(null, `Sent message ${message.sid}`);
    }).catch((error) => {
        callback(error);
    })
};