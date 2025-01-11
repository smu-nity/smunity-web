import React from 'react'
import ReactMarkdown from 'react-markdown'
import '../../styles/markdown.css'
import remarkBreaks from 'remark-breaks'

interface MarkdownViewerProps {
  content: string
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({content}) => {
  return (
    <div className="markdown-viewer">
      <ReactMarkdown remarkPlugins={[remarkBreaks]}>{content}</ReactMarkdown>
    </div>
  )
}

export default MarkdownViewer
