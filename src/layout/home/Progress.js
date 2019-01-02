import React from 'react';

import { faDiscord, faReddit } from '@fortawesome/free-brands-svg-icons';
import Icon from 'src/components/Icon';
import SectionTitle from 'src/components/SectionTitle';

// const Discord = React.lazy(() => import('src/components/DiscordWidget'))

const DiscordPlaceholder = () => (
  <a
    href="https://discord.gg/nZWHe33"
    target="_blank"
    rel="noopener noreferrer"
    className="discordLink">
    <Icon icon={faDiscord} />
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
        <Icon icon={faReddit} />
      </a>
    </div>
  </section>
);
