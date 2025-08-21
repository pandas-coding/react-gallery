export interface UserDataProps {
  style?: string;
  h1Styles?: Record<string, string>;
  userData: { count: number, rate: string };
}

export default function UserData({ h1Styles, userData }: UserDataProps) {
  return (
    <div style={{ display: 'grid', gap: '12px' }}>
      <h1 style={h1Styles}>用户数据</h1>
      <h2>{userData.count} k</h2>
      <p>{userData.rate}，与上月相比</p>
    </div>
  )
}