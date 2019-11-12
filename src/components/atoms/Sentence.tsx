import React, { FC, useEffect, useState } from 'react';
import { useScrollYPosition } from 'react-use-scroll-position';
import { Waypoint } from 'react-waypoint';
import styled from 'styled-components';

interface Props {
    sentence: string;
}

const Sentence: FC<Props> = ({ sentence }) => {
    const [complete, setComplete] = useState(sentence[0]);
    const [index, setIndex] = useState(0);
    const scrollY = useScrollYPosition();

    useEffect(() => {
        if (sentence[index]) {
            setComplete(complete + sentence[index]);
            setIndex(index + 1);
        }
    }, [scrollY]);

    return (
        <Waypoint>
            <Container>
                <StyledSentence>{complete}</StyledSentence>
            </Container>
        </Waypoint>
    );
};

export default Sentence;

const Container = styled.div`
    height: 100vh;
    /* position: absolute; */
`;

const StyledSentence = styled.div``;
