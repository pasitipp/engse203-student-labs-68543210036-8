import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRequestById } from '../services/requestService.js';

function RequestDetailPage() {
  const { requestId } = useParams();
  const [request, setRequest] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    setIsLoading(true);
    
    getRequestById(requestId).then((data) => {
      if (!ignore) {
        setRequest(data);
        setIsLoading(false);
      }
    });

    // Cleanup Guard
    return () => { ignore = true; };
  }, [requestId]);

  return (
    <section data-testid="page-request-detail">
      <div className="page-heading">
        <div>
          <p className="eyebrow dark">REQ DETAIL</p>
          <h1>รายละเอียดคำร้อง {requestId}</h1>
        </div>
      </div>
      
      <div className="panel">
        {isLoading ? (
          <p>กำลังโหลดข้อมูล...</p>
        ) : !request ? (
          <p>ไม่พบคำร้อง</p>
        ) : (
          <div>
            <h3>ผู้ร้องขอ: {request.requesterName}</h3>
            <p><strong>ประเภท:</strong> {request.requestType}</p>
            <p><strong>สถานที่:</strong> {request.location}</p>
            <p><strong>รายละเอียด:</strong> {request.details}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default RequestDetailPage;