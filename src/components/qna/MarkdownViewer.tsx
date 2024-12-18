import React from 'react'
import ReactMarkdown from 'react-markdown'
import '../../styles/markdown.css'

interface MarkdownViewerProps {
  content: string
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({content}) => {
  return (
    <div className="markdown-viewer">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}

export default MarkdownViewer
