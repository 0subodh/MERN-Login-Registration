import { Container, Card, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className=' py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          <h1 className='text-center mb-4'>Welcome</h1>
          <h3 className='text-center mb-4'>
            to the world of <br />
            <span style={{ fontSize: 32 }}>
              <span style={{ color: 'green' }}>M</span>
              <span style={{ color: 'orange' }}>E</span>
              <span style={{ color: 'lightblue' }}>R</span>
              <span style={{ color: 'lightgreen' }}>N</span>
            </span>
            &nbsp; Stack
          </h3>
          <p className='text-center mb-4'>
            The future belongs to those who believe in their dreams
          </p>
          <div className='d-flex'>
            <Button variant='primary' href='/login' className='me-3'>
              Sign In
            </Button>
            <Button variant='secondary' href='/register'>
              Sign Up
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
