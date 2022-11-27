const { Event } = require('../bot')

class LavalinkError extends Event {
  constructor(client) {
    super(client, {
      name: 'lavalinkError',
      description: 'Lavalink connection error event',
    })
  }

  async run(error) {
    console.info(error.message)
    console.info(`Trying reconnect to lavalink in 3 seconds`)
    setTimeout(async () => {
      await this.client.connectLavalink()
    }, 3000)
  }
}

module.exports = LavalinkError
