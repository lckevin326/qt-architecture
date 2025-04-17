'use client';
import { useRouter } from 'next/navigation';
import MainLayout from '@/components/layout/MainLayout';
import styles from './MaterialList.module.css';

// Mock数据
const MOCK_MATERIALS = [
  {
    id: 1,
    name: '碳纤维复合板',
    temperature: 295,
    emissivity: 0.87,
    composition: [
      { name: '碳纤维', percentage: 60 },
      { name: '环氧树脂', percentage: 40 }
    ],
    tags: ['复合材料', '航空'],
    updateTime: '2024-01-15 14:30'
  },
  {
    id: 2,
    name: '陶瓷基复合材料',
    temperature: 320,
    emissivity: 0.92,
    composition: [
      { name: '氧化铝', percentage: 70 },
      { name: '碳化硅', percentage: 30 }
    ],
    tags: ['复合材料', '高温'],
    updateTime: '2024-01-14 16:45'
  }
];

export default function MaterialListClient() {
  const router = useRouter();

  return (
    <MainLayout>
      <div className={styles.pageContainer}>
        {/* 页面头部 */}
        <div className={styles.pageHeader}>
          <div>
            <h1 className={styles.pageTitle}>复合材质管理</h1>
            <div className={styles.breadcrumb}>
              <span className={styles.breadcrumbLink} onClick={() => router.push('/')}>首页</span>
              <span className={styles.breadcrumbSeparator}>/</span>
              <span>复合材质</span>
            </div>
          </div>
          <button 
            className={styles.createButton}
            onClick={() => router.push('/material/composite/create')}
          >
            新建复合材质
          </button>
        </div>

        {/* 信息提示卡片 */}
        <div className={styles.infoCard}>
          <div className={styles.infoTitle}>
            <span className={styles.infoIcon}>ℹ️</span>
            <span>什么是复合材质？</span>
          </div>
          <div className={styles.infoText}>
            复合材质是由多种基础材质按照一定比例组合而成的材质。通过设置各基础材质的占比，
            可以模拟真实环境中的复杂表面材质特性。复合材质在PSD图层关联中尤为有用，
            可以让您的辐射计算结果更加准确。
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
                <th>组成</th>
                <th>标签</th>
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
                  <td>
                    <div className={styles.composition}>
                      {material.composition.map((item, index) => (
                        <span key={index} className={styles.compositionItem}>
                          {item.name} <span className={styles.percentage}>{item.percentage}%</span>
                        </span>
                      ))}
                    </div>
                  </td>
                  <td>
                    {material.tags.map((tag, index) => (
                      <span key={index} className={styles.tag}>{tag}</span>
                    ))}
                  </td>
                  <td>{material.updateTime}</td>
                  <td>
                    <button 
                      className={styles.editButton}
                      onClick={() => router.push(`/material/composite/edit?id=${material.id}`)}
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
