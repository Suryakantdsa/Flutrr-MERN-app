import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./Component/Body"
import ErrorPage from "./Component/ErrorPage"
import { Provider } from "react-redux"
import store from "./Component/helper/Store/store"
import RecentlyView from "./Component/RecentlyView"
import AddBook from "./Component/AddBook"
import Favourite from "./Component/Favourite"
import BookDetails from "./Component/BookDetails"


function App() {

  return (
    <>
    <Provider store={store}>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body />} errorElement={<ErrorPage/>}/>
          <Route path='/add' element={<AddBook />} />
          <Route path='/favourite' element={<Favourite/>} />
          <Route path='/recentlyview' element={<RecentlyView />} />
          <Route path='/book/:id' element={<BookDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
