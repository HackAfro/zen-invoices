import React from 'react';
import Table from './components/table';

import AppProvider from './providers';
import InvoiceCreateModal from './components/modal';
import Header from './components/header';

import './App.css';
import { AppContext } from './contexts';

function App() {
  return (
    <AppProvider>
      <div className='mx-auto w-full py-4 px-4 md:w-4/5 md:py-8 md:px-6'>
        <Header />
        <div className='max-w-full overflow-x-scroll mt-8 md:mt-10'>
          <Table />
          <AppContext.Consumer>
            {({ modalOpen }) => {
              return modalOpen && <InvoiceCreateModal />;
            }}
          </AppContext.Consumer>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
