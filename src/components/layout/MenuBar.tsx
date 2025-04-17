import React from 'react';
import styles from './MenuBar.module.css';

interface MenuBarProps {
  userName: string;
  onLogout: () => void;
}

/**
 * 菜单栏组件
 * 显示顶部菜单项，如文件、编辑、视图等
 */
const MenuBar: React.FC<MenuBarProps> = ({ userName, onLogout }) => {
  const menuItems = [
    { id: 'file', label: '文件', items: [
      { id: 'new', label: '新建' },
      { id: 'open', label: '打开' },
      { id: 'save', label: '保存' },
      { id: 'export', label: '导出' },
    ]},
    { id: 'edit', label: '编辑', items: [
      { id: 'copy', label: '复制' },
      { id: 'paste', label: '粘贴' },
      { id: 'delete', label: '删除' },
    ]},
    { id: 'view', label: '视图', items: [
      { id: 'sidebar', label: '侧边栏' },
      { id: 'toolbar', label: '工具栏' },
      { id: 'statusbar', label: '状态栏' },
    ]},
    { id: 'help', label: '帮助', items: [
      { id: 'about', label: '关于' },
      { id: 'manual', label: '使用手册' },
    ]},
  ];

  const handleLogout = () => {
    if (typeof onLogout === 'function' && window.confirm('确定要退出登录吗？')) {
      onLogout();
    }
  };

  return (
    <div className={styles.menuBar}>
      <div className={styles.menuLeft}>
        {menuItems.map((item) => (
          <div key={item.id} className={styles.menuItem}>
            {item.label}
          </div>
        ))}
      </div>
      
      <div className={styles.menuRight}>
        <div className={styles.userInfo}>
          <span className={styles.userIcon}>👤</span>
          <span className={styles.userName}>{userName}</span>
        </div>
        <div className={styles.separator} />
        <div 
          className={`${styles.menuItem} ${styles.logoutBtn}`}
          onClick={handleLogout}
        >
          退出登录
        </div>
      </div>
    </div>
  );
};

export default MenuBar;



