import SignupForm from '@/client/views/signup/signup-form'
import { useNavigate } from 'react-router-dom'
import AuthHooks from 'src/application/hooks/auth.hook'
import SignupCard from 'src/client/views/signup/signup-card'
import { SignupFormValues } from 'src/client/views/signup/signup-form.model'
import { APP_URLS } from 'src/routes/app-urls'



const SignupView = () => {

    const navigate = useNavigate()

    // TODO: Combine it with App Signup to create a single hook
    const { firebaseSignup, isPending, isSuccess, data } = AuthHooks.useFirebaseSignupHook()


    const redirectToLogin = () => {
        navigate(APP_URLS.AUTH.LOGIN)
    }

    const onSubmit = async (data: SignupFormValues) => {
        try {
            await firebaseSignup({ email: data.email, password: data.password })
        } catch (error) {
            console.error("Error creating user:", error);
        }
    }

    return (
        <section
            aria-label="Login View"
            className="min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 flex flex-col items-center justify-center p-4"
        >
            <SignupCard redirectToLogin={redirectToLogin}>
                <SignupForm onSubmit={onSubmit} />
            </SignupCard>
        </section>
    )
}

export default SignupView