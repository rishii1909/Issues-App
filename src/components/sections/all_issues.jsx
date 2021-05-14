import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import logo from '../../logo.svg'
import {Button,Header, Segment, Menu, MenuMenu, MenuItem, Card, Image, CardContent, CardHeader, Container, CardGroup, CardDescription, Divider, ButtonGroup, Icon} from 'semantic-ui-react';

import Issues from './../Lists/issues'

const width = window.innerWidth;
    // The width below which the mobile view should be rendered
const breakpoint = 620;

class All_issues extends Component {

    state = {
        issues: [],
        count : width < breakpoint ? 2 : 4
    }
    componentDidMount() {
        fetch('https://609b9e082b549f00176e407a.mockapi.io/issues')
        .then(res => res.json())
        .then((data) => {
          
          this.setState({ issues: data.slice(0,8) })
        })
        .catch(console.log)
    }

    render() {
      return (
        <div id='all-issues' style={{marginBottom : '20px'}}>
          <Menu attached='top' tabular>
                <MenuItem active>
                    <Icon className='book'></Icon>
                    <Header compact floated='right' as='h4'>All issues</Header>
                </MenuItem>
            </Menu>
            <Segment attached='bottom'>
                <Divider hidden></Divider>
                <Issues count={this.state.count} issues = {this.state.issues}>
                </Issues>
            </Segment>
        </div>
      );
    }
  }

class My_issues extends Component {

  state = {
    issues: [],
    count : width < breakpoint ? 2 : 4
  }

    componentDidMount() {
        fetch('https://609b9e082b549f00176e407a.mockapi.io/issues')
        .then(res => res.json())
        .then((data) => {
          this.setState({ issues: data.slice(0,8) })
        })
        .catch(console.log)
    }

    render() {
      return (
        <div id='my-issues' style={{marginBottom : '20px'}}>
          <Menu attached='top' tabular>
                <MenuItem active>
                    <Icon className='book'></Icon>
                    <Header compact floated='right' as='h4'>My issues</Header>
                </MenuItem>
            </Menu>
            <Segment attached='bottom'>
                <Divider hidden></Divider>
                <Issues count={this.state.count} issues = {this.state.issues}>
                </Issues>
            </Segment>
        </div>
      );
    }
  }

export default withRouter(All_issues);
export const MyIssues = My_issues