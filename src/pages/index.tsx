import gql from 'graphql-tag';
import { NextPage } from 'next';
import React from 'react';
import { Flex } from 'reflexbox';
import styled from 'styled-components';
import Logo from '../components/atoms/svg/Logo';
import StoryTell from '../components/organisms/StoryTell';
import { useStoriesQuery } from '../generated/graphql';
import { withApollo } from '../libs/apollo';

export const query = gql`
    query Stories {
        stories: story {
            title
            text
        }
    }
`;

const Home: NextPage<{ userAgent?: string }> = ({ userAgent }) => {
    const { data } = useStoriesQuery();

    if (!data) {
        return null;
    }
    const exampleStory = data.stories[0];

    return (
        <Flex>
            <Container>
                <Navigation>
                    <Logo />
                    <button>Make a story</button>
                </Navigation>

                <h1>Your story creating tool</h1>
                <ul>{data && data.stories.map(({ title }) => <li key={title}>{title}</li>)}</ul>
                <h2>Example story:</h2>

                {exampleStory && <StoryTell story={exampleStory} />}
            </Container>
        </Flex>
    );
};

Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
};

export default withApollo(Home);

const Navigation = styled.nav`
    display: flex;
    align-items: auto;
    justify-content: space-between;
    :first-child {
        margin-right: auto;
    }
`;

const Container = styled.div`
    width: ${({ theme }) => theme.widths.xl}px;
    margin: 0 auto;
    /* background: ${({ theme }) => theme.colors.primary.dark}; */
`;
