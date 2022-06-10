import { GlobalStyle } from './globalStyle';
import Router from './Router';
import { ReactQueryDevtools } from 'react-query/devtools';
import { HelmetProvider } from 'react-helmet-async'
function App() {
  return (
    <>
      <HelmetProvider>
      <GlobalStyle />
      <Router />
      {/* <ReactQueryDevtools /> */}
      </HelmetProvider>
    </>
  );
}

export default App;
