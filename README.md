# Trophy NodeJS SDK

The Trophy Node SDK provides convenient access to the Trophy API from applications written in
server-side JavaScript.

Trophy is the 1:1 customer engagement platform for consumer web and mobile apps. AI lifecycle
marketing agents write and send personalized email and push to every user, alongside in-app
experiences like milestones, streaks, points, and leaderboards. This library gives your app access
to the Trophy API, so you can send the user events that power both.

## Installation

Install the package with:

```bash
npm install @trophyso/node
```

## Usage

The package needs to be configured with your account's API key, which is available in the Trophy
web interface. Set the API key with the following:

```javascript
const { TrophyApiClient } = require('@trophyso/node');

const trophy = new TrophyApiClient({ apiKey: 'your-api-key' });
```

You can now access the Trophy API through the `trophy` object.

```javascript
trophy.metrics.event('words-written', {
  user: {
    id: '18',
    email: 'jk.rowling@harrypotter.com',
    tz: 'Europe/London',
  },
  value: 750,
});
```

## Usage with TypeScript

Trophy maintains types for this SDK. You can use them without any additional configuration.

## Documentation

See the [Trophy API Docs](https://docs.trophy.so) for more
information on the accessible endpoints.
