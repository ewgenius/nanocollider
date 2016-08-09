import * as React from 'react'
import {Component} from 'react'
import {connect} from 'react-redux'
require('../../../src/styles/main.scss')
require('../../../src/components/App/App.scss')

import * as injectTapEventPlugin from 'react-tap-event-plugin'
import {MuiThemeProvider} from 'material-ui/styles'
import {getMuiTheme, lightBaseTheme} from 'material-ui/styles'

import Drawer from 'material-ui/Drawer'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import ThreeView from '../ThreeView/ThreeView'

injectTapEventPlugin()

const theme = getMuiTheme()

const mapState = state => ({

})

class App extends Component<{}, {}> {
  render() {
    return <MuiThemeProvider muiTheme={theme}>
      <div className='app'>
        <Drawer
          open={true}
          docked={true}
          width={300}>
          <div className='sidebar-content'>
            <RaisedButton primary label='start'/>
          </div>
        </Drawer>

        <div className='content'>
          <ThreeView />
        </div>
      </div>
    </MuiThemeProvider>
  }
}
export default connect(mapState)(App)
