import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';


function PDFViewer({ defaultPdf, defaultScale, classNames }) {

    const blob = new Blob([defaultPdf], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);


    return (
        url &&
        <div
            className={`viewer w-full h-[350px] ${classNames}`}
            style={{ overflowX: 'scroll', overflowY: 'hidden' }}
        >
            <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js">
                <Viewer scale={1}
                    fileUrl={url}
                    defaultScale={defaultScale}
                />
            </Worker>
        </div>
    );
}

export default PDFViewer;