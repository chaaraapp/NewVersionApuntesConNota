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
const Timer = lazy(() => import('../pages/Timer'));
const Information = lazy(() => import('../pages/Information'));
const NotFound = lazy(() => import('../pages/NotFound'));


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

                <Route path="timer" element={<Timer />} />

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
