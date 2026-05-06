import { useState } from 'react'

interface CodeFile {
  filename: string
  language: string
  code: string
  description?: string
}

interface CodeViewerProps {
  files: CodeFile[]
  defaultFile?: number
}

export default function CodeViewer({ files, defaultFile = 0 }: CodeViewerProps) {
  const [activeFile, setActiveFile] = useState<number>(defaultFile)

  if (!files || files.length === 0) {
    return null
  }

  const activeFileData = files[activeFile]

  return (
    <div className="w-full h-full flex flex-col bg-white overflow-hidden">
      {/* Horizontal File Tabs */}
      <div className="flex gap-0 overflow-x-auto border-b border-gray-300 flex-wrap flex-shrink-0">
        {files.map((file, index) => (
          <button
            key={index}
            onClick={() => setActiveFile(index)}
            className={`px-2 py-1.5 text-sm font-500 whitespace-nowrap transition-all duration-150 border-b-2 ${
              activeFile === index
                ? 'border-blue-600 text-blue-600 bg-blue-50'
                : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <span className="mr-1">📄</span>
            {file.filename}
          </button>
        ))}
      </div>

      {/* File Description */}
      {activeFileData.description && (
        <p className="text-sm text-gray-600 bg-gray-50 px-2 py-1 rounded border border-gray-200 flex-shrink-0">
          {activeFileData.description}
        </p>
      )}

      {/* Code Content - Left Aligned */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-auto flex-1 border border-gray-700 leading-relaxed text-left font-mono whitespace-pre-wrap break-words" style={{ height: 'calc(100vh - 120px)', fontFamily: 'monospace' }}>
        <code className="bg-gray-900 text-left text-sm">{activeFileData.code}</code>
      </pre>
    </div>
  )
}
