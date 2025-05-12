'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Something went wrong!</h2>
        <p className="text-gray-300 mb-8">We apologize for the inconvenience. Please try again later.</p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 font-medium rounded-full"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 text-white bg-white/10 hover:bg-white/20 font-medium rounded-full"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  )
}
