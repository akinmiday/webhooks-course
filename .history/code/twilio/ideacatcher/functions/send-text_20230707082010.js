exports.handler = (context, event, callback) => {
    console.log("sending text......")
    callback(null, "hi mom!")
}