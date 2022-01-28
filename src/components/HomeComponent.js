import React from "react";
import { Card, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";

function Home(propd) {
    return (
        <div className='container'>
            <Card>
                <CardTitle className="h1">Velkommen til vårt hotell</CardTitle>
                <CardSubtitle className="h2">Et flott sted ved sjøen</CardSubtitle>
                <CardText>Dette er en av de flotteste minihpotell, med 7 leiligheter og et helt hus ved brykka til utleie.
                    Om sommeren har vi konserter, og gourment meny i helgene</CardText>
            </Card>
        </div>
    );
}

export default Home;