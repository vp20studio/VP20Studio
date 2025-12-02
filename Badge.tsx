import React from 'react';

export const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-6 uppercase tracking-wider">
    {children}
  </span>
);