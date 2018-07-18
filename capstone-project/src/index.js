import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store'
import { fetchMessage } from './redux/actions/message'
import { fetchChild} from './redux/actions/child'
import { fetchProvider } from './redux/actions/provider'
import { fetchCalendar } from './redux/actions/calendar'
import { fetchActivities } from './redux/actions/activities'
import { fetchTestimonial } from './redux/actions/testimonial'



import 'bootswatch/dist/yeti/bootstrap.min.css'

let newStore = store()


newStore.dispatch(fetchMessage())
newStore.dispatch(fetchChild())
newStore.dispatch(fetchProvider())
newStore.dispatch(fetchCalendar())
newStore.dispatch(fetchActivities())
newStore.dispatch(fetchTestimonial())


ReactDOM.render(
  <Provider store={newStore}>
  <App />
  </Provider>
  , document.getElementById('root'));
