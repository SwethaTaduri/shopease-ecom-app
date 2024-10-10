import { Login, NavBar } from "../../components";

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