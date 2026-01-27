import { useEffect } from 'react'
import './PdfViewerModal.css'

function PdfViewerModal({ isOpen, onClose, pdfUrl, title }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="pdf-modal-overlay" onClick={onClose}>
      <div className="pdf-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="pdf-modal-header">
          <h3>{title}</h3>
          <button className="pdf-modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="pdf-modal-content">
          <iframe
            src={`${pdfUrl}#toolbar=0`}
            className="pdf-viewer-iframe"
            title={title}
          />
        </div>
        <div className="pdf-modal-footer">
          <a 
            href={pdfUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="pdf-download-link"
          >
            Открыть в новой вкладке
          </a>
        </div>
      </div>
    </div>
  )
}

export default PdfViewerModal
