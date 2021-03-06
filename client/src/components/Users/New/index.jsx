import React from 'react';
import { Container } from 'react-bootstrap';

import Header from '../../shared/Header';
import UserForm from '../UserForm';

const New = () => {
  return (
    <>
      <Header title="GoService">
        <p>
          This paragraph will be the value for <strong>&#123;children&#125;</strong> in the <strong>Header component</strong>.
        </p>

        <p>
          The header is editable under <strong>/src/components/Users/New/index.jsx</strong>
        </p>
      </Header>
      
      <Container>
        <p>
          The content is editable under <strong>/src/components/Users/New/index.jsx</strong>
        </p>

        <UserForm endpoint="users"/>
      </Container>
    </>
  );
}
 
export default New;