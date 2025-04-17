import MaterialEditClient from './MaterialEditClient';

// 这部分在服务器端运行
export function generateStaticParams() {
  return [
    { action: 'edit' },
    { action: 'create' }
  ];
}

// 服务器组件
export default function MaterialEditPage() {
  return <MaterialEditClient />;
}

