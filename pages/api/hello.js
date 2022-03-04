import Discord from 'discord.js';
const token = 'OTI4NDEyNTMwNTQyNTE4MzMz.YdYZjA.Eqtq53L741vkR3WUHA_4C-nBaEU';
const channelId = '928412125284692019';

export default async function handler(req, res) {
  const { name, email, sub, message } = req.body;
  console.log(req.body)
  const client = new Discord.Client();
  const msg = `${name}(${email})\n${sub}\n${message}`;

  const response = await new Promise((resolve, reject) => {
    // When the client is ready, run this code (only once)
    client.once('ready', async () => {
      try {
        const res = await client.channels.cache.get(channelId).send(msg);
        console.log(res)
        resolve(res);
      } catch (error) {
        reject(error);
      }
    });

    // Login to Discord with your client's token
    client.login(token);
  })
  
  res.redirect('/contact-us?success');
}
