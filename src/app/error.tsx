'use client';

import { useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          cursor: 'pointer',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
        }}
      >
        Try again
      </button>
    </div>
  );
}
