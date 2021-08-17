import React from 'react';

function useMounted() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);

    return () => setIsMounted(false);
  }, []);

  return isMounted;
}

export default useMounted;
