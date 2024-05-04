import { useAppSelector } from '@/libs/store/storeHooks'

export const useAuth = () => {
  const auth = useAppSelector((state) => state.auth)

  return auth
}
