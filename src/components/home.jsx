import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom'
import {isMobile} from 'react-device-detect';
import {Button, ButtonGroup, Item,Container, ListItem, List, Label, Divider,Header, Segment, Icon, Menu, MenuItem, MenuMenu, Tab, TabPane, Image} from 'semantic-ui-react'
import Downloaded from './sections/downloads';
import All_issues, {MyIssues} from './sections/all_issues';
import Issues from './Lists/issues'
import Modbar from './widgets/ModBar'
import Pill from './widgets/chooser'

class Tab_issues extends Component {

    state = {
        issues: [],
        issues_count: window.innerWidth < 800 ? 2 : 4 ,
    }

    componentDidMount() {
        fetch('https://609b9e082b549f00176e407a.mockapi.io/issues')
        .then(res => res.json())
        .then((data) => {
            this.setState({ issues: data.slice(0,8) })
            console.log(data)
        })
        .catch(console.log)
    }

    render() {
      return (
            <Segment basic padded>
                <Header dividing as='h2' textAlign='left'>{this.props.header}</Header>
                <Divider hidden></Divider>
                <Issues count={this.state.issues_count} issues = {this.state.issues}></Issues>
            </Segment>   
      );
    }
}


const issue_panes = [
    {
    menuItem : 
        <MenuItem>
            <Icon className='download'></Icon>
            Downloads
        </MenuItem>,
        key : 1,
    render : () => 
        <TabPane>
            <Segment id='download-section'  size='big'>
            <Divider hidden></Divider>
            <Icon className='exclamation ' circular size='big' color='grey'/>
            <Divider hidden></Divider>
            There are no downloaded magazines in your account.
            </Segment>
        </TabPane>
    },
    {
    menuItem :
        <MenuItem>
            <Icon className='bookmark' ></Icon>My Issues
        </MenuItem>,
    render : () =>
        <TabPane id='my-issues'>
        <Tab_issues header='Viewing My Issues'></Tab_issues>
        </TabPane>
    },
    {
    menuItem :
        <MenuItem>
            <Icon className='book' ></Icon>All Issues
        </MenuItem>,
    render : () =>
        <TabPane id='available-issues'>
        <Tab_issues header='Showing All Issues'></Tab_issues>
        </TabPane>
    },
]


class Home_mobile extends Component{

    render() {
        return (
            <Segment basic>
            <Modbar sort='Sort By'></Modbar>
            <Downloaded></Downloaded>
            <All_issues></All_issues>
            <MyIssues></MyIssues>
            <Pill></Pill>
            </Segment>
        )
    }
}

class Home_desktop extends Component{
    state = {
        issues: [],
        loading: true,
    }

    componentDidMount() {
        fetch('https://609b9e082b549f00176e407a.mockapi.io/issues')
        .then(res => res.json())
        .then((data) => {
            this.setState({ issues: data })
          
        })
        .catch(console.log)
    }

    render(h) {
        return(
            <Segment basic className='App-container'>
            <Modbar sort='Sort By' float='right'></Modbar>
            <Tab panes={issue_panes}></Tab>
            <Pill></Pill>
            </Segment>
            
        )
    }
}

class Home extends Component{
    state = {
        issues: []
    }
    componentDidMount() {
        fetch('https://609b9e082b549f00176e407a.mockapi.io/issues')
        .then(res => res.json())
        .then((data) => {
          this.setState({ issues: data })
        })
        .catch(console.log)
    }
    render() {
        if (isMobile) {
            <Segment basic>
            <Downloaded></Downloaded>
            <All_issues></All_issues>
            </Segment>
        }
        return (
            <Segment basic>
            <Tab panes={issue_panes}></Tab>
            </Segment>
        )
    }
}

const IssuesSwitch = () => {
    // The current width of the viewport
    const width = window.innerWidth;
    // The width below which the mobile view should be rendered
    const breakpoint = 620;
    
    /* If the viewport is more narrow than the breakpoint render the
       mobile component, else render the desktop component */
    return width < breakpoint ? <Issues count={2} /> : <Issues count={4} />;
  }

const Home_switch = () => {
    // The current width of the viewport
    const width = window.innerWidth;
    // The width below which the mobile view should be rendered
    const breakpoint = 620;
    
    /* If the viewport is more narrow than the breakpoint render the
       mobile component, else render the desktop component */
    return width < breakpoint ? <Home_mobile /> : <Home_desktop />;
  }


export default withRouter(Home_switch);


