import React from 'react';
import {ButtonGroup, Button} from 'semantic-ui-react'

function Pill(){
    return (
        <div id='floater'>
            <ButtonGroup fixed >
                <Button size='large' active primary borderless>
                    Magazines
                </Button>
                <Button size='large' primary borderless>
                    Books
                </Button>
            </ButtonGroup>
        </div>
    )
}

export default Pill;