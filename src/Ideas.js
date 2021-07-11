import { useState } from 'react'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import './assets/stylesheet.css'
import TapButton from './components/TapButton'
import GivenIdea from './components/GivenIdea'
import AboutPage from './components/AboutPage'
import data from './data/data.json'

const Ideas = () => {

  const [ideaStatus, setIdeaStatus] = useState('start')
  const [ideaData, setIdeaData] = useState({
    name: 'example',
    image: '',
    link: 'https://www.example.com'
  })
  const [loading, setLoading] = useState(false)

  let usedIdeas = []

  const handleTapButton = (event) => {
    setLoading(true)
    setTimeout(() => {
      if (ideaStatus === 'start') {
        setIdeaStatus('display')
      }
      let rand = Math.floor(Math.random() * data.length)
      while (usedIdeas.includes(rand)) {
        rand = Math.floor(Math.random() * data.length)
      }
      const selectedItem = data[rand]
      usedIdeas.push(rand)
      setIdeaData({
        name: selectedItem["name"],
        image: selectedItem["image"],
        link: selectedItem["link"]
      })
    }, 1500)

  }

  const handleLoading = (event) => {
    setLoading(false)
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <main className="ideas-main ideas-main-start">
            <GivenIdea
              name={ideaData.name}
              image={ideaData.image}
              link={ideaData.link}
              status={ideaStatus}
              loadFunc={handleLoading}
              loadStatus={loading} />
            <TapButton
              status={ideaStatus}
              func={handleTapButton}
            />
          </main>
          <footer className="ideas-footer">
            <Link to="/about">about</Link>
          </footer>
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Ideas;
