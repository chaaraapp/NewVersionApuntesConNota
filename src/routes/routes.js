// importing require modules
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute, Auth } from "../components";

// ##Lazy Function To Load Page Easly Importing From React 

// Home Page
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ResetPassword = lazy(() => import('../pages/ResetPassword'));
const Home = lazy(() => import('../pages/Home'));
const Formulario = lazy(() => import('../pages/Formulario'));
const Cart = lazy(() => import('../pages/Cart'));
const BuscarApuntes = lazy(() => import('../pages/BuscarApuntes'));
const Timer = lazy(() => import('../pages/Timer'));
const Information = lazy(() => import('../pages/Information'));
const NotFound = lazy(() => import('../pages/NotFound'));
const ProductDetails = lazy(() => import('../pages/ProductDetails'));


export default function routes() {
    return (
        // Prevent loading errors with fallback Loader
        <Suspense>

            {/* Route configuration */}
            <Routes>

                <Route path="/login" element={

                    <Auth>

                        <Login />

                    </Auth>

                } />

                <Route path="/signup" element={

                    <Auth>

                        <Register />

                    </Auth>

                } />

                <Route path="/reset-password" element={<ResetPassword />} />

                <Route path="" element={<Home />} />

                <Route path="formulario-venta" element={

                    <PrivateRoute>

                        <Formulario isHasTitle={true} />

                    </PrivateRoute>

                } />
                <Route path="cart" element={

                    <PrivateRoute>

                        <Cart />

                    </PrivateRoute>

                } />

                <Route path="timer" element={<Timer />} />

                <Route path='buscar-apuntes' element={
                    <PrivateRoute>

                        <BuscarApuntes />

                    </PrivateRoute>
                } />

                <Route path='buscar-apuntes/product' element={
                    <PrivateRoute>

                        <ProductDetails />

                    </PrivateRoute>
                } />

                <Route path="information" element={

                    <PrivateRoute>

                        <Information />

                    </PrivateRoute>

                } />

                <Route path="*" element={<NotFound />} />
                {/* End Of Route configuration */}

            </Routes>

        </Suspense>
    );
}
