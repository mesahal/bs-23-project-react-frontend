import React from 'react';

const FooterComponent = () => {
  return (
    <div>
      {/* Footer component */}
      <footer className='footer'>
        <span>All Right Reserved &copy; {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
};

export default FooterComponent;
