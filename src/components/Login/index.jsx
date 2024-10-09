import { useLogin } from "../../context/login-context";
import { userLogin } from "../../api/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const { email, password, loginDispatch} = useLogin();

    const navigate = useNavigate();
 
    //onformsubmit - the email and password which are saved to reducers will be sent to auth.js api(takes email and pwd and returns token) returns the token using JWT and at this point since data.accesstoken is true we go to home page
    const onFormSubmit = async (e) => {
        e.preventDefault();   
        const data = await userLogin(email,password);
        console.log({data});
        loginDispatch({
            type:"TOKEN",
            payload:{
                token:data
            }
        })
        if(data?.access_token){
            navigate("/")
        }

    }

    const onEmailChange = (e) => {
        loginDispatch({
            type: "EMAIL",
            payload: {
                value: e.target.value
            }
        })
    }

    const onPasswordChange = (e) => {
        loginDispatch({
            type: "PASSWORD",
            payload: {
                value: e.target.value
            }
        })
    }

    return (
        <>
            <form onSubmit={onFormSubmit} className="bg-white w-[400px] p-10">
                <h2 className="text-3xl flex justify-center pb-3"> Login </h2>
                <div className="flex flex-col gap-1">
                    <span> Email </span>
                    <input className="border-b-2" onChange={onEmailChange} type="email" required placeholder="swetha@gmail.com" />
                </div>
                <div className="flex flex-col gap-1 pt-4">
                    <span> Password </span>
                    <input className="border-b-2" onChange={onPasswordChange} type="password" required placeholder="********" />
                </div>
                <div >
                    <button className="button btn-primary btn-icon cart-btn d-flex align-center justify-center gap cursor btn-margin">Login </button>
                </div>
            </form>
        </>
    )
}