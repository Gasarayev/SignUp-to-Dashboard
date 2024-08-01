import { memo } from "react"


const Footer = () => {
    return (
       <footer className="position-sticky bottom-0 start-0 p-2 bg-dark text-white">
         <div className="container">&copy; 2024 - RFE204</div>
       </footer>
    )
}


export default memo(Footer)