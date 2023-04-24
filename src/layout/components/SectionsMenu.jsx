import { Link } from "react-router-dom"

export const SectionsMenu = () => {
  return (
    <div className="hidden md:flex gap-[37px]">

        <Link to="/stories">
          <span className="text-xs font-bold font-dm-sans tracking-[2px] uppercase hover:cursor-pointer hover:text-light-grey">Stories</span>
        </Link>

        <Link to="/features">
          <span className="text-xs font-bold font-dm-sans tracking-[2px] uppercase hover:cursor-pointer hover:text-light-grey">Features</span>
        </Link>

        <Link to="/pricing">
          <span className="text-xs font-bold font-dm-sans tracking-[2px] uppercase hover:cursor-pointer hover:text-light-grey">Pricing</span>
        </Link>
    </div>
  )
}
