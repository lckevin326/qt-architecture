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
      path: '/psd/list'
    },
    {
      id: 'system',
      icon: '⚙️',
      label: '系统管理',
      children: [
        {
          id: 'user-management',
          icon: '👤',
          label: '用户管理',
          path: '/system/users'
        },
        {
          id: 'permission-settings',
          icon: '🔒',
          label: '权限设置',
          path: '/system/permissions'
        },
        {
          id: 'system-settings',
          icon: '⚙️',
          label: '系统设置',
          path: '/system/settings'
        }
      ]
    }
  ];

  const handleMenuClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.menuList}>
        {menuItems.map((item) => (
          <div key={item.id}>
            {!item.children ? (
              <div
                className={`${styles.menuItem} ${
                  pathname === item.path ? styles.active : ''
                }`}
                onClick={() => handleMenuClick(item.path)}
              >
                <span className={styles.menuIcon}>{item.icon}</span>
                <span className={styles.menuLabel}>{item.label}</span>
              </div>
            ) : (
              <>
                <div className={styles.menuGroup}>
                  <span className={styles.menuIcon}>{item.icon}</span>
                  <span className={styles.menuLabel}>{item.label}</span>
                </div>
                <div className={styles.submenuList}>
                  {item.children.map((subItem) => (
                    <div
                      key={subItem.id}
                      className={`${styles.submenuItem} ${
                        pathname === subItem.path ? styles.active : ''
                      }`}
                      onClick={() => handleMenuClick(subItem.path)}
                    >
                      <span className={styles.menuIcon}>{subItem.icon}</span>
                      <span className={styles.menuLabel}>{subItem.label}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


