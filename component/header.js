import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import About from './about';
import Login from './Login';

function header() {
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
      >
        {value === index && (
          <div className='contentBody' style={{ fontSize: '1.5rem' }}>
            {children}
          </div>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  const [value, setValue] = React.useState(0);
  const [loginModal, setLoginModal] = React.useState(false);
  const [username, setUserName] = React.useState("");
  const tabChange = (event, newValue) => {
    setValue(newValue);
  };
  const modalChange = () => {
    setLoginModal(false)
  }
  const logout = () => {
    setUserName('')
  }

  return (
    <div>
      <div className='header'>
        <img width="100" src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" />
        <Tabs
          value={value}
          onChange={tabChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Home" />
          <Tab label="About Us" />
          <Tab label="Blog" />
          <Tab label="Contact Us" />
        </Tabs>

        {username ?
          <div>
            <span style={{cursor: 'default'}}>
            {username}
            </span>
            <span className="logoutBtn" onClick={logout}>
              Logout
            </span>
          </div>
          :
          <div style={{ cursor: 'pointer' }}>
            <span className='login' onClick={() => setLoginModal(true)}>Login</span>
            <span className='signUp'>Sign Up</span>
          </div>
        }


      </div>
      <TabPanel value={value} index={0}>
        Home
      </TabPanel>
      <TabPanel value={value} index={1}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Blog
      </TabPanel>
      <TabPanel value={value} index={3}>
        Contact Us
      </TabPanel>
      {loginModal &&
        <Login modalChange={modalChange} setUserName={setUserName} setValue={setValue} modal={loginModal} />
      }

    </div>
  );
}

export default header;
