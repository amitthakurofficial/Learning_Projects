import React from 'react';
import reactDom from 'react-dom';
import ReactDom from 'react-dom';

import { Provider } from 'react-redux';
import App from '../App'

reactDom.render(
    
    <Provider>
        <App/>
        </Provider>,
        document.getElementById('root')
        )

// export default Provider;