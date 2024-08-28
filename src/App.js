import React from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/dashboard";
import AllProducts from "./Pages/Product/productList";
import AddProducts from "./Pages/Product/add-product";
import CancelOrders from "./Pages/Orders/CancelOrder";
import ShipOrders from "./Pages/Orders/Shipped";
import Orders from "./Pages/Orders/allorders";
import Pending from "./Pages/Orders/pendingOrders";
import Blog from "./Pages/Blogs/blogs";
import AddPost from "./Pages/Blogs/add-blog";
import Header from "./Components/Header/header";
import SideBar from "./Components/Sidebar/sidebar";
import LandingPage from "./Pages/Dashboard/dashboard"; // New Landing Page Component
import NoPage from "./Pages/nopage/NoPage";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        {/* <Route path="/" element={<LandingPage />} /> */}

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <div style={{ display: "flex" }}>
              <SideBar />
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <Header />
                <main style={{ padding: 0, flex: 1 }}>
                  <Dashboard />
                </main>
              </div>
            </div>
          }
        />
        <Route
          path="/all-products"
          element={
            <div style={{ display: "flex" }}>
              <SideBar />
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <Header />
                <main style={{ padding: 0, flex: 1 }}>
                  <AllProducts />
                </main>
              </div>
            </div>
          }
        />
        <Route
          path="/add-products"
          element={
            <div style={{ display: "flex" }}>
              <SideBar />
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <Header />
                <main style={{ padding: 0, flex: 1 }}>
                  <AddProducts />
                </main>
              </div>
            </div>
          }
        />
        <Route
          path="/order-list"
          element={
            <div style={{ display: "flex" }}>
              <SideBar />
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <Header />
                <main style={{ padding: 0, flex: 1 }}>
                  <Orders />
                </main>
              </div>
            </div>
          }
        />
        <Route
          path="/pending-orders"
          element={
            <div style={{ display: "flex" }}>
              <SideBar />
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <Header />
                <main style={{ padding: 0, flex: 1 }}>
                  <Pending />
                </main>
              </div>
            </div>
          }
        />
        <Route
          path="/cancel-order"
          element={
            <div style={{ display: "flex" }}>
              <SideBar />
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <Header />
                <main style={{ padding: 0, flex: 1 }}>
                  <CancelOrders />
                </main>
              </div>
            </div>
          }
        />
        <Route
          path="/shipped-orders"
          element={
            <div style={{ display: "flex" }}>
              <SideBar />
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <Header />
                <main style={{ padding: 0, flex: 1 }}>
                  <ShipOrders />
                </main>
              </div>
            </div>
          }
        />
        <Route
          path="/blogslist"
          element={
            <div style={{ display: "flex" }}>
              <SideBar />
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <Header />
                <main style={{ padding: 0, flex: 1 }}>
                  <Blog />
                </main>
              </div>
            </div>
          }
        />
        <Route
          path="/add-post"
          element={
            <div style={{ display: "flex" }}>
              <SideBar />
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <Header />
                <main style={{ padding: 0, flex: 1 }}>
                  <AddPost />
                </main>
              </div>
            </div>
          }
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;