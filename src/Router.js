import React, { Component } from "react"
import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import { Grid, Icon, Menu } from "semantic-ui-react"
import AuthorsPosts from "./containers/authorsPosts"
import Details from "./containers/details"
import Home from "./containers/home"
import TestQuery from "./containers/testQuery"
import TestQueryParams from './containers/testQueryParams'

export class Routes extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state
    return (
      <Router>
        <Grid columns="equal">
          <Grid.Column align="right">
            <Menu vertical text>
              <Menu.Item
                align="left"
                name="home"
                active={activeItem === "home"}
                onClick={this.handleItemClick}
                as={Link}
                to="/"
              >                
                <h3>
                  <Icon name='home'/>
                  Główna
                </h3>
              </Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column width={8}>
            <Route exact path="/" component={Home} />
            <Route exact path="/tweet/:id" component={Details} />
            <Route exact path="/user/:id" component={AuthorsPosts} />
            <Route exact path='/testQuery' component={TestQuery} />
            <Route exact path='/testQueryParams' component={TestQueryParams} />
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid>
      </Router>
    )
  }
}

export default Routes
