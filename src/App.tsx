import Articles from 'containers/Articles/Articles';
import Header from 'components/Header/Header';
import AppContaienr from 'components/Layout/AppContainer';
import AboutMe from 'containers/AboutMe/AboutMe';

const App = () => {
  return (
    <>
      <Header />
      <AppContaienr>
        <AboutMe />
        <Articles />
      </AppContaienr>
    </>
  );
};

export default App;
