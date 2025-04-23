// src/components/Sidebar.jsx

import { NavLink } from "react-router-dom";
import {
  Moon,  Sun,
  LayoutDashboard, GalleryHorizontalEnd, ArrowLeftRight, TableOfContents,
  Settings2, Mail, Bug, 
  Github, Send, Instagram, Twitter
} from "lucide-react";

import useDarkMode from "../hooks/useDarkMode";
import styles from "../styles/Global.module.css";

export default function Sidebar({ collapsed, onToggle }) {
  /* dark‑mode hook: isDark = bool, toggleTheme = fn */
  const [isDark, toggleTheme] = useDarkMode();

  /* links da navegação */
  const links = [
    { path: "/", icon: TableOfContents, label: "Overview"},
    { path: "/dashboard",            icon: LayoutDashboard,     label: "Dashboard" },
    { path: "/portfolio",   icon: GalleryHorizontalEnd, label: "Portfolio" },
    { path: "/transactions",icon: ArrowLeftRight,      label: "Transactions" },
    { path: "/settings",    icon: Settings2,           label: "Settings" },
  ];

  const sidebarWidth = collapsed
    ? "var(--sidebar-w-collapsed)"
    : "var(--sidebar-w)";

  return (
    <aside className={styles["app-sidebar"]} style={{ width: sidebarWidth }}>
      {/* botão de colapsar */}
      <button
        onClick={onToggle}
        className="app-sidebar-toggle"
        style={{ border: "none", alignSelf: "flex-end" }}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? "»" : "«"}
      </button>

      {/* navegação */}
      <nav style={{ flex: 1 }}>
        <ul>
          {links.map(({ path, icon: Icon, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <Icon size={16} style={{ marginRight: collapsed ? 0 : 8 }} />
                {!collapsed && label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* rodapé */}
      <nav style={{marginBottom: "20px"}}>
        <ul>
          <li>
            <a
              href="https://github.com/Axodus"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} /> {!collapsed && "GitHub"}
            </a>
          </li>
          <li>
            <a href="https://github.com/mzfshark/axodus/issues"
            target="_blank"
            rel="noreferrer">
              <Bug size={16} /> {!collapsed && "Support"}
            </a>
          </li>
          <li>
            <a href="https://instagram.com/axodus.finance"
            target="_blank"
            rel="noreferrer">
              <Instagram size={16}/> {!collapsed && "Instagram"}
            </a>
          </li>
          <li>
            <a href="https://t.me/axodusfinance"
            target="_blank"
            rel="noreferrer">
              <Send size={16}/> {!collapsed && "Telegram"}
            </a>
          </li>
          <li>
            <a href="https://x.com/axodus.finance"
            target="_blank"
            rel="noreferrer">
              <Twitter size={16}/> {!collapsed && "X / Twitter"}
            </a>
          </li>
          <li>
            <a href="mailto:axodus.finance@gmail.com">
              <Mail size={16}/> {!collapsed && "Contact"}
            </a>
          </li>
        
          <li>
            <button
              onClick={toggleTheme}
              className="app-sidebar-toggle"
              title="Toggle theme"
              
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
              {!collapsed && ""}
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
