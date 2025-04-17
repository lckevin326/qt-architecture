'use client';

import { useRouter, usePathname } from 'next/navigation';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    {
      id: 'home',
      icon: '🏠',
      label: '首页',
      path: '/',
    },
    {
      id: 'basic-material',
      icon: '📋',
      label: '基础材质',
      path: '/material/basic/list',
    },
    {
      id: 'composite-material',
      icon: '📑',
      label: '复合材质',
      path: '/material/composite/list',
    },
    {
      id: 'spectral-data',
      icon: '📊',
      label: '光谱数据',
      path: '/material/spectral',
    },
    {
      id: 'psd',
      icon: '📁',
      label: 'PSD处理',
      path: '/psd/list'  // 确保这里的路径是 /psd/list
    }
  ];

  const handleMenuClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className={styles.sidebar}>
      {menuItems.map((item) => (
        <div 
          key={item.id} 
          className={`${styles.menuItem} ${pathname === item.path ? styles.active : ''}`}
          onClick={() => handleMenuClick(item.path)}
        >
          <span className={styles.icon}>{item.icon}</span>
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}





