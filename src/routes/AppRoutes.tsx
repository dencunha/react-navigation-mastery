import { Routes, Route} from "react-router"

import { Home } from "../pages/Home"
import { Details } from "../pages/Details"
import { Products } from "../pages/Products"
import { NotFound } from "../pages/NotFount"
import { Layout } from "../components/Layout"

export function AppRoutes() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" index element={<Home />} />
                <Route path="/products" element={<Products />} />
            </Route>
            
            <Route path="/details/:id" element={<Details />} />
            
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}