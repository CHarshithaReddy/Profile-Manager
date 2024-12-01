import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ProfileProvider } from './context/ProfileContext';
import Layout from './components/Layout';
import ProfileForm from './components/ProfileForm';
import ProfileDisplay from './components/ProfileDisplay';
import NotFound from './components/NotFound';

function App() {
  return (
    <ProfileProvider>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/profile" replace />} />
            <Route path="profile-form" element={<ProfileForm />} />
            <Route path="profile" element={<ProfileDisplay />} />
            <Route path="404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProfileProvider>
  );
}

export default App;