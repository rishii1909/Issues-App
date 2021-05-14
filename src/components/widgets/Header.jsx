import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import {Button, Container, Image, Menu, Item, Icon, MenuItem, Dropdown, Label, Modal, ModalHeader, ModalDescription, ModalContent, Table, TableRow, TableCell, TableHeaderCell} from 'semantic-ui-react'

function HelpButton() {
    const [open, setOpen] = React.useState(false)


    return (
        <Modal 
        tr
        size='small'
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
            <Item className='menu-button' as='a' href='#'>
                <Icon className=' large question circle outline'></Icon>
            </Item>
        }
        >
        <ModalHeader>
            <Icon className='question'></Icon> Help
        </ModalHeader>
        <ModalContent>
            <Table unstackable celled   style={{margin : '0px auto'}}  >
                <TableRow>
                    <TableCell textAlign='right'>
                        <Icon className='eye' size='large'></Icon>
                    </TableCell>
                    <TableCell>
                        Read
                    </TableCell>
                </TableRow>
                <TableRow >
                    <TableCell  textAlign='right'>
                        <Icon className='file alternate' size='large'></Icon>
                    </TableCell>
                    <TableCell>
                        Preview
                    </TableCell>
                </TableRow>
                <TableRow >
                    <TableCell textAlign='right' >
                        <Icon className='delete' size='large'></Icon>
                    </TableCell>
                    <TableCell>
                        Delete
                    </TableCell>
                </TableRow>
                <TableRow >
                    <TableCell textAlign='right' >
                        <Icon  className='download' size='large'></Icon>
                    </TableCell>
                    <TableCell>
                        Download
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell textAlign='right' >
                        <Icon disabled className='download' size='large'></Icon>
                    </TableCell>
                    <TableCell>
                        Download in progress
                    </TableCell>
                </TableRow>
                <TableRow >
                    <TableCell textAlign='right' >
                        <Icon  className='cart' size='large'></Icon>
                    </TableCell>
                    <TableCell>
                        Cart
                    </TableCell>
                </TableRow>                
            </Table>
        </ModalContent>
        </Modal>
    )
}

function Header(props) {
    
    return(
        <div className="header">
        <Menu className=" green fixed inverted ">
            <MenuItem className='left'>
                <Image className='mini' src={props.logo}></Image>
            </MenuItem>
            <Menu className='right green inverted '>
                <Item className='menu-button' as='a'>
                <Link to='/profile'>
                    <Icon className=' large bell '></Icon>
                </Link>
                </Item>
                <HelpButton></HelpButton>
                <Item className='menu-button' as='a' href='#'>
                    <Icon className=' large search'></Icon>
                </Item>
                <Link to='/profile'>
                    <Menu className='green menu-button inverted'>                   
                        <Dropdown item icon='large user'>
                            <Dropdown.Menu>
                                    <Dropdown.Item>
                                    <Icon className='download'></Icon>
                                    My Downloads
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                    <Icon className='ellipsis horizontal'></Icon>
                                    Change Password
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                    <Icon className='log out'></Icon>
                                    Logout
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                        </Dropdown>
                    </Menu>
                </Link>
                
            </Menu>
        </Menu>
        <br></br>
        <br></br>
        <br></br>
            
        </div>
        
    )
}
export default withRouter(Header);