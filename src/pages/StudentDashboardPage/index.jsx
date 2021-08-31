import React from 'react';
import DashboardTemplate from '../../components/DashboardTemplate';
import StudentDashboard from '../../components/StudentDashboard';

function StudentDasboardPage() {
  return (
    <DashboardTemplate>
      <StudentDashboard />
    </DashboardTemplate>
  );
}

export default StudentDasboardPage;
