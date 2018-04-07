import React from 'react';
import { Card, Button } from 'reactstrap';


const Results = (props) => {
    return (
        <div>
            <div className="row">
                {props.results.map(result => (

                    <div className='col-lg-3'>
                        <Button onClick={() => props.removeGif(result.id)}> 
                            {result.id}
                             <Card>
                                 <img src={result.src} /> 
                            </Card>
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Results;