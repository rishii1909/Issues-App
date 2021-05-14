import React from 'react';
import {withRouter} from 'react-router-dom'
import {Button,Header, Segment, Menu, MenuItem, MenuMenu, Divider, Icon} from 'semantic-ui-react';

function Downloaded() {
    return (
            <div>
                <Menu attached='top' tabular>
                <MenuItem active>
                <Icon className='download'></Icon><Header compact floated='right' as='h4'>Downloads</Header>
                </MenuItem>
                <MenuMenu position='right'>
                    <MenuItem className='issues-item'> 
                        <Button as='a' href='#all-issues' className='available-issues' primary content='All issues' icon='down arrow' labelPosition='left' />
                    </MenuItem>
                </MenuMenu>
            </Menu>
            <Segment id='download-section' attached='bottom' size='big'>
            <Divider hidden></Divider>
            <Icon className='exclamation ' circular size='big' color='grey'/>
            <Divider hidden></Divider>
            There are no downloaded magazines in your account.
            <Divider hidden></Divider>
            </Segment>
            <Divider hidden></Divider>
            </div>
    )
}

function Downloaded_mobile() {
    return (
        <Segment className='downloads'>
            <Menu attached='top' tabular>
                <MenuItem active>
                <Icon className='download'></Icon><Header compact floated='right' as='h4'>Downloads</Header>
                </MenuItem>
                <MenuMenu position='right'>
                    <MenuItem>
                        <Button as='a' href='#issues' primary compact content='Available issues' icon='down arrow' labelPosition='left' />
                    </MenuItem>
                </MenuMenu>
            </Menu>
            <Segment attached='bottom' size='big'>
            <Divider hidden></Divider>
            <Icon className='exclamation ' circular size='big' color='grey'/>
            <Divider hidden></Divider>
            There are no downloaded magazines in your account.
            </Segment>
        </Segment>
    )
}

export default withRouter(Downloaded);