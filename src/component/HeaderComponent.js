// Import React library for creating React components
import React from 'react';

// Functional Component for the Header
const HeaderComponent = () => {
  return (
    <div>
        {/* Header section */}
        <header>
            {/* Navigation bar with dark background */}
            <nav className='navbar navbar-expand-md navbar-dark bg-dark p-3'>
                <div>
                    {/* Brand/logo linking to an empty href for demonstration */}
                    <a className='navbar-brand m-5' href=''>Task Management System</a>
                </div>
            </nav>
        </header>
    </div>
  );
}

// Export the HeaderComponent for use in other parts of the application
export default HeaderComponent;
