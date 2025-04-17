'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './MainLayout.module.css';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className={styles.layout}>
      {/* 菜单栏 */}
      <div className={styles.menuBar}>
        <div className={styles.menuItem}>文件</div>
        <div className={styles.menuItem}>编辑</div>
        <div className={styles.menuItem}>视图</div>
        <div className={styles.menuItem}>工具</div>
        <div className={styles.menuItem}>窗口</div>
        <div className={styles.menuItem}>帮助</div>
      </div>

      {/* 工具栏 */}
      <div className={styles.toolbar}>
        <button className={styles.toolbarBtn} onClick={() => router.back()}>
          <span className={styles.toolbarBtnIcon}>←</span>
          <span>返回</span>
        </button>
        <div className={styles.toolbarSeparator} />
        <button className={styles.toolbarBtn}>
          <span className={styles.toolbarBtnIcon}>💾</span>
          <span>保存</span>
        </button>
        <button className={styles.toolbarBtn}>
          <span className={styles.toolbarBtnIcon}>🔄</span>
          <span>刷新</span>
        </button>
      </div>

      {/* 主内容区域 */}
      <div className={styles.mainContent}>
        {/* 左侧导航 */}
        <div className={styles.sidebar}>
          <div className={styles.treeMenu}>
            <div className={styles.treeItem} onClick={() => router.push('/')}>
              首页
            </div>
            <div className={styles.treeItem} onClick={() => router.push('/material/basic')}>
              基础材质
            </div>
            <div className={styles.treeItem} onClick={() => router.push('/material/composite')}>
              复合材质
            </div>
            <div className={styles.treeItem} onClick={() => router.push('/material/spectral')}>
              光谱数据
            </div>
            <div className={styles.treeItem} onClick={() => router.push('/psd/list')}>
              PSD处理
            </div>
          </div>
        </div>

        {/* 内容区域 */}
        <div className={styles.content}>
          {children}
        </div>
      </div>

      {/* 状态栏 */}
      <div className={styles.statusBar}>
        <div className={styles.statusSection}>
          <div className={styles.statusIndicator} />
          <span>系统运行正常</span>
          <span className={styles.statusDivider}>|</span>
          <span>数据点: 6</span>
          <span className={styles.statusDivider}>|</span>
          <span>上次保存: 2024-01-15 09:21</span>
        </div>
        <div className={styles.statusSection}>
          <span>材质管理器系统 v1.2.0</span>
        </div>
      </div>
    </div>
  );
}



