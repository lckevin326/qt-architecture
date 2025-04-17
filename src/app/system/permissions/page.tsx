'use client';

import { useState } from 'react';
import styles from './page.module.css';
import MainLayout from '@/components/layout/MainLayout';

export default function PermissionSettings() {
  const [activeRole, setActiveRole] = useState<string>('engineer');
  const [activeTab, setActiveTab] = useState<string>('basic');

  const content = (
    <>
      {/* 工具栏 */}
      <div className={styles.toolbar}>
        <button className={styles.toolButton}>
          <span className={styles.toolButtonIcon}>➕</span>
          新建角色
        </button>
        <button className={styles.toolButton}>
          <span className={styles.toolButtonIcon}>📋</span>
          复制角色
        </button>
        <button className={styles.toolButton}>
          <span className={styles.toolButtonIcon}>🗑️</span>
          删除角色
        </button>
        <div style={{ flex: 1 }}></div>
        <button className={styles.toolButton}>
          <span className={styles.toolButtonIcon}>💾</span>
          保存更改
        </button>
      </div>

      {/* 主内容区域 */}
      <div className={styles.mainContent}>
        {/* 左侧角色列表 */}
        <div className={styles.leftPanel}>
          <div className={styles.roleList}>
            {[
              { name: '系统管理员', desc: '拥有所有权限', users: 1 },
              { name: '工程师', desc: '材质处理和计算权限', users: 3 },
              { name: '研究员', desc: '数据维护权限', users: 2 },
              { name: '访客', desc: '只读权限', users: 5 },
            ].map(role => (
              <div
                key={role.name}
                className={`${styles.roleItem} ${activeRole === role.name ? styles.active : ''}`}
                onClick={() => setActiveRole(role.name)}
              >
                <div className={styles.roleName}>
                  {role.name}
                  <span className={styles.roleUserCount}>{role.users}</span>
                </div>
                <div className={styles.roleDesc}>{role.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 右侧配置面板 */}
        <div className={styles.rightPanel}>
          <div className={styles.tabs}>
            <div
              className={`${styles.tab} ${activeTab === 'basic' ? styles.active : ''}`}
              onClick={() => setActiveTab('basic')}
            >
              基本信息
            </div>
            <div
              className={`${styles.tab} ${activeTab === 'features' ? styles.active : ''}`}
              onClick={() => setActiveTab('features')}
            >
              功能权限
            </div>
            <div
              className={`${styles.tab} ${activeTab === 'data' ? styles.active : ''}`}
              onClick={() => setActiveTab('data')}
            >
              数据权限
            </div>
          </div>

          <div className={styles.contentSection}>
            {activeTab === 'basic' && (
              <div className={styles.permissionCard}>
                <div className={styles.permissionCardHeader}>
                  <div className={styles.permissionCardTitle}>角色信息</div>
                  <label className={styles.switch}>
                    <input type="checkbox" defaultChecked />
                    <span className={styles.slider}></span>
                  </label>
                </div>
                <div className={styles.permissionCardBody}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>角色名称</label>
                    <input
                      type="text"
                      className={styles.formInput}
                      value={activeRole}
                      onChange={(e) => setActiveRole(e.target.value)}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>角色描述</label>
                    <textarea
                      className={styles.formTextarea}
                      placeholder="请输入角色描述..."
                    />
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'features' && <FeaturePermissions />}
            {activeTab === 'data' && <DataPermissions />}
          </div>
        </div>
      </div>

      {/* 状态栏 */}
      <div className={styles.statusBar}>
        <div>当前角色：{activeRole}</div>
        <div>上次修改：2024-01-20 14:30</div>
      </div>
    </>
  );

  return <MainLayout>{content}</MainLayout>;
}

function FeaturePermissions() {
  return (
    <div className={styles.permissionCard}>
      <div className={styles.permissionCardHeader}>
        <div className={styles.permissionCardTitle}>功能权限配置</div>
      </div>
      <div className={styles.permissionCardBody}>
        {/* 功能权限配置内容 */}
      </div>
    </div>
  );
}

function DataPermissions() {
  return (
    <div className={styles.permissionCard}>
      <div className={styles.permissionCardHeader}>
        <div className={styles.permissionCardTitle}>数据权限配置</div>
      </div>
      <div className={styles.permissionCardBody}>
        {/* 数据权限配置内容 */}
      </div>
    </div>
  );
}




