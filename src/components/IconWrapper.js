import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg{
    cursor: pointer;
    margin: 36px 0;
  }
  span{
    cursor: pointer;
  }
`

export default ({children}) =>
  <IconWrapper>
    { children }
  </IconWrapper>
