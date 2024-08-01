
import { ReactNode, memo } from "react";
import Header from "./Header";
import Footer from "./Footer";


interface LayoutI {
    children: ReactNode
}

function Layout({ children }: LayoutI) {
    return (
        <div className="position-relative">
            <Header />
            <main className="min-vh-100 my-3">
                <div className="container">{children}</div>
            </main>
            <Footer />
        </div>
    )
}
export default memo(Layout)