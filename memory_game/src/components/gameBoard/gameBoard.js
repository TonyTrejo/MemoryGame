import React from 'react';
import './gameBoard.css';
import { Card, CardImg, Button} from 'reactstrap';


const Results = (props) => {
    return (
        <div>
            <div className="row">
                {props.results.map(result => (

                    <div className='col-lg-3'>
                        <Button color='link' size='sm' onClick={() => props.shuffleImg(result.id)}> 
                            {result.id}
                             <Card>
                                 <CardImg src={result.src} /> 
                            </Card>
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Results;