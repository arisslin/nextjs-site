'use client';

type ErrorProps = { reset: () => void; error: Error & { digest?: string } };

export default function Error({ reset, error }: ErrorProps) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
