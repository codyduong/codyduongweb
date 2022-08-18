import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkBase = styled(Link)`
  color: ${(props) => props.theme.color.text[100]};
  text-decoration: none;
`;

export const LinkHeader = styled(LinkBase)`
  margin: 0px 15px;
  font-size: 20px;
`;