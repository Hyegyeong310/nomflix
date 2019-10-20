import React from 'react';
import { withRouter } from 'react-router-dom';
import { Header, List, Item, SLink, Icon, Text } from 'styles/HeaderStyles';

export default withRouter(({ location: { pathname } }) => (
  <Header bgImage={require('../assets/logo.png')}>
    <List>
      <Item>
        <SLink to="/">
          <Icon
            bgImg={require('../assets/slate.png')}
            current={pathname === '/' || pathname.includes('/movie')}
          />
          <Text>Movies</Text>
        </SLink>
      </Item>
      <Item>
        <SLink to="/tv">
          <Icon
            bgImg={require('../assets/television.png')}
            current={pathname === '/tv' || pathname.includes('/show')}
          />
          <Text>TV shows</Text>
        </SLink>
      </Item>
      <Item>
        <SLink to="/search">
          <Icon
            bgImg={require('../assets/search.png')}
            current={pathname === '/search'}
          />
          <Text>Search</Text>
        </SLink>
      </Item>
    </List>
  </Header>
));
