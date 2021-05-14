import React from 'react'
import {Button, Card, Image, CardContent, CardHeader, Container, CardGroup, CardDescription, Divider, ButtonGroup, IconGroup, Label} from 'semantic-ui-react';
import logo from '../../poster.jpg'
import './issues.css'

const icon_size =  window.innerWidth < 800 ? 'tiny' : 'big' 
const label_size =  window.innerWidth < 800 ? 'small' : 'large' 



const Issues = ({ issues,count }) => {

  return (
    <div>
      <CardGroup itemsPerRow={count} className='issue-cards' >

      {issues.map((issue,i) => (
        <Card key={i}>
            <Image  src = {logo}></Image>
              <Container className='two buttons issue-options'>
                <Button compact  icon='file alternate' size={icon_size}></Button>
                <Button compact icon='cart' size={icon_size}></Button>
              </Container>
            <CardContent>
            
                <CardHeader textAlign='left'>
                {issue.name}
                </CardHeader>
            </CardContent>
            <CardContent extra textAlign='right'>
            <Label size={label_size} >$ {issue.price}</Label>
            </CardContent>
        </Card>
      ))}
      </CardGroup>
    </div>
  )
  
};



export default Issues;