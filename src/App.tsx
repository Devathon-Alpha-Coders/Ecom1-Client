import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { useAtom } from "jotai";
import authAtom from "@/shared/store/auth.store";
import { Button } from "@/components/ui/button";


function App() {
  const [auth, setAuth] = useAtom(authAtom)
  const isAuthenticated = auth.isAuth

  const logout = () => setAuth(prev => ({
    ...prev,
    isAuth: false
  }))
  const login = () => setAuth(prev => ({
    ...prev,
    isAuth: true
  }))

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
          {
            isAuthenticated ?
              <div className="bg-green-500">
                Authenticated
                <Button
                  onClick={logout}
                >Logout</Button>

              </div>
              :
              <div className="bg-red-500">
                UnAuthenticated
                <Button
                  onClick={login}
                >Login</Button>
              </div>
          }
        </>}
        />

        <Route path="/private" element={'private'} />
        <Route path="/public" element={'public'} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
