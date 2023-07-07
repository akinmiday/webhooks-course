exports.handler = (context, event, callback) => {
    console.log("sending text......");
    console.log(`Trascription: ${event.transc}`)
    callback(null, "hi mom!");
};