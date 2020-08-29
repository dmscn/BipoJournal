import React from 'react';
import styled from 'styled-components';
import {Layout, Text} from '@ui-kitten/components';

const Container = styled(Layout)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function MoodList(): JSX.Element {
  return (
    <Container>
      <Text>Hello from MoodList</Text>
    </Container>
  );
}
