import { sendEmail } from '@/service/email';
import * as yup from 'yup';

const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});
// 서버에서 실행
export async function POST(req: Request) {
  //노드에서 사용하는 Request와 동일
  const body = await req.json(); // body는 readableStream이어서 json 변환이 필요함
  if (!bodySchema.isValidSync(body)) {
    return new Response(JSON.stringify({ message: '유효하지 않은 형식' }), {
      status: 400,
    });
  }
  return sendEmail(body)
    .then(
      () =>
        new Response(JSON.stringify({ message: '메일 전송 성공' }), {
          status: 200,
        })
    )
    .catch((err) => {
      console.log(err);
      return new Response(JSON.stringify({ message: '메일 전송 실패' }), {
        status: 500,
      });
    });
}
