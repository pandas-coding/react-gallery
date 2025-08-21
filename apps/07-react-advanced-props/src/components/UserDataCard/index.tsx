import './styles.css'
import UserData, { type UserDataProps } from '../UserData'

export interface UserDataCardProps extends UserDataProps {
  className: string;
  pClass: string;
  message: string;
}

export default function UserDataCard({ className, pClass, message, ...rest }: UserDataCardProps) {
  return (
    <div className={`userDataCard ${className}`}>
      <UserData {...rest} />
      <p className={pClass}>{message}</p>
    </div>
  )
}