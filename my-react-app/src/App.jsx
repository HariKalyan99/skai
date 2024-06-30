// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './components/Home';
import LandingPage from './components/LandingPage';
import WidgetConfigurationForm from './components/WidgetConfigurationForm';
import UploadflowPage from './pages/UploadflowPage';
import AccountSettings from './pages/AccountSettings';
import MainContent from './components/mainContent';
import TranscriptSection from './pages/TranscriptSection';
import Sidebar from './components/Sidebar';
import ToggleButton from './components/ToggleButton';
import Deployment from './components/Deployment';
import Pricing from './components/Pricing';
import './App.css'; // Import your CSS file

const theme = createTheme({
  palette: {
    primary: {
      main: '#6200ea',
    },
    error: {
      main: '#d32f2f',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <ToggleButton />
        <Sidebar />
        <div className="content" style={{ marginLeft: '240px', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/widgetConfig" element={<WidgetConfigurationForm />} />
            <Route path="/projects" element={<MainContent />} />
            <Route path="/upload" element={<UploadflowPage />} />
            <Route path="/accountSettings" element={<AccountSettings />} />
            <Route path="/landingPage" element={<LandingPage />} />
            <Route path="/choosePlatform" element={<MainContent />} />
            <Route path="/activate" element={<MainContent />} />
            <Route path="/TranscriptSection" element={<TranscriptSection />} />
            <Route path="/deployment" element={<Deployment />} />
            <Route path="/pricing" element={<Pricing />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
