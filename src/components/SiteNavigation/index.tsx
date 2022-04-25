import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { IMenu } from '../../stores/firebase.store'

const StyledNavLink = styled(NavLink)`
  padding: 10px;
`

const NavBar = styled.div`
  overflow: hidden;
  background-color: #ccc;

  & a {
    float: left;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;

    &:hover {
      background-color: #0084ff;
    }
  }

  & > div {
    float: left;
    overflow: hidden;

    & button {
      font-size: 16px;
      border: none;
      outline: none;
      color: white;
      padding: 14px 16px;
      background-color: inherit;
      font-family: inherit;
      margin: 0;

      &:hover {
        background-color: #0084ff;
      }
    }

    & div {
      display: none;
      position: absolute;
      background-color: #0084ff;
      z-index: 1;

      & a {
        float: left;
        color: white;
        text-decoration: none;

        &:hover {
          background-color: #46e253;
          color: black;
        }
      }
    }

    &:hover {
      & button {
        background-color: #0084ff;
      }
      & div {
        display: block;
      }
    }
  }
`

export interface ISiteNavigation {
  items?: IMenu[]
}

export class SiteNavigation extends React.Component<ISiteNavigation> {
  render() {
    return (
      //   <nav>
      //     <ul>
      //       {this.props.items?.map(item => (
      //         <StyledNavLink key={`${item.id}`} to={item.id}>
      //           {item.title}
      //         </StyledNavLink>
      //       ))}
      //     </ul>
      //   </nav>
      <NavBar>
        {this.props.items?.map(item => {
          if (!item.items) {
            return (
              <NavLink key={`${item.id}`} to={item.id}>
                {item.title}
              </NavLink>
            )
          } else {
            return (
              <div>
                <button>
                  {item.title} ↓ {/* <i class="fa fa-caret-down"></i> */}
                </button>
                <div>
                  {item.items.map(subItem => (
                    <NavLink key={`${subItem.id}`} to={subItem.id}>
                      {subItem.title}
                    </NavLink>
                  ))}
                </div>
              </div>
            )
          }
        })}
      </NavBar>
    )
  }
}
