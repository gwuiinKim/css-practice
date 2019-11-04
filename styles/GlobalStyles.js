import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,500,550,600,700');

    *{
        box-sizing: border-box;
    }
    body {
        /* opacity:0.8; */
        /* filter:blur(10px); */
        background-color:#f4f6fc;
        width:100%;
        height:100vh;
        /* background-color:black; */
        overflow-x:hidden;
        color:${props => props.theme.blackColor};
        font-size:18px;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
       
    }
    a {
        all:unset;
        cursor:pointer;
        text-decoration:none;
    }

    /* 보니까 focus가 있는게 훨씬 좋아보임 */
    /* input:focus{
        outline:none;
        border:2px solid ${props => props.theme.blueColor};
        border-radius:5px;
    } */

    /* input type =number에서 위아래 화살표를 안 뜨게 하는 css */
    /* input[type='number'] {
    -moz-appearance:textfield;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    } */
`;
