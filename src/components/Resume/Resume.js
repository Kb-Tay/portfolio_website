import React from 'react'
import { useState, useEffect } from 'react';

import pdf from "../../assets/Aaron.pdf"

import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);


  return (
    <div className='flex justify-center'>
        <Document file={pdf}>
          <Page  renderTextLayer={false}
            renderAnnotationLayer={false}
            customTextRenderer={false} 
            pageNumber={1} scale={width > 786 ? 1.7 : 0.6}/>
        </Document>
    
    </div>
  )
}

export default Resume