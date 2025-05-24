import type React from "react"

interface InteractiveDocumentsProps {
  content: string // Expecting HTML content as a string
}

const InteractiveDocuments: React.FC<InteractiveDocumentsProps> = ({ content }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />
}

export default InteractiveDocuments
