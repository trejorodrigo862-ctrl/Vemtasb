import React, { FC } from 'react';

// Propiedades base para todos los íconos
interface IconProps {
    className?: string;
}

// 1. DashboardIcon
export const DashboardIcon: FC<IconProps> = ({ className = 'h-6 w-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

// 2. SalesIcon (Register/Shopping Cart)
export const SalesIcon: FC<IconProps> = ({ className = 'h-6 w-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

// 3. UsersIcon (Team/Members)
export const UsersIcon: FC<IconProps> = ({ className = 'h-6 w-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2a3 3 0 015.356-1.857M7 20h2m-2 0h2m-2-4a4 4 0 118 0M12 10a4 4 0 100-8 4 4 0 000 8z" />
    </svg>
);

// 4. BarChart3Icon (Reports)
export const BarChart3Icon: FC<IconProps> = ({ className = 'h-6 w-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M18 10h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
    </svg>
);

// 5. LogOutIcon
export const LogOutIcon: FC<IconProps> = ({ className = 'h-6 w-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3v-5a3 3 0 013-3h4a3 3 0 013 3v1" />
    </svg>
);

// 6. CloseIcon
export const CloseIcon: FC<IconProps> = ({ className = 'h-6 w-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

// 7. TrophyIcon (Goals/Metas)
export const TrophyIcon: FC<IconProps> = ({ className = 'h-6 w-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 15v2m0 0v2m0-2h2m-2 0H9m1.488-8.28a3 3 0 01-4.04 0L2 12l2-2.5 1.5 1.5M11 5a3 3 0 116 0V7a1 1 0 001 1h3v10a1 1 0 01-1 1h-8a1 1 0 01-1-1V8a1 1 0 001-1V5z" />
    </svg>
);

// 8. SettingsIcon (Ajustes)
export const SettingsIcon: FC<IconProps> = ({ className = 'h-6 w-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6H4m10-4h2m-6 4H4m10 4h6m-6 4v2" />
    </svg>
);

// 9. DocumentDownloadIcon (Informes)
export const DocumentDownloadIcon: FC<IconProps> = ({ className = 'h-6 w-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3 3v-6m-4 5h6m-3-3v6m-2-12a2 2 0 012-2h4a2 2 0 012 2v10a2 2 0 01-2 2H9a2 2 0 01-2-2V7z" />
    </svg>
);

// 10. CommissionIcon (Money/Currency)
export const CommissionIcon: FC<IconProps> = ({ className = 'h-6 w-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.485 0-4.5 2.015-4.5 4.5S9.515 17 12 17s4.5-2.015 4.5-4.5S14.485 8 12 8zM21 12h-2m-9 0H3m14 0c0-2.485-2.015-4.5-4.5-4.5S8 9.515 8 12s2.015 4.5 4.5 4.5S17 14.485 17 12z" />
    </svg>
);

// 11. CalculatorIcon
export const CalculatorIcon: FC<IconProps> = ({ className = 'h-6 w-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 16.5v-3m0 3h3m-3-3h3m-3-3v3m0-3H6m3 0H6m-2.25 0h.007c.455 0 .82-.4.82-.898V12c0-.498-.365-.898-.82-.898h-.007c-.455 0-.82.4-.82.898v3.522c0 .498.365.898.82.898zM12 21.75a9.75 9.75 0 100-19.5 9.75 9.75 0 000 19.5z" />
    </svg>
);

// 12. HistoryIcon
export const HistoryIcon: FC<IconProps> = ({ className = 'h-6 w-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// 13. MenuIcon (Necesario para el botón de móvil en App.tsx)
export const MenuIcon: FC<IconProps> = ({ className = 'h-6 w-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);
