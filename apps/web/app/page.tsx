import { trpc } from '@web/app/trpc';
import ClientSide from './_components/ClientSide';

export default async function Home() {
  const { greeting } = await trpc.hello.query(({
    name: 'sunny'
  }));
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {greeting}
      </div>
      <div>
        <ClientSide />
      </div>
    </main>
  )
}
