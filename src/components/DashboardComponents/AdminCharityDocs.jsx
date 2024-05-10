import styles from "./AdminCharityDocs.module.css";
import { useCallback, useState } from "react";
import { Document, Outline, Page, Thumbnail } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import samplePDF from "/ChatGPT.pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

function highlightPattern(text, pattern) {
  return text.replace(pattern, (value) => `<mark>${value}</mark>`);
}

function AdminCharityDocs() {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
  ).toString();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <div className={styles.container}>
      <Document
        file="/ChatGPT.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        renderAnnotationLayer="false"
        height={window.innerHeight}
      >
        <Page
          pageNumber={pageNumber}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          height={window.innerHeight}
          // renderTextLayer={false}
          // annotation={false}
        />
        <div className={styles["pages_nav"]}>
          <div>
            <Page
              pageNumber={2}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              className={styles.page2}
              height={100}
              onClick={() => setPageNumber(2)}
              // renderTextLayer={false}
              // annotation={false}
            />
          </div>
          <div>
            <Page
              pageNumber={3}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              className={styles.page2}
              height={100}
              onClick={() => setPageNumber(3)}
              // renderTextLayer={false}
              // annotation={false}
            />
          </div>
          <div>
            <Page
              pageNumber={4}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              className={styles.page2}
              height={100}
              onClick={() => setPageNumber(4)}
            />
          </div>
          <div>
            <Page
              pageNumber={4}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              className={styles.page2}
              height={100}
              onClick={() => setPageNumber(4)}
            />
          </div>
          <div>
            <Page
              pageNumber={4}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              className={styles.page2}
              height={100}
              onClick={() => setPageNumber(4)}
            />
          </div>
          <div>
            <Page
              pageNumber={4}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              className={styles.page2}
              height={100}
              onClick={() => setPageNumber(4)}
            />
          </div>
          <div>
            <Page
              pageNumber={4}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              className={styles.page2}
              height={100}
              onClick={() => setPageNumber(4)}
            />
          </div>
          <div>
            <Page
              pageNumber={4}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              className={styles.page2}
              height={100}
              onClick={() => setPageNumber(4)}
            />
          </div>
          <div>
            <Page
              pageNumber={4}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              className={styles.page2}
              height={100}
              onClick={() => setPageNumber(4)}
            />
          </div>
          <div>
            <Page
              pageNumber={4}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              className={styles.page2}
              height={100}
              onClick={() => setPageNumber(4)}
            />
          </div>
          <div>
            <Page
              pageNumber={4}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              className={styles.page2}
              height={100}
              onClick={() => setPageNumber(4)}
            />
          </div>
        </div>
      </Document>
      {/* <Document
        file="/ChatGPT.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        renderAnnotationLayer="false"
        className={styles.test}
      >
        <Page
          pageNumber={pageNumber}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          className={styles.test}
          height={window.innerHeight}
          // renderTextLayer={false}
          // annotation={false}
        />
        <div className={styles["pages_nav"]}>
          <Page
            pageNumber={2}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            className={styles.page2}
            height={100}
            onClick={() => setPageNumber(2)}
            // renderTextLayer={false}
            // annotation={false}
          />
          <Page
            pageNumber={3}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            className={styles.page2}
            height={100}
            onClick={() => setPageNumber(3)}
            // renderTextLayer={false}
            // annotation={false}
          />
          <Page
            pageNumber={4}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            className={styles.page2}
            height={100}
            onClick={() => setPageNumber(4)}
          />
        </div>
      </Document> */}

      {/* <div>
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div> */}
    </div>
  );
}

export default AdminCharityDocs;
{
  /* 
      assume 1 document 

*/
}
