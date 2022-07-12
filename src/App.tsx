import { useState } from 'react'
import { HeaderPopOS } from '../src/components/pop-os/header-pop-os'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="bg-[#373737] grayscale h-screen w-screen bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 flex items-center justify-center">
      <div className="bg-[#373737] min-h-[90vh] min-w-[80rem] rounded-lg border border-black">
        <HeaderPopOS />
      </div>
    </div>
  )
}

export default App
