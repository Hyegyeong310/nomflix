import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const Container = styled.div`
  padding: 20px;
`;

const globalStyles = createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
    }
    a {
        text-decoration: none; 
        color: inherit;
    }
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 12px;
        background-color: #000;
        color: #fff;
        padding-top: 60px;
    }
`;

export default globalStyles;
