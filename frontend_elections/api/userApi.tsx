import ApiManager from "./ApiManager";

interface LoginData {
    username: string;
    password: string;
}

export const userLogin = async (data: LoginData) => {
    try {
        const result = await ApiManager("/login", {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            data:data
        });
        return result;
    } catch (error: any) {
        return error.response.data
    }
};