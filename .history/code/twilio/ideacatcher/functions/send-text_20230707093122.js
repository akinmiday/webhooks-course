exports.handler = (context, event, callback) => {
    const client = context.getTwilioClient();
    console.log("sending text......");
    console.log(`Trascription: ${event.TranscriptionText}`);
    callback(null, "hi mom!");
};