import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"

export const MainLayout = ({children}) => {
  return (
    <div>
        <Navbar />
        {children} 
        <Footer />
    </div>
  )
}
