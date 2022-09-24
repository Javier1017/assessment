import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './header'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

export default function About() {
  return (
    <div style={{ width: '80%', margin: 'auto' }}>
      <div className='aboutHeader'>
        <div className='aboutHeaderTitle'>
          We're changing the whole game.
        </div>
        <span className='aboutHeaderBtn1'>
          Get Started
        </span>
        <span className='aboutHeaderBtn2'>
          View Pricing
        </span>
      </div>
      <div className='aboutBody'>
        <p style={{ color: 'green', fontSize: '1.5rem' }}>OUR STORY</p>
        <div className='aboutBodyContainer'>
          <div style={{ width: '48%' }}>
            <div style={{ fontSize: '1.5rem', color: '#000' }}>
              Ut tristique et egestas quis ipsum. Ante metus dictum at tempor commodo ullamcorper
            </div>
            <br />
            <p style={{ fontWeight: '500', display: 'flex' }}>
              <img width="50" height="50" src='https://www.pngkey.com/png/full/855-8556681_smiley-face-smiley.png' /> &nbsp;
              <span>Netus et malesuada fames ac turpis egestas sed tempus. Orcisa phasellus egestas tellus rutrum tellus pellentesque eu.</span>
            </p>
          </div>
          <div style={{ width: '48%' }}>
            <div style={{ marginBottom: '0.5rem' }}>
              01.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
              <div style={{ fontWeight: '500' }}>Ut tristique et egestas quis ipsum. Ante metus dictum at tempor commodo ullamcorper</div>
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              02.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
              <div style={{ fontWeight: '500' }}>Ut tristique et egestas quis ipsum. Ante metus dictum at tempor commodo ullamcorper</div>
            </div>
            <div style={{ marginBottom: '0.5rem' }}>
              03.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
              <div style={{ fontWeight: '500' }}>Ut tristique et egestas quis ipsum. Ante metus dictum at tempor commodo ullamcorper</div>
            </div>
          </div>
        </div>
        <div className='aboutBodyContainer'>
          <div style={{ width: '48%' }}>
            <div style={{ fontSize: '2rem', color: '#000' }}>
              OUR MISSION
            </div>
            <p style={{ fontWeight: '500', display: 'flex' }}>
              Adipiscing vitae proin sagittis nisl rhoncus mattis. Dolor morbi non arcu risus. Gravida in fermentum et sollicitudin ac orci. Massa enim nec dui nunc mattis enim. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit.
            </p>
            <div className='aboutBodyData'>
              <div>
                <div style={{ fontSize: '2.2rem' }}>
                  94%
                </div>
                <div>
                  Idconsectetur
                </div>
              </div>
              <div>
                <div style={{ fontSize: '2.2rem' }}>
                  70M+
                </div>
                <div>
                  Gravida rutrum
                </div>
              </div>
              <div>
                <div style={{ fontSize: '2.2rem' }}>
                  10K+
                </div>
                <div>
                  Id consectetur
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '48%', textAlign: 'center' }}>
            <img height="300" width="450" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" />
          </div>
        </div>
        <div className='aboutBodyContainer'>
          <div style={{ width: '48%', textAlign: 'center' }}>
            <img height="300" width="450" src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          </div>
          <div style={{ width: '48%' }}>
            <div style={{ fontSize: '2rem', color: '#000' }}>
              OUR VISSION
            </div>
            <p style={{ fontWeight: '500', display: 'flex' }}>
            Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Enim nec dui nunc mattis enim ut tellus elementum sagittis. Viverra maecenas accumsan lacus vel facilisis volutpat. Urna condimentum mattis pellentesque id. Enim facilisis gravida neque convallis a. Egestas congue quisque egestas diam in. Placerat orci nulla pellentesque dignissim enim sit amet venenatis. Massa tempor nec feugiat nisl pretium fusce id velit ut. Hendrerit gravida rutrum quisque non tellus orci ac auctor.
            </p>
          </div>
        </div>
        <div className='aboutList'>
          Our Leading, Strong, And Creative Team
        </div>
        <div className='aboutPicContainer'>
          <img style={{width: '30%'}}src="https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <img style={{width: '30%'}} src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80" />
          <img style={{width: '30%'}} src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </div>
        <div className='aboutPicContainer'>
          <img style={{width: '30%'}} src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <img style={{width: '30%'}} src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" />
          <img style={{width: '30%'}} src="https://images.unsplash.com/photo-1609010697446-11f2155278f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </div>
        <div className='aboutHeaderBtn3'>
          View All
        </div>
        <div>
        <div className='aboutList'>
          Register for Our Free 7-Day Trial now!
        </div>
        <Grid container spacing={1} alignItems="flex-end" justifyContent='center'>
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Email Address" />
          </Grid>
          <Grid item>
            <div className='aboutHeaderBtn4'>
            Register for free trial
            </div>
          </Grid>
        </Grid>
        </div>

      </div>
    </div>
  )
}
