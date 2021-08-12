import { data } from './db/data'
import Navbar from './comp/Navbar/Navbar'
import Dropdown from './comp/Dropdown/Dropdown'


function App() {
  return (
    <div className="App">
        <Navbar links={ data.navbar } />
        <Dropdown dropdowns= { data.dropdowns }/>
    </div>
  );
}

export default App;
