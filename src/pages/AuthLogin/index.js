import { Login } from "../../components/Login";
import { NavBar } from "../../components/NavBar";

export const AuthLogin = () => {
    return (
        <>
            <NavBar />
            <main className="mt-24 flex flex-col justify-center items-center">
                <Login />
            </main>

        </>
    )
}