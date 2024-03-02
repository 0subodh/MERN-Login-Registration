import { useSelector } from 'react-redux';
import {
  selectAuth,
  getAuthError,
  getAuthStatus,
} from '../features/auth/authSlice';

const Header = () => {
  const auth = useSelector(selectAuth);
  const status = useSelector(getAuthStatus);
  const error = useSelector(getAuthError);

  let content;

  if (status === 'loading') {
    content = <h1>Waiting...</h1>;
  } else if (status === 'succeeded') {
    console.log('auth _id', auth._id);
    console.log('auth googleID', auth.googleID);
    if (auth) {
      content = `<h1>User Logged In</h1>`;
    } else {
      content = `<h1>User Not Logged In</h1>`;
    }
  } else if (status === 'failed') {
    content = (
      <>
        <h1>User not found</h1>
        <p>{error}</p>
      </>
    );
  }

  return <div>{auth ? <UserLoggedIn /> : <UserNotLoggedIn />}</div>;
};

export default Header;

function UserLoggedIn() {
  return (
    <nav className='navbar bg-body-tertiary'>
      <div className='container-fluid'>
        <button type='button' className='btn btn-secondary btn-lg'>
          MERN
        </button>
        <h1 style={{ alignItems: 'center' }}>You are Logged In</h1>
        <form className='d-flex' role='search'>
          <button type='button' className='btn btn-primary btn-lg'>
            <a
              href='http://localhost:5000/users/logout'
              style={{ textDecoration: 'none', color: 'whitesmoke' }}
            >
              Logout
            </a>
          </button>
        </form>
      </div>
    </nav>
  );
}

function UserNotLoggedIn() {
  return (
    <nav className='navbar bg-body-tertiary'>
      <div className='container-fluid'>
        <button type='button' className='btn btn-secondary btn-lg'>
          MERN
        </button>
        <form className='d-flex' role='search'>
          <button type='button' className='btn btn-primary btn-lg'>
            <a
              href='http://localhost:5000/users/login'
              style={{ textDecoration: 'none', color: 'whitesmoke' }}
            >
              Login
            </a>
          </button>
        </form>
      </div>
    </nav>
  );
}
