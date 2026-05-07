import { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { CopyIcon } from '@syncfusion/react-icons'

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
  const [copied, setCopied] = useState(false)

  if (!files || files.length === 0) {
    return null
  }

  const activeFileData = files[activeFile]

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeFileData.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="w-full h-full flex flex-col bg-white overflow-hidden rounded" style={{ borderRadius: '8px', border: '1px solid #E0E0E0' }}>
      {/* Horizontal File Tabs */}
      <div className="flex gap-0 overflow-x-auto flex-wrap flex-shrink-0" style={{ borderBottom: '1px solid #E0E0E0', background: '#F5F5F5', borderRadius: '8px 8px 0 0' }}>
        {files.map((file, index) => (
          <button
            key={index}
            onClick={() => setActiveFile(index)}
            className={`px-4 py-2.5 text-sm font-500 whitespace-nowrap transition-all duration-150 border-b-2 ${
              activeFile === index
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-on-surface'
            }`}
            style={{
              backgroundColor: activeFile === index ? '#FFFFFF' : 'transparent',
              borderBottomColor: activeFile === index ? '#6750A4' : 'transparent',
              borderRadius: activeFile === index ? '8px 8px 0 0' : '0',
              marginRight: '4px'
            }}
          >
            <span className="mr-1">📄</span>
            {file.filename}
          </button>
        ))}
      </div>

      {/* File Description */}
      {activeFileData.description && (
        <p className="text-sm text-on-surface-variant bg-white px-4 py-2 rounded border-b border-outline-variant flex-shrink-0">
          {activeFileData.description}
        </p>
      )}

      {/* Code Content with Syntax Highlighting and Copy Button */}
      <div className="flex-1 overflow-auto relative" style={{ position: 'relative' }}>
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 rounded hover:bg-gray-100 transition-colors"
          style={{ zIndex: 10, background: 'transparent', border: 'none', cursor: 'pointer', color: '#6750A4' }}
          title={copied ? "Copied!" : "Copy code"}
        >
          <CopyIcon />
        </button>
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
            paddingTop: '40px',
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
