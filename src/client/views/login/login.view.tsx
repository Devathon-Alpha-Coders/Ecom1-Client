import { APP_URLS } from "@/routes/app-urls";
import { useNavigate } from "react-router-dom";
import AuthHooks from "src/application/hooks/auth.hook";
import GoogleLoginController from "src/client/views/login/google-login-controller";
import LoginCard from "src/client/views/login/login-card";
import LoginForm from 'src/client/views/login/login-form';
import { LoginFormValues } from 'src/client/views/login/login-form.model';
import useRedirectUrl from "src/shared/hooks/use-redirect-url";

const LoginView = () => {

  // const { navigateToRedirectUrl } = useRedirectUrl(APP_URLS.APP.ROOT)
  const { firebaseLogin, isPending, isSuccess, data } = AuthHooks.useFirebaseLoginHook({
    onSuccess: (data) => {
      // navigateToRedirectUrl()
      console.log(data)
    }
  })

  const navigate = useNavigate()
  const redirectToForgetPassword = () => navigate(APP_URLS.AUTH.FORGET_PASSWORD)
  const redirectToCreateAccount = () => navigate(APP_URLS.AUTH.SIGNUP)


  // const [_, setAuth] = useAuthStore()


  const onSubmit = async (data: LoginFormValues) => {
    console.log('Login attempt with:', data);
    try {
      await firebaseLogin(data)
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <section
      aria-label="Login View"
      className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 flex flex-col items-center justify-center p-4">
      <LoginCard
        forgotPassword={redirectToForgetPassword}
        createAccount={redirectToCreateAccount}
      >
        <LoginForm
          onSubmit={onSubmit}
        />
        <GoogleLoginController />
      </LoginCard>
    </section>
  );
}

export default LoginView;
