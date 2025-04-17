'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import MainLayout from '@/components/layout/MainLayout';
import styles from './MaterialList.module.css';

// 模拟的材质数据
const MOCK_MATERIALS = [
  {
    id: '1',
    name: '标准黑体',
    temperature: 300,
    emissivity: 0.95,
    modulation: 0.98,
    updateTime: '2024-01-15 14:30',
  },
  {
    id: '2',
    name: '氧化铝',
    temperature: 350,
    emissivity: 0.85,
    modulation: 0.92,
    updateTime: '2024-01-14 16:20',
  },
  // 添加更多模拟数据...
];

export default function MaterialListClient() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <MainLayout>
      <div className={styles.pageContainer}>
        {/* 页面头部 */}
        <div className={styles.pageHeader}>
          <div>
            <h1 className={styles.pageTitle}>基础材质管理</h1>
            <div className={styles.breadcrumb}>
              <span className={styles.breadcrumbLink} onClick={() => router.push('/')}>首页</span>
              <span className={styles.breadcrumbSeparator}>/</span>
              <span>基础材质</span>
            </div>
          </div>
          <button 
            className={styles.createButton}
            onClick={() => router.push('/material/basic/create')}
          >
            新建材质
          </button>
        </div>

        {/* 搜索和过滤区域 */}
        <div className={styles.toolBar}>
          <div className={styles.searchBox}>
            <input
              type="text"
              placeholder="搜索材质名称..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
            <button className={styles.searchButton}>搜索</button>
          </div>
        </div>

        {/* 材质列表 */}
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>材质名称</th>
                <th>平均温度 (K)</th>
                <th>总发射率</th>
                <th>调制因子</th>
                <th>更新时间</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_MATERIALS.map((material) => (
                <tr key={material.id}>
                  <td>{material.name}</td>
                  <td>{material.temperature}</td>
                  <td>{material.emissivity}</td>
                  <td>{material.modulation}</td>
                  <td>{material.updateTime}</td>
                  <td>
                    <button 
                      className={styles.editButton}
                      onClick={() => router.push(`/material/basic/edit?id=${material.id}`)}
                    >
                      编辑
                    </button>
                    <button className={styles.deleteButton}>
                      删除
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
}