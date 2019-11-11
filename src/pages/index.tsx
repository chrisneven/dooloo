import gql from 'graphql-tag';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { useStoriesQuery } from '../generated/graphql';
import { withApollo } from '../libs/apollo';

export const query = gql`
    query Stories {
        story {
            title

            text
        }
    }
`;

const Home: NextPage<{ userAgent?: string }> = ({ userAgent }) => {
    const { data } = useStoriesQuery();

    return (
        <Container>
            <h1>
                Hello world! - user agent: {userAgent}
                <Link href={'/about'}>
                    <a>Go to about-us</a>
                </Link>
            </h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </Container>
    );
};

Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
};

export default withApollo(Home);

const Container = styled.div`
    background: ${({ theme }) => theme.colors.primary.dark};
`;
