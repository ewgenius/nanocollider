import * as React from 'react'
import {Component} from 'react'
require('../../../src/styles/main.scss')
require('../../../src/components/App/App.scss')

import * as injectTapEventPlugin from 'react-tap-event-plugin'
import {MuiThemeProvider} from 'material-ui/styles'
import {getMuiTheme, lightBaseTheme} from 'material-ui/styles'

import Drawer from 'material-ui/Drawer'
import ThreeView from '../ThreeView/ThreeView'

injectTapEventPlugin()

const theme = getMuiTheme()

export default class App extends Component<{}, {}> {
  render() {
    return <MuiThemeProvider muiTheme={theme}>
      <div className='app'>
        <Drawer
          open={true}
          docked={true}
          width={300}>
          drawer
        </Drawer>

        <div className='content'>
          <ThreeView />
        </div>
      </div>
    </MuiThemeProvider>
  }
}