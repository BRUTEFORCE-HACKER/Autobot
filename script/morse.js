const axios = require("axios");

module.exports = {
  config: {
    name: "morse",
    version: "1.0",
    author: "Jun",
    countDown: 5,
    role: 0,
  },
  onStart: async function ({ api, event, args }) {
    let juswa = args.join(" ");
    const res = await axios.get(`https://api.popcat.xyz/texttomorse?text=${juswa}`);
    var morse = res.data.morse;
    return api.sendMessage(morse, event.threadID, event.messageID);
  },
};
