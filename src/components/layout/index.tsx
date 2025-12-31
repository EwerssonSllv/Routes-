import { Outlet } from "react-router"

import { Header } from "../header"

export function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <br/><br/>
            <footer><span>All rights reserved @2026</span></footer>
        </>
    )
}