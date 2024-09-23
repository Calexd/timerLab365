// import { HomePage } from './pages/home/index'
// import { Layout  } from './templates'
// import { HistoryPage } from './pages/history'
import { RouterProvider } from 'react-router-dom'
import {routes} from './routes'
import React from 'react'


export function App() {
  return (
      <>
        <RouterProvider router={routes} />
        {/* <Layout > */}
          {/* <HomePage/> */}
          {/* <HistoryPage /> */}
        {/* </Layout> */}
      </>
  )
}

export default App 