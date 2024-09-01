import LandingPageView from "../views/landingpage/landingpage.view";


// interface IHomeAction {
//     isAuth: boolean;
// }
// const HomeAction = (props: IHomeAction) => {
//     const { isAuth } = props;
//     const navigate = useNavigate()

//     const redirectToApp = () => navigate(APP_URLS.APP.ROOT)
//     const redirectToLogin = () => navigate(APP_URLS.AUTH.LOGIN)

//     const actionHandler = isAuth ? redirectToApp : redirectToLogin;
//     const actionText = isAuth ? "Go to App" : "Go to Login" // Go to App 


//     return <Button className="w-min" onClick={actionHandler}>
//         {actionText}
//     </Button>
// }

const HomePage = () => {

    return (

       <LandingPageView />
    )
}

export default HomePage