import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeSnippetProps {
  code: string
  language?: string
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language = 'bash' }) => {
  return (
    <div className="w-full overflow-auto border border-gray-200 rounded">
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
