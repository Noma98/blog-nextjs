import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

import { sendMail } from '@/service/mailService';

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === 'POST') {
    try {
      const messageId = await sendMail(req.body);
      res.status(200).json({ success: true, messageId });
    } catch (err) {
      res.status(500).json({ success: false, error: '내부 서버 오류' });
    }
  } else {
    res.status(405).json({ success: false, error: '허용되지 않는 메서드' });
  }
};

export default handler;
