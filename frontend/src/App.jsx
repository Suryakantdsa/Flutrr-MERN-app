import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddMovie from "./Component/AddMovie"
import Body from "./Component/Body"
import ErrorPage from "./Component/ErrorPage"
import { Provider } from "react-redux"
import store from "./Component/helper/Store/store"
import WishList from "./Component/WishList"
import MovieDetails from "./Component/MovieDetails.jsx"
import RecentlyView from "./Component/RecentlyView"


function App() {

  return (
    <>
    <Provider store={store}>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body />} errorElement={<ErrorPage/>}/>
          <Route path='/addmovie' element={<AddMovie />} />
          <Route path='/wishlist' element={<WishList />} />
          <Route path='/recentlyview' element={<RecentlyView />} />
          <Route path='/movie/:id' element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
