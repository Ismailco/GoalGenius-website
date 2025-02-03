import React from 'react'

// Mark as server component
export default async function NotesPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">My Notes</h1>

      <div className="grid gap-4">
        {/* Sample static notes for now */}
        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Sample Note 1</h2>
          <p className="text-gray-600">This is a sample note content.</p>
        </div>

        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Sample Note 2</h2>
          <p className="text-gray-600">Another sample note content.</p>
        </div>
      </div>
    </div>
  )
}
