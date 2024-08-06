'use client';

import ErrorCard from '@/app/(auth)/login-server/_components/error-card';

export default function RegisterError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorCard errorMessage={error.message} reset={reset} />;
}