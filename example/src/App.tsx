import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { initializeSDK } from 'react-native-au10tixsdk';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    const token = 'eyJraWQiOiJTUWhzTHV4SGdtdjd5cEk3TXRWbW9icGxPNEhSRVJVRzU4ZmMycjI1dFVvIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULlNseW0yNk8wN0locVVfdzFkNzkydEtMbGlhOU52d3VqdzFpY2lXSURhWjQiLCJpc3MiOiJodHRwczovL2xvZ2luLmF1MTB0aXguY29tL29hdXRoMi9hdXMzbWx0czVzYmU5V0Q4VjM1NyIsImF1ZCI6ImF1MTB0aXgiLCJpYXQiOjE2NTk4MDQ3MjQsImV4cCI6MTY1OTg5MTEyNCwiY2lkIjoiMG9hNG1kaTNwNHJzYWt5MlMzNTciLCJzY3AiOlsib2NzL3Njb3BlOm1vYmlsZXNkayIsInNkYyIsIm1lZGlhIiwicGZsIiwibW9iaWxlc2RrIl0sInN1YiI6IjBvYTRtZGkzcDRyc2FreTJTMzU3IiwiYXBpVXJsIjoiaHR0cHM6Ly9ldXMtYXBpLmF1MTB0aXhzZXJ2aWNlc3N0YWdpbmcuY29tIiwiYm9zVXJsIjoiaHR0cHM6Ly9ib3MtZXVzLXdlYi5hdTEwdGl4c2VydmljZXNzdGFnaW5nLmNvbSIsImNsaWVudE9yZ2FuaXphdGlvbk5hbWUiOiJBVTEwVElYIiwiY2xpZW50T3JnYW5pemF0aW9uSWQiOjMyNn0.VWIrUsYaIwWxFJJiZrreGHJc708rEg9jM40yLLqig3g2debzz8_HyPue3TfZIQBJ9o2HkFgykJNFy1-Qq6u7l3_QNSphDUgOXg6p_yeQSolP0mudVXT25kdQdA7BDIyu-6P3-10WUebKyE4SgnCQruu9hExxV-aJBLX6guxmsbWGR7NalWtUqYgCsLVHx4EDxDCWBOjcujZfi6rUlsGQrXYO1CJv7qs0c0b1slETO5-Ldw21ykr9EK-5lk4jlcm0yFcYh-TEO_WWDcCIbX8CdrX1Gh_voj4vxXqO9sc5EYSKBkEqhLr6fWKVDLcJSmkPuSjIGgWYWZEJLXI-tCLVhA'
    initializeSDK(token).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
