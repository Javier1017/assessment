import React from 'react';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import YouTube from '@material-ui/icons/YouTube';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Instagram from '@material-ui/icons/Instagram';
export default function Footer() {
  return (
    <div>
      <div className='footerList'>
        <div>
          <p><b>Product</b></p>
          Imperdiet <br />
          Condimentum  <br />
          Pellentesque  <br />
          Integer  <br />
        </div>
        <div>
          <p><b>For Development</b></p>
          Imperdiet <br />
          Condimentum  <br />
          Pellentesque  <br />
          Integer  <br />
        </div>
        <div>
          <p><b>Resources</b></p>
          Imperdiet <br />
          Condimentum  <br />
          Pellentesque  <br />
          Integer  <br />
        </div>
        <div>
          <p><b>About</b></p>
          Imperdiet <br />
          Condimentum  <br />
          Pellentesque  <br />
          Integer  <br />
        </div>
      </div>
      <div className='footerList'>
        <p><b>
          ABC Company
        </b>
        </p>
        <p><b>
          Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus.
        </b></p>
        <p>
          <Facebook />
          <Twitter />
          <YouTube />
          <LinkedIn />
          <Instagram />
        </p>
      </div>
      <div>
        <b>
          ABC Company © 2022
        </b>
      </div>
    </div>
  );
}
