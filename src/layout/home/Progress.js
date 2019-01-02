import React from 'react';

import SectionTitle from 'src/components/SectionTitle';

import Discord from 'src/_assets/faDiscord.svg';
import Reddit from 'src/_assets/faReddit.svg';

// const Discord = React.lazy(() => import('src/components/DiscordWidget'))

const DiscordPlaceholder = () => (
  <a
    href="https://discord.gg/nZWHe33"
    target="_blank"
    rel="noopener noreferrer"
    className="discordLink">
    <Discord />
  </a>
);

export default () => (
  <section className="progress">
    <SectionTitle>Where We're At</SectionTitle>
    <div className="subTitle">
      We're currently hard at work developing this website, the exchange, and
      GarliCoin itself! Check on our discord and reddit for more updates.
    </div>
    <div className="progressLinks">
      {/*<Suspense fallback={DiscordPlaceholder}>*/}
      {/*<Discord />*/}
      {/*</Suspense>*/}
      <DiscordPlaceholder />
      <a
        href="https://garlicoin.reddit.com"
        target="_blank"
        rel="noopener noreferrer"
        className="redditLink">
        <Reddit />
      </a>
    </div>
  </section>
);
