import useWindowSize from './hooks/useWindowSize.ts'
import ResponsiveContent from './components/ResponsiveContent'
import useBreakPoint from './hooks/useBreakPoint.ts'

function App() {
  const windowSize = useWindowSize(500);
  const breakpoint = useBreakPoint(windowSize.width)

  return (
    <main className="container">
      <div>
        <h1>Width: {windowSize.width}</h1>
        <h1>Height: {windowSize.height}</h1>
        <h1>Break Point: {breakpoint}</h1>
      </div>
      <ResponsiveContent/>
    </main>
  );
}

export default App;