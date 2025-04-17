'use client';

import { useRouter } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <div className={styles.menuBar}>
        <div className={styles.menuItem}>文件</div>
        <div className={styles.menuItem}>编辑</div>
        <div className={styles.menuItem}>视图</div>
        <div className={styles.menuItem}>工具</div>
        <div className={styles.menuItem}>窗口</div>
        <div className={styles.menuItem}>帮助</div>
      </div>
      <div className={styles.toolbar}>
        <button className={styles.toolButton}>
          <span>📁</span>
          <span>打开</span>
        </button>
        <button className={styles.toolButton}>
          <span>💾</span>
          <span>保存</span>
        </button>
        <div className={styles.separator} />
        <button className={styles.toolButton}>
          <span>📋</span>
          <span>材质库</span>
        </button>
        <button className={styles.toolButton}>
          <span>🖼️</span>
          <span>导入PSD</span>
        </button>
        <div className={styles.separator} />
        <button className={styles.toolButton}>
          <span>⚙️</span>
          <span>设置</span>
        </button>
      </div>
    </nav>
  );
}