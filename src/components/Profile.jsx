import React from 'react';
import {withRouter} from 'react-router-dom'
import {Segment,Menu,Grid, Header, GridColumn, MenuItem, Icon, Image, Divider} from 'semantic-ui-react'
import './Profile.css'
import avatar from './avatar.svg'

const page_height = window.innerWidth < 768 ? 'auto' : 'calc(100vh - 95px)'
function Profile() {
    return(
        <Segment basic>
            <Grid  stackable doubling reversed='mobile' stretched columns={2}>
                <GridColumn fixed textAlign='left'  computer={4} largeScreen={3} widescreen={2}>
                    <Segment id='profile-column'>

                        <Header  as='h2' inverted dividing>Profile</Header>
                        <Menu  fluid vertical inverted id='profile-menu'>
                            <MenuItem as='a'>
                            My Downloads 
                                <Icon className='download' floated="right"></Icon>
                            </MenuItem>
                            <MenuItem as='a'>
                            Change Password 
                                <Icon className='ellipsis horizontal' floated="right"></Icon>
                            </MenuItem>
                            <MenuItem as='a'>
                            Logout
                                <Icon className='logout' floated="right"></Icon>
                            </MenuItem>
                        </Menu>
                        <Divider hidden></Divider>
                    </Segment>
                </GridColumn>
                <GridColumn computer={12} largeScreen={13} widescreen={14}>
                    <Segment className='whiteboard' raised style={{height : page_height}}>
                        <Divider hidden></Divider>
                        <Grid columns='1' stackable centered='true'>
                        <GridColumn width='8' verticalAlign='middle'>
                        <div style={{margin : '0px auto', width : 'fit-content', position : 'relative'}}>
                        <Image src={avatar} id='avatar' style={{marginLeft : '5%'}} size='medium'  ></Image>
                        <Icon className='large pencil alternate' style={{position : 'absolute', top : '0px', right : '0px', color : '#003b1d'}}></Icon>
                        </div>
                        <Header as='h2' style={{marginLeft : '0px'}}> Avid Green Reader</Header>
                        <Divider hidden></Divider>
                        </GridColumn>
                        </Grid>
                    </Segment>
                </GridColumn>
            </Grid>
        </Segment>
        
    )
}
export default withRouter(Profile);