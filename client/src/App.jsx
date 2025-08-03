import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import ProtectedRoute from "./config/ProtectedRoute";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import { useUser } from "./context/UserContext";



const App = () => {
  const location = useLocation();
  const hideNavRoutes = ["/login", "/register"];
  const shouldShowNav = !hideNavRoutes.includes(location.pathname);

  const {user}  = useUser();
  
  
  return (
    <div className="flex flex-col h-screen bg-stone-950">
      {shouldShowNav && <Navbar />}

      <div className="flex flex-1 overflow-hidden">
        {shouldShowNav &&
          user && (
            <div className="w-[30%] min-w-xs hidden  px-4 pt-7 md:flex justify-center overflow-y-auto">
              <ProfileCard
                favatarSrc={
                  user?.picture ||
                  "data:image/webp;base64,UklGRuYDAABXRUJQVlA4INoDAADQHQCdASq5ALkAPp1KoEslpKMhqzOIGLATiWlu3V+VKD+pvZHjl2jnYbKB4EaTWaJ4xKI72Kftv7OH7HD3FwGUhF43/i9NbGcT9mvyvTt8VXmgcXCwYjI2rI1AT+mIQcMZ8aSzXUsaW8xMM2q9uhC6QB4Tauxp/DGDXxSTt0hb+voXxj7p/qfXdGPH/9QR/3OcqDdgCAsVT72zlsDZR5wjuI0Q7pQkqtMm5pdWlHqTglP2f/l+G7zp4HP7RaC72s4pZVwEn2Q8tJn15tV1e3HxW/OI2rzQRyyb206ZAEa80EdaVw0KUBayOsfz8Lqg+6b2myOL3x1AAP738JPUXa2zQUgJ5VZ8kYxes7JFhrdteGBxSd3+7VIN9wMKADHGOAhQNW21B8zBXyeRNo6hM4A8vDONYlSJ17DVMf6qBRvenJJaZod8UHKLpxRBBWMToDlvKm9jTGC7yGuscphKdY+fYuRjewNDLGYK+GHoRl2vTiyevk6b/Vm9o2aFDHr0RSWa/LfJ0V9ggzhKphg+YcXoOthHW1zC+QCzAmyJXqIM0hCmhdBQ6P4ttiQdsp3k3HCl77JiiFgBiw0xjpQSdM4moiyEKoJRVhScw/an8wJV4XQQrwCHE0nRQ8gCmUmTSZZ0Q24J23Jf0p5jmc9fH9NGarYn1uQlk8yNHB+OmOmeTPa/mJcvc4Lmjv7018SoNb0lHRfVRm50qqXXDUkRSCYLRkQkuKOUyh9wMRLS1Z6jGJNfFKIsuz87ZNmu/huTxMOkBWfmXS01XN+HSTPd+cTZwCi9ZtyeOAE7TcmMYi/IQQmhLlqU/DRnZaGSWZO07H65oxxVvP8WWuCIisTqeoQeAO76LTF1GpdXEfSJMJIuH4HoR7wFxb1CAErI1Xxvn3N3gp3rOyRYbkJjl5m58tluMCNO9EWWi8e1iEZQMq4qq4mI22bVSgzIRWBunVqfR3TeAHysoIbjCUJDvQHqr89kiwnvhm5CT2Iqu+UzKMH84jSJXFGcHmE+5KwrN57DtgUuz6+c1PkuI1XijA9bsNFozyR5NTFXkg5aLXf7yjZUqdM4NrGBwLgimAImSAaAaa78BnBe5PW8nNRE2ckX9YzDAP2a5ALUWX/xN7R8SvoEXptAtaAILkEljwP00H7LYxmq/Pc3nK99lKvtxjt3eECzfNihEQO2dwfzTqaS0WPdw37+5JeGY+xXQ6FnCJn23jGx92tPiDmc1uiMgyDrnBQLg9JwjEoFK1JjbCw5DAfckyXBl2jblCEyV+Cg7YeDOtrr2RO2Be2F1gTbujA/GjJgpuyeApe+OgAAAA=="
                }
                fullName={user.fullname}
                username={user.username}
                bio={"sdfsdfsdfsd"}
                location={"null location"}
                joinedDate={new Date(user.createdAt).toLocaleDateString()}
              />
            </div>
          )}

        <div
          className={`flex-1 w-full ${
            shouldShowNav ? "w-[70%]" : "w-full"
          } overflow-y-auto custom-scrollbar`}
        >
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/register" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/notifications"
              element={
                <ProtectedRoute>
                  <Notifications />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
