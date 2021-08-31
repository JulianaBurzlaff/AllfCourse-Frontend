import React from 'react';
import DashboardTemplate from '../../components/DashboardTemplate';

function Dashboard({ children }) {
  return <DashboardTemplate>{children}</DashboardTemplate>;
}

export default Dashboard;
