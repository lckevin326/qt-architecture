'use client';

import MainLayout from '@/components/layout/MainLayout';
import styles from './page.module.css';

export default function UserManagement() {
  return (
    <MainLayout>
      <div className={styles.container}>
        {/* 标题和操作区 */}
        <div className={styles.header}>
          <h1 className={styles.title}>用户管理</h1>
          <div className={styles.actions}>
            <button className={styles.exportBtn}>
              <span className={styles.btnIcon}>📋</span>
              导出用户列表
            </button>
            <button className={styles.primaryBtn}>
              <span className={styles.btnIcon}>➕</span>
              添加用户
            </button>
          </div>
        </div>

        {/* 搜索和筛选区 */}
        <div className={styles.searchBar}>
          <div className={styles.searchBox}>
            <input 
              type="text" 
              placeholder="搜索用户名称、电子邮箱或角色..."
              className={styles.searchInput}
            />
            <button className={styles.searchBtn}>🔍</button>
          </div>
          <div className={styles.filter}>
            <button className={styles.filterBtn}>
              <span>状态筛选</span>
              <span>▼</span>
            </button>
          </div>
        </div>

        {/* 用户表格 */}
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>#</th>
                <th>用户信息</th>
                <th>角色</th>
                <th>状态</th>
                <th>最后登录</th>
                <th>创建时间</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {/* 示例数据行 */}
              <tr>
                <td>1</td>
                <td>
                  <div className={styles.userName}>管理员</div>
                  <div className={styles.userEmail}>admin@example.com</div>
                </td>
                <td>
                  <span className={styles.roleBadge}>系统管理员</span>
                </td>
                <td>
                  <span className={styles.statusBadge}>活跃</span>
                </td>
                <td>2025-04-16 09:42</td>
                <td>2025-01-01</td>
                <td>
                  <button className={styles.actionBtn} title="编辑用户">✏️</button>
                  <button className={styles.actionBtn} title="锁定用户">🔒</button>
                  <button className={styles.actionBtn} title="重置密码">🔑</button>
                </td>
              </tr>
              {/* 可以添加更多数据行 */}
            </tbody>
          </table>
        </div>

        {/* 分页控件 */}
        <div className={styles.pagination}>
          <div className={styles.pageInfo}>
            显示 1-5 项，共 12 项
          </div>
          <div className={styles.pageControls}>
            <button className={`${styles.pageBtn} ${styles.disabled}`}>◀</button>
            <button className={`${styles.pageBtn} ${styles.active}`}>1</button>
            <button className={styles.pageBtn}>2</button>
            <button className={styles.pageBtn}>3</button>
            <button className={styles.pageBtn}>▶</button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}