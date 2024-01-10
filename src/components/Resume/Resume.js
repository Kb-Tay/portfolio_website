import React from 'react'
import { useState, useEffect } from 'react';

import pdf from "../../assets/Aaron.pdf"

import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);


  return (
    <div>
        <Document file={pdf} className="d-flex justify-content-center">
          <Page  renderTextLayer={false}
    renderAnnotationLayer={false}
    customTextRenderer={false} 
          pageNumber={1} scale={width > 786 ? 1.7 : 0.6}/>
        </Document>
    
    </div>
  )
}

export default Resume