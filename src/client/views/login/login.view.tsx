// import { Button } from "@/components/ui/button";
// import authAtom from "@/shared/store/auth.store";
// import { useAtom } from "jotai";

// const LoginView = () => {

//     const [_, setAuth] = useAtom(authAtom)

//     const loginHandler = () => setAuth(prev => ({
//         ...prev,
//         isAuth: true
//     }))

//     return (
//         <div>
//             <h1>Login Screen</h1>

//             <Button onClick={loginHandler}>
//                 Login
//             </Button>
//         </div>
//     )
// }

// export default LoginView
// import { Button } from "@/components/ui/button";
import authAtom from "@/shared/store/auth.store";
import { useAtom } from "jotai";

// import React from 'react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ShoppingBag } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { APP_URLS } from "@/routes/app-urls";

export default function LoginPage() {

  const navigate = useNavigate()
  const redirectToForgetPassword = () => navigate(APP_URLS.AUTH.FORGET_PASSWORD)
  const redirectToCreateAccount = () => navigate(APP_URLS.AUTH.SIGNUP)


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

      const [_, setAuth] = useAtom(authAtom)

    const loginHandler = () => setAuth(prev => ({
        ...prev,
        isAuth: true
    }))

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password });
    // Here you would typically handle the login logic

    loginHandler();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <ShoppingBag className="h-12 w-12 text-pink-500" />
          </div>
          <CardTitle className="text-2xl font-bold text-center">Login to ShopEase</CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <Button type="submit" className="w-full">
              Log in
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="ghost" size="sm" onClick={redirectToForgetPassword}>
            Forgot password?
          </Button>
          <Button variant="ghost" size="sm"  onClick={redirectToCreateAccount}>
            Create account
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}