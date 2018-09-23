import React, { Component } from 'react'
import * as Dropbox from 'dropbox'
import styled from 'styled-components'
import { getFolders, getFiles } from '../../utils'
import { Button, Title } from '../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
  height: 100%;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
`
const FormOptions = styled.div`
  max-height: 400px;
  overflow: auto;
`
const Option = styled.div`
  margin-bottom: 20px;
  > label {
    margin-left: 5px;
  }
`
const ActionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  > * {
    width: 100%;
  }
`

class Dashboard extends Component {
  constructor (props) {
    super(props)
    const accessToken = localStorage.getItem('access_token') || (props.location.state && props.location.state.accessToken)
    if (accessToken) {
      this.state = {
        dbxUrl: new Dropbox.Dropbox({ accessToken }),
        path: '',
        folders: null
      }
    } else {
      props.history.push({
        pathname: '/'
      })
    }
    this.initSlideshow = this.initSlideshow.bind(this)
    this.onPathChanged = this.onPathChanged.bind(this)
    this.onFolderChanged = this.onFolderChanged.bind(this)
  }

  componentDidMount () {
    this.onFolderChanged()
  }

  onPathChanged (e) {
    this.setState({
      path: e.currentTarget.value
    })
  }

  onFolderChanged () {
    const { dbxUrl, path } = this.state
    this.setState({ folders: null })
    dbxUrl.filesListFolder({ path }).then(response => {
      this.setState({ folders: getFolders(response), path: '' })
    })
  }

  initSlideshow (e) {
    e.preventDefault()
    this.setState({ folders: null })
    const { dbxUrl, path } = this.state
    const { history } = this.props
    dbxUrl.filesListFolder({ path }).then(response => {
      const files = getFiles(response)
      const images = []
      files.forEach(file => {
        dbxUrl.filesGetTemporaryLink({ path: file.path_lower }).then(image => {
          images.push(image)
          if (images.length === files.length) {
            history.push({
              pathname: '/slideshow',
              state: { images }
            })
          }
        })
      })
    })
  }

  render () {
    const { folders, path } = this.state
    return folders ? (
      <Wrapper>
        <div>
          <Title>Choose a Folder</Title>
          <Form onSubmit={this.initSlideshow}>
            <FormOptions>
              {folders.map(folder => {
                return (
                  <Option>
                    <input type='radio' name='folder' id={folder.path_lower} value={folder.path_lower} onChange={this.onPathChanged} />
                    <label for={folder.path_lower}>
                      {folder.name}
                    </label>
                  </Option>
                )
              })}
            </FormOptions>
            {path !== '' && <ActionContainer>
              <Button type='button' onClick={this.onFolderChanged}><FontAwesomeIcon icon='folder-open' />&nbsp;Go to Folder</Button>
              <span>&nbsp;</span>
              <span>or</span>
              <span>&nbsp;</span>
              <Button type='submit'><FontAwesomeIcon icon='video' />&nbsp;Start a Slideshow</Button>
            </ActionContainer>}
          </Form>
        </div>
      </Wrapper>
    ) : (
      <Wrapper>Loading...</Wrapper>
    )
  }
}
export default Dashboard
