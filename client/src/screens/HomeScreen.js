import { Container, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const HomeScreen = () => {
  return (
    <div className=' py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          <h1 className='text-center mb-4'>MERN Authentication</h1>
          <p className='text-center mb-4'></p>
          <div className='d-flex'>
            <LinkContainer to='/login'>
              <Button variant='primary' href='/login' className='me-3'>
                Sign In
              </Button>
            </LinkContainer>
            <LinkContainer to='/signup'>
              <Button variant='secondary' href='/signup'>
                Sign Up
              </Button>
            </LinkContainer>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default HomeScreen;
