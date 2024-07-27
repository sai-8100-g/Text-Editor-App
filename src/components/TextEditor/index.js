import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  MainContainer,
  InnerMainContainer,
  FirstContainer,
  SecondContainer,
  FontUl,
  TextArea,
  Button,
  Li,
  Img,
} from './style'

class TextEditor extends Component {
  state = {
    isBold: false,
    isItallic: false,
    isUnderLine: false,
    teatAreaInput: '',
  }

  onChangeTextAreaInput = event => {
    this.setState({teatAreaInput: event.target.value})
  }

  onClickToBoldText = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickToItallicText = () => {
    this.setState(prevState => ({isItallic: !prevState.isItallic}))
  }

  onClickToTextUnderLine = () => {
    this.setState(prevState => ({isUnderLine: !prevState.isUnderLine}))
  }

  render() {
    const {isBold, isItallic, isUnderLine, teatAreaInput} = this.state
    return (
      <MainContainer>
        <InnerMainContainer>
          <FirstContainer>
            <h1 className="heading">Text Editor</h1>
            <Img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="img"
            />
          </FirstContainer>
          <SecondContainer>
            <FontUl>
              <Li>
                <Button
                  theme={isBold}
                  data-testid="bold"
                  type="button"
                  onClick={this.onClickToBoldText}
                >
                  <VscBold />
                </Button>
              </Li>
              <Li>
                <Button
                  theme={isItallic}
                  data-testid="italic"
                  type="button"
                  onClick={this.onClickToItallicText}
                >
                  <GoItalic />
                </Button>
              </Li>
              <Li>
                <Button
                  theme={isUnderLine}
                  data-testid="underline"
                  type="button"
                  onClick={this.onClickToTextUnderLine}
                >
                  <AiOutlineUnderline />
                </Button>
              </Li>
            </FontUl>
            <TextArea
              cols={20}
              rows={20}
              themeBold={isBold}
              themeItalic={isItallic}
              themeUnderLine={isUnderLine}
              value={teatAreaInput}
              onChange={this.onChangeTextAreaInput}
            />
          </SecondContainer>
        </InnerMainContainer>
      </MainContainer>
    )
  }
}

export default TextEditor
