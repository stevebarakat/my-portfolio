import { createGlobalStyle } from 'styled-components';
import { 
  colorBody, 
  colorBgBody, 
  colorBorder, 
  colorTheme, 
  colorHeading, 
  fzBody, 
  ffHeading, 
  ffBody,
  layoutMobileXs,
  layoutMobileSm,
  layoutMobileLg,
  layoutTablet,
  layoutNotebook,
  layoutLaptop,
  layoutDesktopXs,
  layoutDektop,
 } from './variables.js';

const GlobalStyle = createGlobalStyle`
/**
 * Typography
 */

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #383838;
}

*::-webkit-scrollbar {
    width: 8px;
    background-color: #383838;
}

*::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #6b6b6b;
}

html {
    overflow: hidden;
    overflow-y: auto;
}

body {
    overflow: hidden !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.8rem;
    font-family: ${ffBody};
    color: ${colorBody};
    font-weight: 400;
    background: ${colorBgBody};

    @media ${layoutTablet} {
    }

    @media ${layoutMobileLg} {
    }
}

span {
  display: inline-block;
}

img {
    max-width: 100%;
}

@include placeholder-color(${colorBody});

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: ${ffHeading};
    color: ${colorHeading};
}

h1 {
    font-size: 3.2857rem;
    line-height: 4rem;

    @media ${layoutTablet} {
        font-size: 2.9857rem;
        line-height: 3.4rem;
    }

    @media ${layoutMobileLg} {
        font-size: 2.6857rem;
        line-height: 3.1rem;
    }
}

h2 {
    font-size: 2.57rem;
    line-height: 3.2857rem;

    @media ${layoutTablet} {
        font-size: 2.37rem;
        line-height: 3.0857rem;
    }

    @media ${layoutMobileLg} {
        font-size: 2.17rem;
        line-height: 2.857rem;
    }
}

h3 {
    font-size: 2rem;
    line-height: 2.7rem;

    @media ${layoutMobileLg} {
        font-size: 1.91rem;
        line-height: 2.357rem;
    }
}

h4 {
    font-size: 1.71rem;
    line-height: 2.43rem;

    @media ${layoutMobileLg} {
        font-size: 1.51rem;
        line-height: 2.13rem;
    }
}

h5 {
    font-size: 1.43rem;
    line-height: 2.14rem;

    @media ${layoutMobileLg} {
        font-size: 1.23rem;
        line-height: 2.04rem;
    }
}

h6 {
    font-size: 1.14rem;
    line-height: 1.857rem;

    @media ${layoutMobileLg} {
        font-size: 1.04rem;
        line-height: 1.657rem;
    }
}


::-moz-selection {
    background: ${colorTheme};
    color: #ffffff;
}

::-ms-selection {
    background: ${colorTheme};
    color: #ffffff;
}

::-o-selection {
    background: ${colorTheme};
    color: #ffffff;
}

::selection {
    background: ${colorTheme};
    color: #ffffff;
}

a {
  text-decoration: none;
    &:hover,
    &:focus,
    &:active {
        text-decoration: none;
        outline: none;
    }
}

a,
button {
    cursor: pointer;
}

input,
button,
select,
textarea {
    background: transparent;
    border: 1px solid ${colorBorder};
    font-family: ${ffBody};
    color: ${colorBody};
    @include placeholder-color(${colorBody});

    &:focus,
    &:active {
        outline: none;
        border-color: ${colorTheme};
    }
}

input,
select,
textarea {
    width: 100%;
    font-size: 14px;
    vertical-align: middle;
}

input,
select,
button {
    height: $input-button-height;
    padding: 0 15px;

    @media ${layoutMobileLg} {
        height: 44px;
    }
}

textarea {
    padding: 10px 15px;
}

blockquote {
    border-left: 5px solid ${colorTheme};
    font-size: 18px;
    line-height: 27px;
    padding: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1;
    margin-left: 25px;
    background: lighten($color-bg-body, 5);

    p {
        margin-bottom: 0;
        font-style: italic;
        font-size: 1.2rem;
    }

    footer {
        font-size: 14px;

        a {
            color: ${colorTheme};

            &:hover {
                color: ${colorTheme};
            }
        }
    }

    @media ${layoutMobileLg} {
        font-size: 16px;
        line-height: 25px;
        padding: 20px;
        margin-left: 0;
    }
}

[class^="flaticon-"],
[class*=" flaticon-"],
[class^="flaticon-"],
[class*=" flaticon-"] {
    line-height: 1;

    &::before,
    &::after {
        margin-left: 0;
        font-size: inherit;
        vertical-align: middle;
    }
}

.stylish-list {
    padding-left: 0;

    li {
        list-style: none;
        line-height: 30px;
        position: relative;
        padding-left: 35px;
    }

    i {
        position: absolute;
        left: 0;
        top: 7px;
        font-size: 16px;
        color: ${colorTheme};
    }
}


input,
select,
textarea {

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        transition: background-color 50000s ease-in-out 0s, color 50000s ease-in-out 0s;
    }
}


/* Checkbox & Radio Styles */
input[type=checkbox],
input[type=radio] {
    visibility: hidden;
    opacity: 0;
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    display: none;

    &~label {
        position: relative;
        padding-left: 24px;
        cursor: pointer;

        &:before {
            content: "";
            font-family: 'Font Awesome 5 free';
            font-weight: 700;
            position: absolute;
            left: 0;
            top: 5px;
            border: 1px solid ${colorBorder};
            height: 15px;
            width: 15px;
            line-height: 1;
            font-size: 13px;
        }
    }

    &:checked {
        &~label {
            color: ${colorTheme};

            &:before {
                content: "\f00c";

                color: ${colorTheme};
                border-color: ${colorTheme};
            }
        }
    }
}

input[type=radio] {
    &~label {
        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            border: 2px solid ${colorBorder};
            border-radius: 100px;
            height: 15px;
            width: 15px;
            margin-top: -8px;
            line-height: .5;
            font-size: 28px
        }
    }

    &:checked {
        &~label {
            &::before {
                content: "";
                color: ${colorTheme};
                border-color: ${colorTheme}
            }
        }
    }
}
`;

export default GlobalStyle;