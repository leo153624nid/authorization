import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../reduxStore'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAuth = () => {
    const { email, token, id } = useAppSelector((state) => state.user)
    return {
        isAuth: !!email,
        email,
        token,
        id,
    }
}
