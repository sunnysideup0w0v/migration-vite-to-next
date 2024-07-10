import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vite + React + TS',
};

// 주석된 값 = next.js에서 기본적으로 제공하여 기재하지 되지 않은 값.
// svg -> app 디렉토리 바로 아래에 넣어두면 next.js에서 자동으로 favicon으로 인식한다. Test

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      {/* <head>
        <meta charset='UTF-8' /> 
        <link rel='icon' type='image/svg+xml' href='/vite.svg' /> 
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Vite + React + TS</title> // nextMetadata를 통해 적용 가능 
      </head> */}
      <body>
        <div id='root'>{children}</div>
      </body>
    </html>
  );
}
