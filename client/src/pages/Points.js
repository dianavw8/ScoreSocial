import React from "react";
import { Button, Grid, Header, Icon, } from "semantic-ui-react";

const Points = () => (
  <Grid style={{ marginTop: "4.5em" }} textAlign="center">
    <Grid.Column>
      <Header as="h1" basic inverted color="teal">
        Add Points
      </Header>
      <Button.Group size="huge" basic inverted color="teal">
        <Button>
          <Icon name="plus square" />
          10
        </Button>
        <Button.Or />
        <Button>
          <Icon name="plus square" />
          25
        </Button>
        <Button.Or />
        <Button>
          <Icon name="plus square" />
          50
        </Button>
      </Button.Group>
    </Grid.Column>
  </Grid>
);

export default Points;
