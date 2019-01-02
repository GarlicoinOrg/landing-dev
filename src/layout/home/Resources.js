import React from 'react';

import SectionTitle from 'src/components/SectionTitle';

export default () => (
  <section className="mainResources">
    <SectionTitle>Ready for Life</SectionTitle>
    <div className="subTitle">
      With a host of online resources, Garlicoin is ready for real-world
      implementation.
    </div>
    <div className="band">
      <a
        href="https://medium.com/@retosen.dev/important-information-regarding-fridays-allium-hard-fork-f48045379eff"
        target="_blank"
        rel="noopener noreferrer"
        className="card">
        <h4>Latest Blog Post</h4>
        <p>
          Important Information Regarding Friday’s Allium Hard Fork. (Feb 15)
        </p>
        <p>Click to read.</p>
      </a>
      <a href="https://guide.garli.co.in" className="card">
        <h4>User and Developer Resources</h4>
        <p>Garlic Recipes.</p>
      </a>
      <span className="card">
        <h4>Shop</h4>
        <p>Coming soon.</p>
      </span>
      <span className="card">
        <h4>Forum</h4>
        <p>Coming soon.</p>
      </span>
    </div>
  </section>
);
