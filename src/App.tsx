import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./layouts"
import { Home } from "./pages"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}