import { useState } from 'react';
import { Menu, ChevronDown, ChevronRight } from 'lucide-react';
import { ProppiaLogo } from '@/app/components/brand/ProppiaLogo';
import WelcomePage from '@/app/components/pages/WelcomePage';
import TokensPage from '@/app/components/pages/TokensPage';
import ComponentsPage from '@/app/components/pages/ComponentsPage';
import DashboardPage from '@/app/components/pages/DashboardPage';
import LandingPage from '@/app/components/pages/LandingPage';
import CaseStudyPage from '@/app/components/pages/CaseStudyPage';
import DocumentationPage from '@/app/components/pages/DocumentationPage';
import CoverPage from '@/app/components/pages/CoverPage';

// Foundations pages
import LogotypesPage from '@/app/components/pages/foundations/LogotypesPage';
import IconographyPage from '@/app/components/pages/foundations/IconographyPage';

// Component pages
import ButtonsPage from '@/app/components/pages/components/ButtonsPage';
import TextInputPage from '@/app/components/pages/components/TextInputPage';
import TextAreaPage from '@/app/components/pages/components/TextAreaPage';
import SwitchPage from '@/app/components/pages/components/SwitchPage';
import AvatarsPage from '@/app/components/pages/components/AvatarsPage';
import TabsPage from '@/app/components/pages/components/TabsPage';
import ListPage from '@/app/components/pages/components/ListPage';
import ProgressBarPage from '@/app/components/pages/components/ProgressBarPage';
import ProgressCirclePage from '@/app/components/pages/components/ProgressCirclePage';
import DropdownsPage from '@/app/components/pages/components/DropdownsPage';
import AlertsPage from '@/app/components/pages/components/AlertsPage';
import CardsPage from '@/app/components/pages/components/CardsPage';
import ModalsPage from '@/app/components/pages/components/ModalsPage';
import NavbarPage from '@/app/components/pages/components/NavbarPage';
import BannersPage from '@/app/components/pages/components/BannersPage';
import CarouselPage from '@/app/components/pages/components/CarouselPage';

type PageType = 
  | 'cover' 
  | 'welcome' 
  | 'tokens' 
  | 'components' 
  | 'dashboard' 
  | 'landing' 
  | 'case-study' 
  | 'documentation'
  | 'found-logotypes'
  | 'found-iconography'
  | 'comp-buttons'
  | 'comp-text-input'
  | 'comp-text-area'
  | 'comp-switch'
  | 'comp-avatars'
  | 'comp-tabs'
  | 'comp-list'
  | 'comp-progress-bar'
  | 'comp-progress-circle'
  | 'comp-dropdowns'
  | 'comp-alerts'
  | 'comp-cards'
  | 'comp-modals'
  | 'comp-navbar'
  | 'comp-banners'
  | 'comp-carousel';

interface NavItem {
  id: PageType;
  label: string;
  children?: NavItem[];
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('cover');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['components']));

  const navigation: NavItem[] = [
    { id: 'cover', label: 'Portada' },
    { id: 'welcome', label: 'Resumen del Sistema' },
    { 
      id: 'tokens', 
      label: 'Tokens y Fundamentos',
      children: [
        { id: 'found-logotypes', label: 'Logotypes' },
        { id: 'found-iconography', label: 'Iconography' },
      ]
    },
    { 
      id: 'components', 
      label: 'Componentes',
      children: [
        { id: 'comp-buttons', label: 'Buttons' },
        { id: 'comp-text-input', label: 'Text Input' },
        { id: 'comp-text-area', label: 'Text Area' },
        { id: 'comp-switch', label: 'Switch' },
        { id: 'comp-avatars', label: 'Avatars' },
        { id: 'comp-tabs', label: 'Tabs' },
        { id: 'comp-list', label: 'List' },
        { id: 'comp-progress-bar', label: 'Progress Bar' },
        { id: 'comp-progress-circle', label: 'Progress Circle' },
        { id: 'comp-dropdowns', label: 'Dropdowns' },
        { id: 'comp-alerts', label: 'Alerts' },
        { id: 'comp-cards', label: 'Cards' },
        { id: 'comp-modals', label: 'Modals / Pop-Ups' },
        { id: 'comp-navbar', label: 'Navbar / Header' },
        { id: 'comp-banners', label: 'Banners' },
        { id: 'comp-carousel', label: 'Carousel' },
      ]
    },
    { id: 'dashboard', label: 'Playground - Dashboard' },
    { id: 'landing', label: 'Playground - Landing B2B' },
    { id: 'case-study', label: 'Playground - Case Study' },
    { id: 'documentation', label: 'Documentación & Gobierno' },
  ];

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'cover':
        return <CoverPage onNavigate={(page) => setCurrentPage(page as PageType)} />;
      case 'welcome':
        return <WelcomePage />;
      case 'tokens':
        return <TokensPage />;
      case 'components':
        return <ComponentsPage />;
      case 'dashboard':
        return <DashboardPage />;
      case 'landing':
        return <LandingPage />;
      case 'case-study':
        return <CaseStudyPage />;
      case 'documentation':
        return <DocumentationPage />;
      
      // Foundations pages
      case 'found-logotypes':
        return <LogotypesPage />;
      case 'found-iconography':
        return <IconographyPage />;
      
      // Component pages
      case 'comp-buttons':
        return <ButtonsPage />;
      case 'comp-text-input':
        return <TextInputPage />;
      case 'comp-text-area':
        return <TextAreaPage />;
      case 'comp-switch':
        return <SwitchPage />;
      case 'comp-avatars':
        return <AvatarsPage />;
      case 'comp-tabs':
        return <TabsPage />;
      case 'comp-list':
        return <ListPage />;
      case 'comp-progress-bar':
        return <ProgressBarPage />;
      case 'comp-progress-circle':
        return <ProgressCirclePage />;
      case 'comp-dropdowns':
        return <DropdownsPage />;
      case 'comp-alerts':
        return <AlertsPage />;
      case 'comp-cards':
        return <CardsPage />;
      case 'comp-modals':
        return <ModalsPage />;
      case 'comp-navbar':
        return <NavbarPage />;
      case 'comp-banners':
        return <BannersPage />;
      case 'comp-carousel':
        return <CarouselPage />;
      
      default:
        return <CoverPage onNavigate={(page) => setCurrentPage(page as PageType)} />;
    }
  };

  const getPageTitle = () => {
    const findItem = (items: NavItem[]): string | undefined => {
      for (const item of items) {
        if (item.id === currentPage) return item.label;
        if (item.children) {
          const found = findItem(item.children);
          if (found) return found;
        }
      }
    };
    return findItem(navigation) || 'Proppia Design System';
  };

  const renderNavItem = (item: NavItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedSections.has(item.id);
    const isActive = currentPage === item.id || 
      (hasChildren && item.children?.some(child => currentPage === child.id));

    return (
      <div key={item.id}>
        <button
          onClick={() => {
            if (hasChildren) {
              toggleSection(item.id);
              if (item.id === 'components') {
                setCurrentPage('components');
              }
            } else {
              setCurrentPage(item.id);
            }
          }}
          className={`w-full text-left px-4 py-2.5 rounded-lg transition-all flex items-center justify-between ${
            currentPage === item.id
              ? 'bg-[rgba(241,241,241,0.2)] text-[#F1F1F1] border-l-3 border-l-[#23F8F7]'
              : isActive
              ? 'text-[#F1F1F1]'
              : 'text-[rgba(241,241,241,0.6)] hover:bg-[rgba(241,241,241,0.1)] hover:text-[#F1F1F1]'
          }`}
          style={{
            paddingLeft: `${16 + level * 16}px`,
            fontSize: level === 0 ? '13px' : '12px',
            fontWeight: currentPage === item.id ? 500 : 400,
          }}
        >
          <span>{item.label}</span>
          {hasChildren && (
            <span className="text-[rgba(241,241,241,0.6)]">
              {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </span>
          )}
        </button>

        {hasChildren && isExpanded && (
          <div className="mt-1">
            {item.children?.map((child) => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="size-full flex bg-[#F1F1F1]">
      {/* Sidebar Navigation */}
      <aside
        className={`${
          sidebarOpen ? 'w-64' : 'w-0'
        } bg-[#1E1E1E] transition-all duration-300 overflow-hidden flex-shrink-0`}
      >
        <div className="h-full overflow-y-auto">
          <div className="p-6">
            {/* Logo */}
            <div className="mb-12">
              <ProppiaLogo className="h-8 w-auto text-[#F1F1F1]" />
              <div className="text-[#F1F1F1] text-xs mt-3 opacity-60">Design System</div>
            </div>

            {/* Navigation */}
            <nav className="space-y-1">
              {navigation.map((item) => renderNavItem(item))}
            </nav>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 bg-white border-b border-[rgba(30,30,30,0.12)] flex items-center px-6 flex-shrink-0">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-[rgba(30,30,30,0.05)] rounded-lg transition-colors"
          >
            <Menu className="w-5 h-5 text-[#1E1E1E]" />
          </button>
          <div className="ml-4 text-[#1E1E1E] font-medium">
            {getPageTitle()}
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto">
          {renderPage()}
        </div>
      </main>
    </div>
  );
}