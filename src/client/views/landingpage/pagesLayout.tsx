import { ReactNode, useState } from 'react';
import Sidebar from './sidebar';
import Header from './header';

interface PagesLayout {
  children: ReactNode
}

const PagesLayout: React.FC<PagesLayout> = ({ children }) => {



  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);


  return (
    <div className="min-h-screen bg-gray-50 mb-10">
      <Header toggleSidebar={toggleSidebar} />

      <div className="flex ">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div className='relative w-full min-h-[500px] max-h-[750px] overflow-y-auto  '>
          {children}
        </div>
      </div>
    </div>

  );
}


export default PagesLayout;