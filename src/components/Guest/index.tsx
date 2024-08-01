import { PropsWithChildren } from "react"


type GuestLayoutT = PropsWithChildren

export default function GuestLayout({ children }: GuestLayoutT) {

    return <div className="container">{children}</div>
}