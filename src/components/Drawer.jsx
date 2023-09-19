import React, { useState } from "react";
import DocumentViewer from "./DocumentViewer";
import { TiArrowBack } from "react-icons/ti";
import PDFDownloadButton from "./PDFDownloadButton";

function Drawer({ data, isShow = false, setIsShow = function () {} }) {
  const [documentTitle, setDocumentTitle] = useState("Document Preview");

  return (
    <div
      data-show={isShow}
      className='w-full flex flex-col duration-300 -translate-x-full data-[show=true]:translate-x-0 h-full shadow-lg z-20 bg-white absolute top-0 left-0'
    >
      <header className='h-14 flex shadow-md justify-between items-center px-3'>
        <input
          type='text'
          value={documentTitle}
          placeholder='Set document title here.'
          className='font-roboto-regular text-sm px-2 py-1'
          onChange={(e) => setDocumentTitle(e.target.value)}
        />
        <div className='flex items-center gap-x-2'>
          <PDFDownloadButton
            title={documentTitle}
            data={data}
            label='Download'
            className='flex items-center hover:bg-slate-200 px-2 py-1 rounded-md gap-x-1 font-roboto-bold text-sm duration-100 text-dark'
          />
          <button
            className='flex items-center gap-x-1 hover:bg-slate-200 font-roboto-bold text-sm text-dark px-2 py-1 duration-100 rounded-md pr-3'
            onClick={() => setIsShow(false)}
          >
            <TiArrowBack className='w-5 h-5' />
            Back
          </button>
        </div>
      </header>
      <div className='h-[calc(100%-3.5rem)] p-2'>
        <DocumentViewer title={documentTitle} data={data} />
      </div>
    </div>
  );
}

export default Drawer;
