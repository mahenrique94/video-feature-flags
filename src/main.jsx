import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import FeatureFlags from './FeatureFlags.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FeatureFlags>
      <App />
    </FeatureFlags>
  </React.StrictMode>,
)
