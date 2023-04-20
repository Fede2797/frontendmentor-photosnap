import { HashRouter, Route, Routes } from "react-router-dom"
import { Home } from "../home/pages/Home"
import { Stories } from "../stories/pages/Stories"

export const AppRouter = () => {
  return (
    <HashRouter>
    {/* <BrowserRouter> */}

        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/stories" element={ <Stories /> } />
            {/* <Route path="/crew" element={ <Crew /> } /> */}
            {/* <Route path="/technology" element={ <Technology /> } /> */}
            {/* <Route path="/*" element={ <Home /> } /> */}
        </Routes>

    {/* </BrowserRouter> */}
    </HashRouter>
  )
}
