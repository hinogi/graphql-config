import { FC } from 'react';
import { FeatureList, HeroGradient } from '@theguild/components';
import { handlePushRoute, NPMBadge } from '@guild-docs/client';

const IndexPage: FC = () => {
  return (
    <>
      <HeroGradient
        title="GraphQL Config"
        description={
          <>
            <p>One configuration for all your GraphQL tools. </p>
            <p>
              The easiest way to configure your development environment with
              your GraphQL Schema.
            </p>
          </>
        }
        link={{
          href: '/docs/user/user-introduction',
          children: 'Get Started',
          title: 'Get started with GraphQL Config',
          onClick: (e) => handlePushRoute('/docs/user/user-introduction', e),
        }}
        image={{
          src: '/assets/img/configuring.svg',
          alt: 'configuring',
          loading: 'lazy',
        }}
        version={<NPMBadge name="graphql-config" />}
        colors={['#5f6184', '#000']}
      />

      <FeatureList
        items={[
          {
            title: 'Easy To Use',
            description:
              'You gain simplicity and a central place to setup your tools.',
            image: {
              src: '',
              alt: '',
            },
          },
          {
            title: 'Fully Configurable',
            description: 'Highly customizable and extensible',
            image: {
              src: '',
              alt: '',
            },
          },
          {
            title: 'Open Source',
            description: 'A standard in the community',
            image: {
              src: '',
              alt: '',
            },
          },
        ]}
      />
    </>
  );
};

export default IndexPage;
