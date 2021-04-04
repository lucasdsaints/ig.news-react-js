import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

interface ActiveLinkProps extends LinkProps {
  children: ReactNode;
  activeClassName: string;
}

export function ActiveLink({ children, activeClassName, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter();

  const className = asPath === rest.href ? activeClassName : '';

  return (
    <Link {...rest}>
      <a className={className}>
        {children}
      </a>
    </Link>
  );
}