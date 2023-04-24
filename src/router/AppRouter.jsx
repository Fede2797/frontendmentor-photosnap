import { HashRouter, Route, Routes } from "react-router-dom"
import { Home } from "../home/pages/Home"
import { Stories } from "../stories/pages/Stories"
import { Features } from "../features/pages/Features"
import { Pricing } from "../pricing/pages/Pricing"
import { ScrollToTop } from "./ScrollToTop"

export const AppRouter = () => {
  return (
    <HashRouter>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/stories" element={ <Stories /> } />
            <Route path="/features" element={ <Features /> } />
            <Route path="/pricing" element={ <Pricing /> } />
            <Route path="/*" element={ <Home /> } />
        </Routes>
    </HashRouter>
  )
}
