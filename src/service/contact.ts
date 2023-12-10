import { Metadata } from 'next';

import { EmailData } from '@/service/email';

export const metadata: Metadata = {
  title: 'Contact Me',
  description: "Noma's contact information",
  openGraph: {
    title: "Contact Me | Noma's Tech Log",
  },
};

export async function contactMe(email: EmailData) {
  // 클라이언트에서 실행
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(email),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || '서버 요청에 실패함 ');
  }
  return data;
}
