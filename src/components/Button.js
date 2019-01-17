import styled from 'styled-components'

export const Button = styled.button`
  border: none;
  min-height: 20px;
  min-width: 60px;
  padding: 16px;
  margin: 0 1em 1em 0;
  background: white;
  color: #54556c;
  border-radius: 20px;
  box-shadow: 0 2px 4px 0 rgba(210, 210, 210, 0.5);
  cursor: pointer;
  transition: transform 250ms, box-shadow 250ms;

  &:hover, &:focus {
    outline: none;
    transform: translate3d(0, -2px, 0);
    box-shadow: 0 2px 6px 0 rgba(110, 110, 110, 0.5);
  }
`
