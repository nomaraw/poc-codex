import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Activity,
  Bell,
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  GraduationCap,
  HeartPulse,
  LineChart,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
} from 'lucide-react';

const students = [
  {
    name: 'Maya Thompson',
    grade: 'Grade 8',
    status: 'Needs check-in',
    attendance: 92,
    focus: 74,
    mood: 'Low energy',
    risk: 'Medium',
  },
  {
    name: 'Liam Carter',
    grade: 'Grade 7',
    status: 'On track',
    attendance: 98,
    focus: 88,
    mood: 'Positive',
    risk: 'Low',
  },
  {
    name: 'Ava Patel',
    grade: 'Grade 9',
    status: 'Improving',
    attendance: 95,
    focus: 81,
    mood: 'Calm',
    risk: 'Low',
  },
];

const alerts = [
  'Maya missed two assignment milestones this week.',
  'Homeroom attendance dipped 4% compared with last month.',
  'Three students requested wellness support after lunch period.',
];

const actions = [
  'Send family progress summary',
  'Schedule counselor check-in',
  'Create personalized study nudge',
];

function MetricCard({ icon: Icon, label, value, detail, accent }) {
  return (
    <article className="metric-card" style={{ '--accent': accent }}>
      <div className="metric-icon"><Icon size={22} /></div>
      <p>{label}</p>
      <strong>{value}</strong>
      <span>{detail}</span>
    </article>
  );
}

function StudentRow({ student }) {
  return (
    <div className="student-row">
      <div className="student-avatar">{student.name.split(' ').map((part) => part[0]).join('')}</div>
      <div className="student-info">
        <strong>{student.name}</strong>
        <span>{student.grade} • {student.status}</span>
      </div>
      <div className="progress-block">
        <span>Attendance</span>
        <div className="bar"><i style={{ width: `${student.attendance}%` }} /></div>
      </div>
      <div className="progress-block">
        <span>Focus</span>
        <div className="bar focus"><i style={{ width: `${student.focus}%` }} /></div>
      </div>
      <span className={`risk risk-${student.risk.toLowerCase()}`}>{student.risk}</span>
    </div>
  );
}

function App() {
  return (
    <main className="app-shell">
      <nav className="side-nav" aria-label="Primary navigation">
        <div className="brand"><GraduationCap /><span>Pal</span></div>
        <a className="active" href="#overview"><Activity size={18} /> Overview</a>
        <a href="#students"><UserRoundCheck size={18} /> Students</a>
        <a href="#wellness"><HeartPulse size={18} /> Wellness</a>
        <a href="#messages"><MessageSquareText size={18} /> Messages</a>
      </nav>

      <section className="dashboard">
        <header className="hero" id="overview">
          <div>
            <span className="eyebrow"><Sparkles size={16} /> AI-assisted classroom support</span>
            <h1>Student Monitoring Pal</h1>
            <p>
              A friendly prototype dashboard that helps teachers spot attendance,
              engagement, and wellbeing patterns before students fall behind.
            </p>
            <div className="hero-actions">
              <button>Review priority students</button>
              <button className="ghost">Export weekly report</button>
            </div>
          </div>
          <aside className="privacy-card">
            <ShieldCheck size={30} />
            <strong>Privacy-first prototype</strong>
            <span>Role-based insights, transparent flags, and no public student records.</span>
          </aside>
        </header>

        <section className="metrics" aria-label="Classroom metrics">
          <MetricCard icon={CalendarCheck} label="Attendance" value="95%" detail="+2.1% this week" accent="#5b8cff" />
          <MetricCard icon={LineChart} label="Engagement" value="82%" detail="12 active nudges" accent="#8b5cf6" />
          <MetricCard icon={HeartPulse} label="Wellness pulse" value="Good" detail="3 support requests" accent="#14b8a6" />
          <MetricCard icon={BookOpen} label="Assignments" value="89%" detail="Completion rate" accent="#f97316" />
        </section>

        <section className="content-grid">
          <article className="panel wide" id="students">
            <div className="panel-heading">
              <div>
                <p className="section-label">Live roster</p>
                <h2>Students to watch today</h2>
              </div>
              <button className="small-button"><Clock3 size={16} /> Last 24h</button>
            </div>
            <div className="student-list">
              {students.map((student) => <StudentRow key={student.name} student={student} />)}
            </div>
          </article>

          <article className="panel" id="wellness">
            <p className="section-label">Smart alerts</p>
            <h2>Early signals</h2>
            <ul className="alert-list">
              {alerts.map((alert) => <li key={alert}><Bell size={17} />{alert}</li>)}
            </ul>
          </article>

          <article className="panel action-panel" id="messages">
            <p className="section-label">Recommended next steps</p>
            <h2>Pal suggestions</h2>
            {actions.map((action) => (
              <button className="action-item" key={action}><CheckCircle2 size={18} />{action}</button>
            ))}
          </article>
        </section>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
