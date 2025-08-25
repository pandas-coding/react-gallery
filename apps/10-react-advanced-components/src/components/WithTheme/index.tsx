import React from 'react'

function WithTheme<P extends Record<string, unknown>>(WrappedComponent: React.ComponentType<P & { theme: string }>): (props: P) => React.ReactNode {
  return (props: P) => <WrappedComponent theme="dark" {...props} />;
}

export default WithTheme;
