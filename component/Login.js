import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockRounded from '@material-ui/icons/LockRounded';

export default function Login({ modalChange, setUserName, setValue, modal }) {
  const useStyles = makeStyles((theme) => ({
    paper: {
      width: 600,
      backgroundColor: theme.palette.background.paper,
      padding: '1rem',
      margin: '10rem auto',
      borderRadius: '1rem',
    },
  }))

  const classes = useStyles();
  const [open, setModalOpen] = React.useState(modal);
  const [pwError, setPwError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [pwValue, setPwValue] = React.useState('');
  const [emailValue, setEmailValue] = React.useState('');
  const [incorrectMsg, setIncorrectMsg] = React.useState('');

  const modalOpen = () => {
  const data = { 
    'password': pwValue, 
    'username': emailValue 
  };
  const request = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  };
  try {
    fetch("https://www.melivecode.com/api/login", request)
      .then(response => response.json())
      .then(res => {
          if (res.status == 'error') {
            setIncorrectMsg('Incorrect Email Address or Password!')
          } else if (res.status == 'ok'){ 
            setModalOpen(false);
            modalChange();
            setUserName(res.user.fname + ' ' + res.user.lname)
            setValue(1)
          }
      }
      );

  } catch (err) {
    console.log(err);
  }
}

const modalClose = () => {
  setModalOpen(false);
  modalChange();
};

const onChangePW = (event) => {
  if (event.target.value.length < 8) {
    setPwError("Invalid Password");
  } else {
    setPwError("");
    setPwValue(event.target.value);
  }
}
const onChangeEmail = (event) => {
  let emailRegrex = /^[A-Za-z0-9_]+[a-zA-Z0-9_\.\-]{0,}@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  if (event.target.value.match(emailRegrex)) {
    setEmailError("");
    setEmailValue(event.target.value);
  } else {
    setEmailError("Invalid Email")
  }
}

const body = (
  <div className={classes.paper}>
    <h2 className='loginTitle'>Login</h2>
    <div>
      <Grid container spacing={2} alignItems="flex-end" justifyContent='center'>
        <Grid item>
          <AccountCircle />
        </Grid>
        <Grid item>
          <TextField
            onChange={onChangeEmail}
            required
            id="input-with-icon-grid"
            label="Email Address" />
        </Grid>
      </Grid>
      <div className='errorPw' style={{ marginLeft: '-4.5rem', marginBottom: '0.5rem' }}>
        {emailError}
      </div>
      <Grid container spacing={2} alignItems="flex-end" justifyContent='center'>
        <Grid item>
          <LockRounded />
        </Grid>
        <Grid item>
          <TextField
            error={pwError}
            onChange={onChangePW}
            required
            type="password"
            id="input-with-icon-grid"
            label="Password" />
        </Grid>
      </Grid>

      <div className='errorPw'>
        {pwError}
      </div>

    </div>
    <div className='errorPw' style={{margin: '0 auto'}}>
        {incorrectMsg}
      </div>
    <div className='loginBtnContainer'>
      <div className={`${pwValue && emailValue && !pwError && !emailError ? 'loginBtn1' : 'loginBtn1 disable'}`} onClick={modalOpen} >
        Login
      </div>

      <div className="loginBtn2" onClick={() => modalClose()}>Cancel</div>
    </div>
  </div>
);


  return (
    <div>
      <Modal
        open={open}
        onClose={modalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  ) 
}