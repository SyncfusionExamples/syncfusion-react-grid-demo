import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { CopyIcon } from '@syncfusion/react-icons'
import '@/app/styles/material-interaction-theme.css';

interface CodeSnippetProps {
  code: string
  language?: string
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language = 'bash' }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="w-full overflow-auto rounded" style={{ border: '1px solid #E0E0E0', borderRadius: '8px', position: 'relative' }}>
      <button
        onClick={handleCopy}
        className={`md3-copy-icon ${copied ? 'md3-state-pressed' : 'md3-state-default'}`}
        style={{ position: 'absolute', top: '12px', right: '12px', zIndex: 10 }}
        title={copied ? "Copied!" : "Copy code"}
      >
        <CopyIcon />
      </button>
      <SyntaxHighlighter
        language={language}
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
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeSnippet
