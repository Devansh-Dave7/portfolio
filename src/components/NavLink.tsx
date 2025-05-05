'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { smoothScroll } from '@/lib/smoothScroll';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className = '' }: NavLinkProps) {
  const pathname = usePathname();
  const isHashLink = href.startsWith('#');

  // If it's a hash link, use smooth scroll
  if (isHashLink) {
    const targetId = href.substring(1); // Remove the # from the href

    return (
      <a
        href={href}
        className={`nav-link ${className}`}
        onClick={(e) => smoothScroll(e, targetId)}
      >
        {children}
      </a>
    );
  }

  // Otherwise, use Next.js Link component
  return (
    <Link href={href} className={`nav-link ${className}`}>
      {children}
    </Link>
  );
}
