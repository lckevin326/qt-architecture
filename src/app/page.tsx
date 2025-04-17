'use client';

import MainLayout from '@/components/layout/MainLayout';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

export default function Home() {
  const router = useRouter();

  const quickAccessItems = [
    {
      icon: '📋',
      title: '基础材质管理',
      description: '管理基础材质的属性、光谱数据等信息',
      path: '/material/basic'
    },
    {
      icon: '🔄',
      title: '复合材质管理',
      description: '创建和管理由多种基础材质组成的复合材质',
      path: '/material/composite'
    },
    {
      icon: '📊',
      title: '光谱数据',
      description: '查看和分析材质的光谱数据和相关参数',
      path: '/spectral'
    },
    {
      icon: '🖼️',
      title: 'PSD处理',
      description: '处理PSD文件并关联材质属性',
      path: '/psd/list'  // 修改这里的路径
    }
  ];

  const recentItems = [
    {
      icon: '📄',
      name: '铝合金A7075',
      type: '基础材质',
      time: '2024-01-15 10:30',
      path: '/material/basic/1'
    },
    {
      icon: '📄',
      name: '复合涂层-X1',
      type: '复合材质',
      time: '2024-01-14 16:45',
      path: '/material/composite/1'
    },
    {
      icon: '📊',
      name: '光谱数据分析报告',
      type: '光谱数据',
      time: '2024-01-14 15:20',
      path: '/spectral/1'
    }
  ];

  return (
    <MainLayout>
      <div className={styles.container}>
        {/* 欢迎区域 */}
        <div className={styles.welcomeSection}>
          <h1 className={styles.welcomeTitle}>欢迎使用材质管理器系统</h1>
          <p className={styles.welcomeDesc}>
            这是一个基于QT风格设计的材质管理系统，用于管理材质属性、光谱数据和PSD处理等功能。
            选择下方快速访问卡片开始使用系统的核心功能。
          </p>
        </div>

        {/* 快速访问区域 */}
        <div className={styles.quickAccessGrid}>
          {quickAccessItems.map((item, index) => (
            <div
              key={index}
              className={styles.quickAccessCard}
              onClick={() => router.push(item.path)}
            >
              <div className={styles.cardIcon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>

        {/* 最近活动区域 */}
        <div className={styles.recentSection}>
          <h2 className={styles.sectionTitle}>最近活动</h2>
          <div className={styles.recentList}>
            {recentItems.map((item, index) => (
              <div
                key={index}
                className={styles.recentItem}
                onClick={() => router.push(item.path)}
              >
                <span className={styles.recentIcon}>{item.icon}</span>
                <div className={styles.recentInfo}>
                  <div className={styles.recentName}>{item.name}</div>
                  <div className={styles.recentMeta}>{item.type}</div>
                </div>
                <div className={styles.recentTime}>{item.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}




