# Trophy NodeJS SDK

The Trophy Node SDK provides convenient access to the Trophy API from applications written in
server-side JavaScript.

Trophy provides APIs and tools for adding gamification to your application, keeping users engaged
through rewards, achievements, streaks, and personalized communication.

## Documentation

See the [Trophy API Docs](https://trophy.docs.buildwithfern.com/overview/introduction) for more 
information.

## Installation

Install the package with:

```bash
npm install @trophyso/node
```

## Usage

The package needs to be configured with your account's API key, which is available in the Trophy
web interface. Set the API key with the following:

```javascript
const TrophyClient = require('@trophyso/node');

const trophy = new TrophyClient({ apiKey: 'your-api-key' });
```

You can now access the Trophy API through the `trophy` object.

```javascript
trophy.metrics.event("words-written", {
  user: {
    id: "18",
    email: "jk.rowling@harrypotter.com",
    tz: "Europe/London"
  },
  value: 750
})
```

## Usage with TypeScript

Trophy maintains types for this SDK. You can use them without any additional configuration.
