import Articles from 'containers/Articles/Articles';
import Header from 'components/Header/Header';
import AppContaienr from 'components/Layout/AppContainer';

const App = () => {
  return (
    <>
      <Header />
      <AppContaienr>
        <Articles />
      </AppContaienr>
    </>
  );
};

export default App;
