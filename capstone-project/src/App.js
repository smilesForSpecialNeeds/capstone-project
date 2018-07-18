import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import TopNav from './components/TopNav'
import SideNav from './components/SideNav'
import PhotoGallery from './components/PhotoGallery'
import Services from './components/Services'
import AdminMain from './components/AdminMain'
import Calendar from './components/Calendar'
import ClientMain from './components/ClientMain'
import Registration from './components/Registration'
import ProviderMain from './components/ProviderMain'
import OurPeople from './components/OurPeople'
import Authentication from './components/Authentication'
import TestimonialList from './components/TestimonialList'
import './App.css'




class App extends Component {
  render() {
    return (
      <Router>
				<div>
					<TopNav />

					<Route exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
          <Route exact path="/testimonial" component={TestimonialList} />
					<Route exact path="/about" component={About} />
          <Route exact path="/register" component={Registration} />
					<Route exact path="/photos" component={PhotoGallery} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/client" component={Authentication(ClientMain)} />
          <Route exact path="/admin" component={Authentication(AdminMain)} />
          <Route exact path="/provider" component={Authentication(ProviderMain)} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/ourpeople" component={OurPeople} />



				</div>
			</Router>
    );
  }
}

export default App;
