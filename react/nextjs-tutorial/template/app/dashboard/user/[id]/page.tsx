import { notFound } from 'next/navigation';

interface FetchUserResponse {
  id: string;
  name: string;
}

interface ProfileProps {
  params: {
    id: string;
  };
}

async function fetchUser(id: string): Promise<FetchUserResponse | undefined> {
  return new Promise((resolve) => {
    if (id !== '1') return resolve(undefined);
    resolve({ id, name: 'User' });
  });
}
 
export default async function Profile({ params }: ProfileProps) {
  const user = await fetchUser(params.id);
 
  if (!user) {
    notFound();
  }
 
  return <h1>{user.name}: {user.id}</h1>;
}
