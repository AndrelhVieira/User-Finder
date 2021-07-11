import { createGlobalStyle } from "styled-components";

export const COLORS = {
  primaryColor: "#094074",
  secondaryColor: "#3C6997",
  light: "#EFF1F3",
};

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'DM Sans', sans-serif;
        color: ${COLORS.light};
        margin: 0;
        padding: 0;
        background-color: ${COLORS.secondaryColor};
    }
    
    ::-webkit-scrollbar {
        width: 10px;
    }
  
    /* Track */
    ::-webkit-scrollbar-track {
        background: transparent; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${COLORS.primaryColor};
        }
        
        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
        background: ${COLORS.light};
    }
`;
