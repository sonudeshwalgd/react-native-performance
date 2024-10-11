import React from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import CustomErrorFallback, {
  customErrorHandler,
} from './src/core/components/errorBoundary/ErrorBoundary';
import Navigation from './src/navigations/Navigation';

function App(): React.JSX.Element {
  return (
    <>
      <ErrorBoundary
        FallbackComponent={CustomErrorFallback}
        onError={customErrorHandler}>
        <Navigation />
      </ErrorBoundary>
    </>
  );
}

export default App;
