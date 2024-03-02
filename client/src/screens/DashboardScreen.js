import { useSelector } from 'react-redux';

const DashboardScreen = () => {
  

  const { userInfo } = useSelector((state) => state.auth);

  
  return (
    <>
    <h1>Welcome {userInfo.name}</h1>
    <h3>Here are your Resources</h3>
    </>
    
  );
};

export default DashboardScreen;