import React from 'react';
import {Link, withRouter} from 'react-router-dom'
import { Header, Button, Dropdown, Menu, Label, Icon, Segment, ButtonGroup, Container, DropdownItem, DropdownMenu, Divider, MenuItem, Modal, ModalHeader, ModalContent, Grid, GridRow, Checkbox, GridColumn, ModalDescription, ModalActions } from 'semantic-ui-react'

const topics = [
    { name: 'All Modeling' }, 
    { name: 'All Railroading' },
];

const magazines = [
    { name: 'HO Collector' }, 
    { name: 'Model Railroad News' },
    { name: 'Narrow Gauge and Short Line Gazette' },
    { name: 'O Scale Trains' },
    { name: 'Passenger Train Journal' },
    { name: 'Railfan & Railroad' },
    { name: 'Railspace Newsmagazine' },
    { name: 'Railroad Model Craftsman' },
];
function Filter_els({list}) {
    return list.map(item => (
        <GridRow className='noPadding'>
            <GridColumn width={12} >
                {item.name}
                {/* <Header as='h5'>{item.name}</Header> */}
            </GridColumn>
            <GridColumn width={4} floated='left' textAlign='right'>
                <Checkbox toggle floated></Checkbox>
            </GridColumn>
        </GridRow>
    ));
}
function Filter({topics_list, magazines_list}) {

    const [open, setOpen] = React.useState(false)

    return(
        <Modal 
        size='small'
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<Button className='Filter' floated='left' compact content='Filter' icon='filter' labelPosition='left' />}
        >
        <ModalHeader>
            Select filters to be applied
        </ModalHeader>
        <ModalContent scrolling>
            <Segment>
            <Header as='h4' dividing>Topics</Header>
            <Grid padded columns='2'>
                <Filter_els list={topics_list} ></Filter_els>
            </Grid>
            <Header as='h4' dividing>Magazines</Header>
            <Grid padded columns='2'>
                <Filter_els list={magazines_list}></Filter_els>
            </Grid>
            </Segment>
        </ModalContent>
        <ModalActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button positive icon='right arrow'  labelPosition='right' content='Apply filters' onClick={() => setOpen(false)}></Button>
        </ModalActions>
        </Modal>
    )
}


function Modbar({sort,float}) {
    
    
    return (
            <Menu style={{marginBottom : '20px'}} floated={float}>
            <MenuItem >
                <Dropdown text={sort}  icon='font' as='button' floated='left' labeled button className='icon'  >
                    <DropdownMenu >
                        <DropdownItem>
                            <Icon className='sort alphabet down'></Icon> Ascending order
                        </DropdownItem>
                        <DropdownItem>
                            <Icon className='sort alphabet up'></Icon> Descending order
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </MenuItem>
            <Divider ></Divider>
            <MenuItem position='right'>
                <Filter topics_list={topics} magazines_list={magazines}></Filter>
            </MenuItem>
            </Menu>
            
    );
}

export default Modbar;