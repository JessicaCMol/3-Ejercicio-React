import React, { Component } from 'react'

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <footer className='text-center text-lg-left fixed-bottom text-light'>
            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              &copy; {new Date().getFullYear()} Copyright:{' '}
              <a className='text-light' href='https://mdbootstrap.com/'>
                React.com
              </a>
            </div>
          </footer>
        );
    }
}
 
export default Footer;
