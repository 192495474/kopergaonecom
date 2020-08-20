import styled from 'styled-components';
const CONTAINER = styled.div`
  height: auto;
  width: 90%;
  margin: 5em auto;
  color: snow;
  @media(min-width: 786px) {
    width: 70%;
  }

  label {
    color: #24B9B6;
    font-size: 1.2em;
    font-weight: 400;
  }
  textarea{
    width:100%;
  }

  h1 {
    color: #24B9B6;
    padding-top: .5em;
  }

  .form-group {
    margin-bottom: 2.5em;
  }
  .error {
    border: 2px solid #FF6565;
  }
  .error-message {
    color: #FF6565;
    padding: .5em .2em;
    height: 1em;
    position: absolute;
    font-size: .8em;
  }
`;

export default CONTAINER;