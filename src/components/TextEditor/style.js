import styled from 'styled-components'

export const MainContainer = styled.div`
   background-color: #25262c;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;/
`

export const InnerMainContainer = styled.div`
background-color: #1b1c22;
  width: 80%;
  height: 80%;
  padding: 1%;
  border-radius: 10px;
  display: flex;/
`

export const FirstContainer = styled.div`
   width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  .heading {
    color: #ffffff;
  }
  
  /
`

export const Img = styled.img`
   width: 60%;/
`

export const SecondContainer = styled.div`
    border-radius: 10px;
  background-color: #25262c;
  width: 40%;/
`

export const FontUl = styled.ul`
   list-style: none;
  display: flex;
  align-items: center;
  height: 10%;
  padding: 1% 10%;
  background-color: #2b2c2e;
  color: #ffffff;
  margin: 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;/
`

export const TextArea = styled.textarea`
  background-color: #25262c;
  max-width: 100%;
  min-width: 100%;
  min-height: 90%;
  max-height: 90%;
  border: none;
  padding: 2% 4%;
  font-size: 1.2vw;
  color: #ffffff;
  caret-color: #ffffff;

  font-weight: ${props => {
    if (props.themeBold === true) {
      return 'bold'
    }
    return 'normal'
  }};
  font-style: ${props => {
    if (props.themeItalic === true) {
      return 'italic'
    }
    return 'normal'
  }};
  text-decoration: ${props => {
    if (props.themeUnderLine === true) {
      return 'underline'
    }
    return 'normal'
  }};

  &:focus {
    outline: none;
  }
`

export const Li = styled.li`
    width: 10%;
  font-weight: bold;/
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => {
    if (props.theme === true) {
      return '#faff00'
    }
    return '#f1f5f9 '
  }};
  font-weight: bold;
  font-size: 1.3vw;/
`
