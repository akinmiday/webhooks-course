exports.handler = (context, event, callback) => {
    const client = context.getTwilioClient();
    console.log("sending text......");
    console.log(`Trascription: ${event.TranscriptionText}`);
    client.messages.create({
        to: context.PHONE_NUMBER,
        from: context.TWILIO_NUMBER,
        body: `New Idea: ${event.TranscriptionText}`
    })
    callback(null, "hi mom!");
};