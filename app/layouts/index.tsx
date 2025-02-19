import { Outlet } from "react-router"
import Header from "~/components/Header/Header"

function Index() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default Index
