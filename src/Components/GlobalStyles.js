import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

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
