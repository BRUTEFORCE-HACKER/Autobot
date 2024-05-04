module.exports.config = {
	name: "antiout",
	version: "0.0.1",
	role: 2,
	credits: "TCG",
	description: "Turn on/off automatically seen when new messages are available",
	aliases: ["seen"],
	cooldown: 0,
	hasPrefix: false,
	usage: "",
};

module.exports.run = async({ api, event, Threads}) => {
 
    let data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data["antiout"] == "undefined" || data["antiout"] == false) data["antiout"] = true;
    else data["antiout"] = false;
    
    await Threads.setData(event.threadID, { data });
    global.data.threadData.set(parseInt(event.threadID), data);
    
    return api.sendMessage(`☑️ antiout ${(data["antiout"] == true) ? "turn on" : "Turn off"} successfully!`, event.threadID);

}
