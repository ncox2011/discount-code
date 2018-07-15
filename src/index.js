import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import BookCompany from './BookCompany';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
(<Router>
<BookCompany />
</Router>
), 
document.getElementById('root'));
registerServiceWorker();
