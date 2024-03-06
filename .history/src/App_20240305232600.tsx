import React from 'react'
import PermissionPage from './PermissionPage'
import ProductList from './ProductList'
import ShopDashboardCard from './pages/ShopPages'

const App = () => {
  return (
    <div>
      <PermissionPage/>
      <ProductList/>
      <ShopDashboardCard/>
    </div>
  )
}

export default App

