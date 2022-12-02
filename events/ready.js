module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  client.user.setActivity(`o1help`)
  setInterval(() => {
  const channelid = "1043083953327837214"//ID voice
  const channel = client.channels.cache.get(channelid);
  if (!channel) return
  channel.join()
}, 1000)

};
