import React, { createContext, useCallback, useState } from 'react';

export const UploadContext = createContext({});

export const UploadProvider = ({ children }) => {
  const [uploadedFile, setUploadedFile] = useState({});

  const handleUpload = useCallback(file => {
    setUploadedFile({
      flie: file,
      preview: window.URL.createObjectURL(
        new Blob(file, { type: 'application/octet-binary' }),
      ),
    });
  }, []);

  return (
    <UploadContext.Provider
      value={{
        uploadedFile,
        handleUpload,
      }}
    >
      {children}
    </UploadContext.Provider>
  );
};
