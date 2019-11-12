import React, { FC } from 'react';
import styled from 'styled-components';
import { Story } from '../../generated/graphql';
import Sentence from '../atoms/Sentence';

interface Props {
    story: Pick<Story, 'title' | 'text'>;
}
const StoryTell: FC<Props> = ({ story }) => {
    const sentences = story.text.split(/\r?\n/);

    return (
        <Container>
            {sentences.map((sentence, i) => (
                <Sentence sentence={sentence} key={i} />
            ))}
        </Container>
    );
};

export default StoryTell;

const Container = styled.div`
    position: relative;
`;
