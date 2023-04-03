import React from 'react';

import {
    Button,
    Divider,
    Grid,
    Header,
    Icon,
    Segment,
  } from "semantic-ui-react";
  
  
const GameDescription222 = () => {
    return (
        <>
            <p>Game Description</p>

            <Grid divided="vertically">
                <Grid.Row>
                    <Grid.Column>
                    <Header as="h2" attached="top" block>
                        Team A vs. Team B
                    </Header>
                    <Segment attached>
                        <Segment.Group horizontal>
                        <Segment>Team A</Segment>
                        <Segment>Odds: </Segment>
                        <Button animated size="large" basic color="teal" floated="right">
                            <Button.Content visible>Place Bet</Button.Content>
                            <Button.Content hidden>
                            <Icon name="arrow right" />
                            </Button.Content>
                        </Button>
                        </Segment.Group>
                        <Divider section style={{ margin: "-0.2em" }} />
                        <Segment.Group horizontal>
                        <Segment>Team B</Segment>
                        <Segment>Odds: </Segment>
                        <Button animated size="large" basic color="teal" floated="right">
                            <Button.Content visible>Place Bet</Button.Content>
                            <Button.Content hidden>
                            <Icon name="arrow right" />
                            </Button.Content>
                        </Button>
                        </Segment.Group>
                    </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </>
        
    )
}

export default GameDescription222;