import { useMemo, useState, useEffect } from 'react';
import FilterBar from '../components/FilterBar.jsx';
import RequestList from '../components/RequestList.jsx';
import SummaryPanel from '../components/SummaryPanel.jsx';
import { getRequests, deleteRequest, resetRequests } from '../services/requestService.js';

function DashboardPage() {
  const [requests, setRequests] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all');
  const [notice, setNotice] = useState('');

  const loadData = () => {
    getRequests({ onRecovery: setNotice })
      .then((data) => setRequests(data))
      .catch((error) => console.error('Error loading data:', error));
  };

  useEffect(() => {
    let ignore = false;
    getRequests({ onRecovery: setNotice }).then((data) => {
      if (!ignore) setRequests(data);
    });
    
    // Cleanup Guard ป้องกัน stale update
    return () => { ignore = true; };
  }, []);
  
  const summary = useMemo(() => ({
    total: requests.length,
    pending: requests.filter((request) => request.status === 'pending').length,
    inProgress: requests.filter((request) => request.status === 'in-progress').length,
    completed: requests.filter((request) => request.status === 'completed').length,
  }), [requests]);
  
  const filteredRequests = statusFilter === 'all' 
    ? requests 
    : requests.filter((request) => request.status === statusFilter);

  async function handleDelete(requestId) {
    await deleteRequest(requestId);
    loadData(); // โหลดข้อมูลใหม่หลังจากลบ
    setNotice(`ลบคำร้อง ${requestId} เรียบร้อยแล้ว`);
  }

  async function handleReset() {
    await resetRequests();
    loadData();
    setNotice('คืนค่าข้อมูลเริ่มต้นเรียบร้อยแล้ว');
  }

  return (
    <section data-testid="page-dashboard">
      <div className="page-heading" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <p className="eyebrow dark">DASHBOARD</p>
          <h1>Campus Service Request</h1>
          <p>ระบบจัดการคำร้องขอรับบริการ</p>
        </div>
        <button type="button" data-testid="reset-button" onClick={handleReset} style={{ padding: '0.6rem 1.2rem', backgroundColor: '#e2e8f0', border: 'none', borderRadius: '8px', fontWeight: 'bold' }}>
          รีเซ็ตข้อมูล
        </button>
      </div>
      
      {notice && <p className="notice" role="status" style={{ backgroundColor: '#fef3c7', padding: '1rem', borderRadius: '8px', fontWeight: '600', color: '#b45309' }}>{notice}</p>}
      
      <SummaryPanel summary={summary} />
      
      <div className="workspace-grid" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginTop: '1.5rem' }}>
        <section className="panel" aria-labelledby="request-list-title">
          <div className="section-heading" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h2 id="request-list-title" style={{ margin: 0 }}>รายการคำร้อง</h2>
            <FilterBar value={statusFilter} onFilterChange={setStatusFilter} />
          </div>
          <RequestList requests={filteredRequests} onDeleteRequest={handleDelete} />
        </section>
      </div>
    </section>
  );
}

export default DashboardPage;