import type {loginRequestData, loginResponseData} from "@shared/types/auth.types.ts";
import {axiosInstance} from "@shared/api/axiosInstance.ts";

/** TODO:
 * 1. Добавить регистрацию пользователя
 * 2. Добавить выход из системы
 * 3. Добавить рефреш токена
 * 4. С тайпскриптом порабоать
 */

class AuthService {
    async login(data: loginRequestData): Promise<loginResponseData> {
        try {
            const response = await axiosInstance.post('/login', data)
            return response.data
        }
        catch (e) {
            console.log('Ошибка:', e.response.data.error)
        }
    }
}

export const authService = new AuthService();