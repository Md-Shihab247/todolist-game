import Common from "./components/Common";
import Home from "./components/Home";
import NumberGuess from "./components/NumberGuess";
import Todo from "./components/Todo"
import { Routes, Route } from "react-router";
function App() {

  return (
    <>
        
        <Routes>
          <Route element={<Common/>}>
            <Route index element={<Home />} />
            <Route path="todol-list" element={<Todo/>} />
            <Route path="number-guess-game" element={<NumberGuess />} />
          </Route>
      </Routes>
    </>
  )
}

export default App
