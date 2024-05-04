import { FC, PropsWithChildren } from 'react'
import { Header } from './widgets/Header/Header'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
