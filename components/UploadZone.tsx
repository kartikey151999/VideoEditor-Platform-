'use client'

import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { useDropzone } from 'react-dropzone'
import { setVideoFile, setUploadProgress } from '@/redux/slices/videoSlice'
import { Progress } from '@/components/ui/progress'

export default function UploadZone() {
  const dispatch = useDispatch()
  const { previewURL, uploadProgress, file } = useSelector((state: RootState) => state.video)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const video = acceptedFiles[0]
    dispatch(setVideoFile(video))

    // Simulate upload progress
    let progress = 0
    const interval = setInterval(() => {
      progress += 10
      if (progress > 100) {
        clearInterval(interval)
      } else {
        dispatch(setUploadProgress(progress))
      }
    }, 200)
  }, [dispatch])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: { 'video/*': [] } })

  return (
    <div className="w-full max-w-xl mx-auto mt-10 space-y-4">
      <div {...getRootProps()} className={`border-2 border-dashed p-10 rounded-xl text-center cursor-pointer transition-colors ${
        isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
      }`}>
        <input {...getInputProps()} />
        <p className="text-gray-700">Drag and drop a video here, or click to select one</p>
      </div>

      {uploadProgress > 0 && uploadProgress < 100 && (
        <Progress value={uploadProgress} className="w-full" />
      )}

      {previewURL && (
        <div className="rounded overflow-hidden shadow-md mt-4">
          <video src={previewURL} controls className="w-full h-auto rounded" />
          <p className="text-sm text-gray-600 mt-1 truncate px-2">{file?.name}</p>
        </div>
      )}
    </div>
  )
}
