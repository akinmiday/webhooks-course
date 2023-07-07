exports.handler = (context, event, callback) => {
    console.log("sending text......");
    console.log(`Trascription: ${event.TranscriptionText}`);
    callback(null, "hi mom!");
};