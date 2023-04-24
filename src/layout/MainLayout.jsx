import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"

export const MainLayout = ({children}) => {
  return (
    <div>
        <Navbar />
        <div className="mt-[72px]">
          {children}
        </div>
        <Footer />
    </div>
  )
}
