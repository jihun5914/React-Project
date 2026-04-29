import React from 'react'
import { Routes, Route } from 'react-router-dom';

// 페이지 컴포넌트 import
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// 레이아웃 컴포넌트 import
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Routes>
      {/* MainLayout을 부모로 두어 모든 페이지에 공통 레이아웃 적용 */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        
        {/* 프로젝트 관련 라우팅 */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* 레이아웃이 필요 없는 독립적인 페이지나 404 페이지 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;