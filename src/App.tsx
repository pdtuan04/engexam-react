import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import CreateCourse from './screens/features/course/course.create/course.create'

function App() {
  return (
    <div className="App">
      <h1>Ứng dụng Quản lý Trung tâm Tiếng Anh</h1>
      <hr />
      <CreateCourse />
      
    </div>
  );
}

export default App
