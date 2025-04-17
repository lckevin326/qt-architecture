import MaterialEditClient from './MaterialEditClient';

export default function CompositeMaterialEditPage({ 
  params 
}: { 
  params: { action: string } 
}) {
  return <MaterialEditClient params={params} />;
}