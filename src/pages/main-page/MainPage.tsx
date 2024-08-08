import MainPageContainer from '../../entities/main-page-container/MainPageContainer';
import Header from '../../widgets/header/Header';
import Main from '../../widgets/main/Main';

const MainPage = () => {
  return (
    <MainPageContainer>
      <Header />
      <Main />
    </MainPageContainer>
  );
}

export default MainPage;
