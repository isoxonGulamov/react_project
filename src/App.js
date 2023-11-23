import { Routes ,Route} from 'react-router-dom';
import './App.css';
import { MainLayout } from './layouts/main-layout';
import { Home } from './pages/home/home';
import { Aksiya } from './pages/aksiya/aksiya';
import { Dostavka } from './pages/dostavka/dostavka';
import { Contacts } from './pages/contacts/contacts';
import { Skupka } from './pages/skupka/skupka';
import { Yordam } from './pages/yordam/yordam';
import { Kredit } from './pages/kredit/kredit';


function App() {
  return (
  <>
  <Routes>
  <Route path='/' element={<MainLayout/>}>
    <Route index element={<Home/>}/>
    <Route path='aksiya' element={<Aksiya/>}/>
    <Route path='dostavka' element={<Dostavka/>}/>
     <Route path='contacts' element={<Contacts/>}/>
     <Route path='skupka' element={<Skupka/>}/>
     <Route path='yordam' element={<Yordam/>}/>
     <Route path='kredit' element={<Kredit/>}/>
  </Route>
  </Routes>
  </>
  );
}

export default App;
