import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import ReactGA from 'react-ga4'

import MainRouter from './router/MainRouter'
import './styles/App.css'

const GA_ID = import.meta.env.VITE_GA_ID

if (GA_ID) {
  ReactGA.initialize(GA_ID, {
    gtagOptions: {send_page_view: false}
  })
}

function App() {
  const location = useLocation()
  useEffect(() => {
    if (GA_ID && location.pathname) {
      ReactGA.send({
        hitType: 'pageview',
        page: location.pathname
      })
    }
  }, [location])

  return <MainRouter />
}

export default App
