"use client"
import React, { useState } from "react"
import axios from 'axios'
import { useRouter } from 'next/navigation'

function VideoUpload() {
    const [file, setFile] = useState<File | null>(null)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [isUploading, setIsUploading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)

    const router = useRouter()

    // Max file size of 70MB
    const MAX_FILE_SIZE = 70 * 1024 * 1024;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formElement = e.currentTarget;

        setError(null)
        setSuccess(null)

        if (!file) return;
        
        if (file.size > MAX_FILE_SIZE) {
            setError("File size exceeds the 70MB limit.");
            return;
        }

        setIsUploading(true)
        const formData = new FormData();
        formData.append("file", file);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("originalSize", file.size.toString());

        try {
            await axios.post("/api/video-upload", formData)

            setSuccess("Video uploaded successfully!")
            setTitle("")
            setDescription("")
            setFile(null)
            formElement.reset()

            // 🚀 Automatically redirect to homepage after a successful upload
            setTimeout(() => {
                router.push("/home");
            }, 1000); // Short delay so users see the success message briefly

        } catch (error) {
            console.error("Video Upload Failed:", error)
            setError("Failed to upload video. Please try again.")
        } finally {
            setIsUploading(false)
        }
    }

    return (
        <div className="container mx-auto p-4 max-w-2xl">
          <h1 className="text-2xl font-bold mb-4 text-base-content">Upload Video</h1>
          <form onSubmit={handleSubmit} className="space-y-4">

            {error && (
                <div className="alert alert-error mb-4">
                    <span>{error}</span>
                </div>
            )}

            {success && (
                <div className="alert alert-success mb-4">
                    <span>{success}</span>
                </div>
            )}

            <div>
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="textarea textarea-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Video File</span>
              </label>
              <input
                type="file"
                accept="video/*"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="file-input file-input-bordered w-full"
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={isUploading}
            >
              {isUploading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Uploading...
                  </>
              ) : "Upload Video"}
            </button>
          </form>
        </div>
      );
}

export default VideoUpload