'use client';

import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Brain, Shield, Lock, Wand2, Flame } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/research', label: 'Research', icon: Brain },
    { href: '/security-audit', label: 'Security', icon: Shield },
    { href: '/vault-setup', label: 'Vault', icon: Lock },
    { href: '/image-generation', label: 'Images', icon: Wand2 },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-shell-950/80 backdrop-blur-md border-b border-shell-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-crab-500 to-crab-700 flex items-center justify-center box-glow-red group-hover:animate-pulse-glow transition-all">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="font-arcade text-xs text-crab-400 glow-red">SHALOM</span>
              <span className="font-display text-sm text-gray-400 ml-2">SERVICES</span>
            </div>
          </Link>

          {/* Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                    isActive
                      ? "bg-crab-600/20 text-crab-400 border border-crab-500/30"
                      : "text-gray-400 hover:text-white hover:bg-shell-800"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Connect Wallet */}
          <div className="flex items-center gap-4">
            <ConnectButton
              showBalance={false}
              chainStatus="icon"
              accountStatus="address"
            />
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center justify-center gap-1 pb-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-medium transition-all",
                  isActive
                    ? "bg-crab-600/20 text-crab-400"
                    : "text-gray-400 hover:text-white"
                )}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
