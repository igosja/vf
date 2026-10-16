import {FormEvent} from "react";
import {postLogin} from "@/features/login/api/loginApi";
import {useRouter} from "next/navigation";

export function useLogin() {
    const router = useRouter();

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const data = await postLogin(formData);

        localStorage.setItem('authToken', data.authToken);
        router.push('/teams');
    }

    return [
        onSubmit,
    ]
}