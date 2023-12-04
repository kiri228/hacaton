import React from "react";
import { Route, Routes, useInRouterContext } from "react-router-dom";
import HomePage from "../pages/HomePages";
import AddPage from "../pages/AddPage";
import AdminProtectedRoutes from "./AdminProtectedRoutes";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import { useAuth } from "../contexts/auth/AuthContextsProvider";
import EditPage from "../pages/EditPage";
import CartPage from "../pages/CartPage";
import SuccessPage from "../pages/SuccessPage";
import HeroPage from "../pages/HeroPage";
import NotFoundPage from "../pages/NotFoundPage";
import UpdatePage from "../pages/UpdatePage";

const MainRoutes = () => {
  const { isAdmin, user } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/add"
        element={
          <AdminProtectedRoutes>
            <AddPage />
          </AdminProtectedRoutes>
        }
      ></Route>
      <Route path="/edit/:id" element={isAdmin() ? <EditPage /> : null} />
      <Route path="/update/:id" element={isAdmin() ? <UpdatePage /> : null} />
      <Route path="/hero/:id" element={<HeroPage />} />
      <Route path="/cart" element={user && <CartPage />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainRoutes;
