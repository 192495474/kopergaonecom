import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const BUTTON = styled(Button)`
margin-top:40px;
margin-bottom:10px;
  background: #1863AB;
  border: none;
  font-size: 1.2em;
  font-weight: 400;
float:right;
  &:hover {
    background: #1D3461;
  }
`;
export default BUTTON;