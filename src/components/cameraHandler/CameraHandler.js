import React, { lazy, Suspense, useState, useEffect } from 'react';

import Camera from 'react-feather/dist/icons/camera';
import ArrowDown from 'react-feather/dist/icons/arrow-down';
import dataHandler from '../dataHandler';

import BarcodeInputField from '../barcodeInputField';

import './cameraHandler.css';

const Video = lazy(() => import('../Video'));

const CameraHandler = () => {

  const [ isCameraSupported, setCameraSupported ] = useState(false);
  const [ isCameraEnabled, setCameraEnabled ] = useState(dataHandler.isCameraPermissionGranted());

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      setCameraSupported(true);
    }
  }, [])

  const onCamEnabled = () => {
    dataHandler.cameraPermissionGranted();
    setCameraEnabled(true);
  }

  return (
    <>
      {isCameraSupported && isCameraEnabled ?
        <Suspense fallback={<div>Loading...</div>}>
          <Video />
        </Suspense>
      :
        ""
      }
      {isCameraSupported && !isCameraEnabled ?
        <>
          <div className="cameraHandler__message">Tästä se lähtee käyntiin
            <br/>
            <div className="cameraHandler__messageIcon"><ArrowDown size={35}/></div>
          </div>
          <button type="button" aria-label="Enable Camera" className="btn__round camera__enable" onClick={onCamEnabled}>
            <Camera />
          </button>
        </>
        :
        ""
      }
      {!isCameraSupported ?
        <div className="cameraHandler__unsopported">
          <div>
            <p>ei toimikkaan virhe</p>
{/*            <p>You can enter the barcode below</p>
            <BarcodeInputField />*/}
          </div>
        </div>
        :
        ""
      }
    </>
  );
}

export default CameraHandler;
