import React from 'react';

//        {header}
//        {footer}

export default  MainLayout = ({content}) => (
    <div>
      <header className="app-header">

      </header>
      <main className="app-content">
        {content}
      </main>
      <footer className="app-footer">

      </footer>
    </div>
);
