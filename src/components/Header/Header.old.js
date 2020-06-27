import React, { useState, useLayoutEffect } from 'react'
import { Link } from 'gatsby';
import { window, document, exists } from 'browser-monads';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from './Logo';
import Menu from './Menu';
import Copyright from './Copyright';

const Toggler = styled.button`
        position: absolute;
        left: 100%;
        top: 20px;
        padding: 0;
        height: ${inputButtonHeight};
        width: 50px;
        text-align: center;
        font-size: 1.6rem;
        background: lighten(${colorBgBody}, 5);
        display: flex;
        justify-content: center;
        align-items: center;
        &:focus {
          border-color: ${colorBorder};
        }
        &.is-visible {
        transform: translateX(0);
    }

    @media ${layoutLaptop} {
        width: 260px;
    }

    @media ${layoutNotebook} {
        width: 260px;
        transform: translateX(-100%);

        &-toggler {
            display: flex;
        }

        &-image {
            a {
                height: 150px;
                width: 150px;
            }
        }

        &-menu {
            li {
                a {
                    padding: 7px 0;
                }
            }
        }
    }

    @media ${layoutTablet} {
        width: 250px;
        transform: translateX(-100%);

        &-toggler {
            display: flex;
        }

        &-image {
            a {
                height: 150px;
                width: 150px;
            }
        }

        &-menu {
            li {
                a {
                    padding: 7px 0;
                }
            }
        }
    }

    @media ${layoutMobileLg} {
        width: 250px;
        transform: translateX(-100%);

        &-toggler {
            display: flex;
        }

        &-image {
            a {
                height: 150px;
                width: 150px;
            }
        }

        &-menu {
            li {
                a {
                    padding: 7px 0;
                }
            }
        }
    }
        `

const SideHeader = styled.nav`
   position: fixed;
    left: 0;
    top: 0;
    transform: translateX(0);
    height: 100vh;
    width: 300px;
    background: lighten($color-bg-body, 5);
    border-right: 1px solid $color-border;
    z-index: 10;
    transition: $transition;
  &.is-visible{
    transform: translateX(0px);
  }
  li {
    list-style: none;
    text-align: center;
    display: block;

    &:not(:last-child) {
        margin-bottom: 1px;
    }

    a {
        text-transform: uppercase;
        font-size: 0.94rem;
        letter-spacing: 1px;
        display: block;
        padding: 5px 0;
        color: ${colorBody};
        transition: $transition;
        font-weight: 600;
        position: relative;
        overflow: hidden;
        z-index: 1;

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 100%;
            height: 100%;
            width: 0;
            background: rgba(${colorTheme}, 0.2);
            visibility: hidden;
            transition: $transition;
            z-index: -1;
        }

        &:hover {
            color: ${colorTheme};

            &::before {
                width: 100%;
                visibility: visible;
            }
        }

        &.active {
            color: #ffffff;

            &::before {
                background: ${colorTheme};
                width: 100%;
                visibility: visible;
            }
        }
    }
  }
  .inner {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    overflow-y: auto;
    .image {
      padding: 20px 0;
      display: block;
      width: 100%;
      text-align: center;
      border-bottom: 1px solid #2e344e;
      .link{
        height: 200px;
        width: 200px;
        border-radius: 1000px;
        border: 7px solid #2e344e;
        overflow: hidden;
        display: inline-block;
        padding-top: 10px;
      }
    }
    .menu {
        width: 100%;
        padding: 15px 5px;
    }
}
`

const Header = () => {
  const [navigationToggler, setNavigationToggler] = useState(false);

  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      if(window.innerWidth < 1200){
        setNavigationToggler(!navigationToggler);
      }else if(window.innerWidth > 1200){
        setNavigationToggler(navigationToggler);
      }
    });
    return function cleanup() {
      window.removeEventListener("resize", setNavigationToggler);
    };
  }, []);

  const handleNavigationToggler = () => {
    setNavigationToggler(!navigationToggler);
  }

  return (
    <>
      <SideHeader className={navigationToggler && 'isVisible'}>
        <Toggler onClick={handleNavigationToggler}>
          {!navigationToggler ? <AiOutlineClose /> : <AiOutlineMenu /> }
        </Toggler>
        <div className="inner">
          <div className="image">
            <Link to="/" className="link"><Logo /></Link>
          </div>
          <Menu />
          <Copyright />
        </div>
      </SideHeader>
    </>
  )
}

export default Header;
