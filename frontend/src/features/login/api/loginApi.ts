import apiClient from "@/shared/lib/apiClient";
import {IPostLoginResponse} from "@/features/login/types/loginTypes";

export async function postLogin(formData: FormData) {
    const response = await apiClient.post<IPostLoginResponse>('login', formData);
    return response.data;
}
