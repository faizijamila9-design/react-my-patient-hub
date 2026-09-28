import { useState } from 'react';
import Login from './components/Login';
import FindClinic from './components/find-clinic';
import DoctorSearch from './components/DoctorSearch';

const pages = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'doctor', label: 'Find Doctor' },
  { id: 'clinic', label: 'Find Clinic' },
];

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  const pageContent = {
    dashboard: <Login />,
    doctor: <DoctorSearch />,
    clinic: <FindClinic />,
  };

  return (
    <div className="app-shell">
      <aside className="app-sidebar">
        <h1 className="app-brand">MyPatientHUB</h1>
        <nav className="app-navigation" aria-label="Main navigation">
          {pages.map((page) => (
            <button
              key={page.id}
              type="button"
              className={activePage === page.id ? 'nav-button active' : 'nav-button'}
              aria-current={activePage === page.id ? 'page' : undefined}
              onClick={() => setActivePage(page.id)}
            >
              {page.label}
            </button>
          ))}
        </nav>
      </aside>
      <main className="app-content">{pageContent[activePage]}</main>
    </div>
  );
}

export default App;