import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'

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

      {/* Code Content with Syntax Highlighting */}
      <div className="flex-1 overflow-auto border border-gray-200">
        <SyntaxHighlighter
          language={activeFileData.language}
          style={oneLight}
          customStyle={{
            margin: 0,
            padding: '16px',
            fontSize: '0.875rem',
            lineHeight: '1.6',
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, monospace",
            minHeight: '100%',
          }}
          wrapLines={true}
          wrapLongLines={true}
        >
          {activeFileData.code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
