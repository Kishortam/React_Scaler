import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UseEffect from './UseEffect.jsx'
import UseRef from './UseRef.jsx'
import UseMemo from './UseMemo.jsx'
import UseCallback from './UseCallback.jsx'
import UseContext from './UseContext.jsx'
import ContextProvider from './context/AppContext.jsx'
import UseReducer from './UseReducer.jsx'
import CustomHook from './CustomHook.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<App/>
  //<UseEffect />
  //<UseRef/>
  //<UseMemo/>
  //<UseCallback/>

  // <ContextProvider>
  //   <UseContext/>
  // </ContextProvider>

  // <UseReducer/>
  <CustomHook/>

)
