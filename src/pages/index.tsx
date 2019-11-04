import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Home: NextPage<{ userAgent?: string }> = ({ userAgent }) => {
    return (
        <Container>
            <h1>
                Hello world! - user agent: {userAgent}
                <Link href={'/about'}>
                    <a>Go to about-us</a>
                </Link>
            </h1>
        </Container>
    );
};

Home.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
};

export default Home;

const Container = styled.div`
    background: ${({ theme }) => theme.colors.primary.dark};
`;
