import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface CodeSnippetProps {
  code: string
  language?: string
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language = 'bash' }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={oneLight}
      customStyle={{
        margin: 0,
        padding: '16px',
        backgroundColor: '#ffffff',
        fontSize: '0.875rem',
        lineHeight: '1.6',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, monospace",
        border: 'none',
        borderRadius: '4px',
      }}
      wrapLines={true}
      wrapLongLines={false}
      codeTagProps={{
        style: {
          fontFamily: 'inherit',
          fontSize: 'inherit',
          lineHeight: 'inherit',
        },
      }}
    >
      {code}
    </SyntaxHighlighter>
  )
}

export default CodeSnippet
