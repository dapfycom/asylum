import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import {
  AxiosInterceptorContext,
  DappProvider,
  HomeLayout,
  Layout,
  NotificationModal,
  SignTransactionsModals,
  // uncomment this to use the custom transaction tracker
  // TransactionsTracker
  TransactionsToastList
} from '@/components';

import {
  apiTimeout,
  environment,
  sampleAuthenticatedDomains,
  walletConnectV2ProjectId
} from '@/config';
import { RouteNamesEnum } from '@/localConstants';
import { Home, PageNotFound } from '@/pages';
import { routes } from '@/routes';
import PagesLayout from './components/Layout/PagesLayout';

const AppContent = () => {
  return (
    <DappProvider
      environment={environment}
      customNetworkConfig={{
        name: 'customConfig',
        apiTimeout,
        walletConnectV2ProjectId
      }}
      dappConfig={{
        shouldUseWebViewProvider: true,
        logoutRoute: RouteNamesEnum.home
      }}
      customComponents={{
        transactionTracker: {
          // uncomment this to use the custom transaction tracker
          // component: TransactionsTracker,
          props: {
            onSuccess: (sessionId: string) => {
              console.log(`Session ${sessionId} successfully completed`);
            },
            onFail: (sessionId: string, errorMessage: string) => {
              console.log(`Session ${sessionId} failed. ${errorMessage ?? ''}`);
            }
          }
        }
      }}
    >
      <AxiosInterceptorContext.Listener>
        <Layout>
          <TransactionsToastList />
          <NotificationModal />
          <SignTransactionsModals />
          <Routes>
            <Route
              path='/'
              element={
                <HomeLayout>
                  <Home />
                </HomeLayout>
              }
            />
            <Route
              path='/*'
              element={
                <PagesLayout>
                  <Routes>
                    {routes.map((route) => (
                      <Route
                        path={route.path}
                        key={`route-key-'${route.path}`}
                        element={<route.component />}
                      />
                    ))}
                    <Route path='*' element={<PageNotFound />} />
                  </Routes>
                </PagesLayout>
              }
            />
          </Routes>
        </Layout>
      </AxiosInterceptorContext.Listener>
    </DappProvider>
  );
};

export const App = () => {
  return (
    <AxiosInterceptorContext.Provider>
      <AxiosInterceptorContext.Interceptor
        authenticatedDomains={sampleAuthenticatedDomains}
      >
        <Router>
          <AppContent />
        </Router>
      </AxiosInterceptorContext.Interceptor>
    </AxiosInterceptorContext.Provider>
  );
};
