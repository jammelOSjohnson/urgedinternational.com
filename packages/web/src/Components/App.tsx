import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
//import { HomeScreen } from '../Screens/HomeScreen';
import { AboutScreen } from '../Screens/About/AboutScreen';

//Import provider
import AppDataProvider from '../Context/AppDataContext';
import CssBaseline from '@material-ui/core/CssBaseline';

const App: React.FC = function App() {
  return (
    <>
      <CssBaseline>
        <main>
          <div>
            <Router>
              <Header/>
                <Route path="/" exact component={AboutScreen} />
              <Footer/>
            </Router>
          </div>
        </main>
        
      </CssBaseline>
    </>
  );
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(){
  return (
    <AppDataProvider>
      <App />
    </AppDataProvider>
  );
};