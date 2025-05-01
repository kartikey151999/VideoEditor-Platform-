// === Upload Page ===
// app/upload/page.tsx
'use client'
import { useState } from 'react'
import { useDropzone } from 'react-dropzone'

export default function UploadPage() {
  const [fileName, setFileName] = useState('')
  const [isUploading, setIsUploading] = useState(false)

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    setFileName(file.name)
    setIsUploading(true)
    setTimeout(() => setIsUploading(false), 2000)
  }

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-xl mx-auto p-6 bg-white rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Upload Your Video</h2>
        <div {...getRootProps()} className="border-dashed border-2 border-blue-400 p-10 text-center rounded cursor-pointer hover:bg-blue-100 transition">
          <input {...getInputProps()} />
          <p className="text-gray-600 font-medium">Drag & drop a video file here, or click to select</p>
        </div>
        {fileName && <div className="mt-4 text-sm text-gray-700">Selected File: <strong>{fileName}</strong></div>}
        {isUploading && <div className="mt-4 animate-pulse text-blue-600 font-semibold">Uploading...</div>}
      </div>
    </div>
  )
}

