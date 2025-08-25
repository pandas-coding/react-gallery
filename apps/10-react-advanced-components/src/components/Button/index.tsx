import WithTheme from '../WithTheme'

export interface ButtonProps {
  children?: React.ReactNode
  theme: string
}
// eslint-disable-next-line react-refresh/only-export-components
function Button({ children, theme }: ButtonProps) {
  return (
    <button
      style={{
        boxShadow:
          theme === 'dark' ? '0 0 48px rgba(255, 255, 255, 0.4)' : 'none',
      }}
    >
      {children}
    </button>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default WithTheme(Button)
