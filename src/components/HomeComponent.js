import React from "react";
import { Card, CardSubtitle, CardText, CardTitle } from "reactstrap";

function Home(propd) {
    return (
        <div className='container'>
            <Card>
                <CardTitle className="h1">Velkommen til vårt hotell (HomeComponent)</CardTitle>
                <CardSubtitle className="h2">Et flott sted ved sjøen</CardSubtitle>
                <CardText>Dette er en av de flotteste minihotell, med 7 leiligheter og et helt hus ved brygga til utleie.
                    Om sommeren har vi konserter, og gourmemeny i helgene</CardText>
            </Card>
        </div>
    );
}

export default Home;