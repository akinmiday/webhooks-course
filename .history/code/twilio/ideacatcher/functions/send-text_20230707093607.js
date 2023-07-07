exports.handler = (context, event, callback) => {
    const client = context.getTwilioClient();
    console.log("sending text......");
    console.log(`Trascription: ${event.TranscriptionText}`);
    client.messages({
        to: contex
    })
    callback(null, "hi mom!");
};