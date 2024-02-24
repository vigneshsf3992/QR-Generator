import { useState } from 'react';
import './QrCode.css'

const QrCode = () => {

  const [img, setImg] = useState('');
  const [loading, setLoading] = useState(false);
  const [qrData, setQrData] = useState('https://github.com/vigneshsf3992/');
  const [qrSize, setQrSize] = useState('150');

  async function generateQR() {
      setLoading(true);

      try {
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
        setImg(url);
        
      } catch (error) {
        console.error("Error generating QR code ", error);
        
      } finally {
        setLoading(false);
      }
  }

  function downloadQR() {
    fetch(img)
    .then((response) => response.blob())
    .then((blob) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "qrcode.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
    .catch((error) => {
      console.error('Error downloading QR code ', error);
    });
    
  }

  return (
    <div className='app-container'>
      <h1>QR CODE GENERATOR</h1>
      {loading && <p>Please wait...</p>}
      {img && <img src={img} className='qr-code-image'/>}
      <div>
        <label htmlFor="dataInput" className='input-label'>Data for QR code:</label>
        <input type="text" id='dataInput'placeholder='Enter data for QR code' value={qrData} onChange={(e) => setQrData(e.target.value)}/>

        <label htmlFor="sizeInput" className='input-label'>Image size(e.g., 150):</label>
        <input type="text" id='sizeInput' placeholder='Enter image size' value={qrSize} onChange={(e) => setQrSize(e.target.value)}/>

        <button className='generate-btn' disabled={loading} onClick={generateQR}>Generate QR Code</button>
        <button className='download-btn' onClick={downloadQR}>Download QR Code</button>
      </div>
      
      <p className='footer'>Designed by <a href="https://github.com/vigneshsf3992/">Vignesh</a></p>
    </div>
  )
}

export default QrCode
