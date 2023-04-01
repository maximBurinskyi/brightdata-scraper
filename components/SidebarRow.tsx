'use client';

import { DocumentData } from 'firebase/firestore';
import { usePathname, useRouter } from 'next/navigation';

type Props = {
  doc: DocumentData;
};

function SidebarRow({ doc }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  return <li>SidebarRow</li>;
}

export default SidebarRow;
