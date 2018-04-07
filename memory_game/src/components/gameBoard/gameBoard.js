import React from 'react';
import { Card, CardImg, Button } from 'reactstrap';
import { AppRegistry, View, Image } from 'react-native';

const Results = (props) => {
    return (
        <div>
            <div className="row">
                {props.results.map(result => (

                    <div className='col-lg-4'>
                        <Button onClick={() => props.removeGif(result.id)}> 
                             <Card>
                               /* <CardImg top width="30%" src={result.images.original.url} alt={result.title} /> */
                                <Image src={view.image.source} alt={view.image} />
                            </Card>
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Results;