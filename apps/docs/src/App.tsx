import { Route, Routes } from "react-router-dom";

import { DocsLayout } from "./layout/DocsLayout";
import { CoverPage } from "./pages/CoverPage";
import { DocumentationPage } from "./pages/DocumentationPage";
import { WelcomePage } from "./pages/WelcomePage";
import { AlertsPage } from "./pages/components/AlertsPage";
import { AvatarsPage } from "./pages/components/AvatarsPage";
import { BannersPage } from "./pages/components/BannersPage";
import { ButtonsPage } from "./pages/components/ButtonsPage";
import { CardsPage } from "./pages/components/CardsPage";
import { CarouselPage } from "./pages/components/CarouselPage";
import { ComponentsPage } from "./pages/components/ComponentsPage";
import { DropdownsPage } from "./pages/components/DropdownsPage";
import { ModalsPage } from "./pages/components/ModalsPage";
import { NavbarPage } from "./pages/components/NavbarPage";
import { ProgressBarPage } from "./pages/components/ProgressBarPage";
import { ProgressCirclePage } from "./pages/components/ProgressCirclePage";
import { ListPage } from "./pages/components/ListPage";
import { SwitchPage } from "./pages/components/SwitchPage";
import { ComponentsTypographyPage } from "./pages/components/TypographyPage";
import { TabsPage } from "./pages/components/TabsPage";
import { TextAreaPage } from "./pages/components/TextAreaPage";
import { TextInputPage } from "./pages/components/TextInputPage";
import { FoundationsColorsPage } from "./pages/foundations/ColorsPage";
import { FoundationsIconographyPage } from "./pages/foundations/IconographyPage";
import { FoundationsLogotypesPage } from "./pages/foundations/LogotypesPage";
import { FoundationsTypographyPage } from "./pages/foundations/TypographyPage";
import { FoundationsSpacingPage } from "./pages/foundations/SpacingPage";
import { FoundationsPixelPage } from "./pages/foundations/PixelPage";
import { FoundationsGridPage } from "./pages/foundations/GridPage";
import { FoundationsLayoutPage } from "./pages/foundations/LayoutPage";
import { CaseStudyPage } from "./pages/playground/CaseStudyPage";
import { DashboardPage } from "./pages/playground/DashboardPage";
import { LandingPage } from "./pages/playground/LandingPage";
import { ComponentsSearchBarPage } from "./pages/components/SearchBarPage";
import { TokensPage } from "./pages/TokensPage";
import { TemplatesPage } from "./pages/TemplatesPage";

export function App() {
  return (
    <Routes>
      {/* Landing page — full width, no sidebar */}
      <Route path="/" element={<CoverPage />} />

      {/* Docs with sidebar */}
      <Route element={<DocsLayout />}>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/tokens" element={<TokensPage />} />
        <Route path="/foundations/colors" element={<FoundationsColorsPage />} />
        <Route path="/foundations/logotypes" element={<FoundationsLogotypesPage />} />
        <Route path="/foundations/typography" element={<FoundationsTypographyPage />} />
        <Route path="/foundations/iconography" element={<FoundationsIconographyPage />} />
        <Route path="/foundations/spacing" element={<FoundationsSpacingPage />} />
        <Route path="/foundations/pixel" element={<FoundationsPixelPage />} />
        <Route path="/foundations/grid" element={<FoundationsGridPage />} />
        <Route path="/foundations/layout" element={<FoundationsLayoutPage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/components/buttons" element={<ButtonsPage />} />
        <Route path="/components/text-input" element={<TextInputPage />} />
        <Route path="/components/text-area" element={<TextAreaPage />} />
        <Route path="/components/switch" element={<SwitchPage />} />
        <Route path="/components/typography" element={<ComponentsTypographyPage />} />
        <Route path="/components/avatars" element={<AvatarsPage />} />
        <Route path="/components/tabs" element={<TabsPage />} />
        <Route path="/components/list" element={<ListPage />} />
        <Route path="/components/progress-bar" element={<ProgressBarPage />} />
        <Route path="/components/progress-circle" element={<ProgressCirclePage />} />
        <Route path="/components/dropdowns" element={<DropdownsPage />} />
        <Route path="/components/alerts" element={<AlertsPage />} />
        <Route path="/components/cards" element={<CardsPage />} />
        <Route path="/components/modals" element={<ModalsPage />} />
        <Route path="/components/navbar" element={<NavbarPage />} />
        <Route path="/components/banners" element={<BannersPage />} />
        <Route path="/components/carousel" element={<CarouselPage />} />
        <Route path="/components/search-bar" element={<ComponentsSearchBarPage />} />
        <Route path="/playground/dashboard" element={<DashboardPage />} />
        <Route path="/playground/landing" element={<LandingPage />} />
        <Route path="/playground/case-study" element={<CaseStudyPage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/templates" element={<TemplatesPage />} />
      </Route>
    </Routes>
  );
}
