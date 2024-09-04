import { useMutation } from "@tanstack/react-query"
import { User } from "firebase/auth"
import AuthApi from "src/api/auth/auth.api"
import { SignupFormValues } from "src/client/views/signup/signup-form.model"
import { useToast } from "src/components/ui"


interface UseFirebaseSignupHookProps {
    onSuccess?: (data: User) => void
}
const useFirebaseSignupHook = ({ onSuccess: onSuccessCallback }: UseFirebaseSignupHookProps) => {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationFn: async (data: SignupFormValues) => AuthApi.createUser(data.email, data.password),
        onSuccess: (data) => {
            onSuccessCallback?.(data)
            console.log(data)
        },
        onError: (error) => {
            toast({
                variant: "destructive",
                title: "Error",
                description: error.message
            })
            console.error(error)
        }

    })
    const { isPending, isSuccess, data, mutateAsync: firebaseSignup } = mutation

    return {
        isPending,
        isSuccess,
        data,
        firebaseSignup
    }
}


interface UseFirebaseLoginHookProps {
    onSuccess?: (data: User) => void
}
const useFirebaseLoginHook = ({ onSuccess: onSuccessCallback }: UseFirebaseLoginHookProps) => {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationFn: async (data: SignupFormValues) => AuthApi.signInUser(data.email, data.password),
        onSuccess: (data) => {
            onSuccessCallback?.(data)
            console.log(data)
        },
        onError: (error) => {
            toast({
                variant: "destructive",
                title: "Error",
                description: error.message
            })
            console.error(error)
        }
    })
    const { isPending, isSuccess, data, mutateAsync: firebaseLogin } = mutation

    return {
        isPending,
        isSuccess,
        data,
        firebaseLogin
    }
}

const useFirebaseLogoutHook = () => {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationFn: async () => AuthApi.signOutUser(),
        onSuccess: (data) => {
            console.log(data)
        },
        onError: (error) => {
            toast({
                variant: "destructive",
                title: "Error",
                description: error.message
            })
            console.error(error)
        }
    })
    const { isPending, isSuccess, data, mutateAsync: firebaseLogout } = mutation

    return {
        isPending,
        isSuccess,
        data,
        firebaseLogout
    }
}

const AuthHooks = {
    useFirebaseSignupHook,
    useFirebaseLoginHook,
    useFirebaseLogoutHook
}

export default AuthHooks