'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

// 添加模拟数据
const MOCK_PSD_LIST = [
  {
    id: 1,
    name: 'aircraft_surface.psd',
    size: '24.5 MB',
    layers: 12,
    status: '未处理',
    createTime: '2024-01-15 14:30',
    updateTime: '2024-01-15 14:30'
  },
  {
    id: 2,
    name: 'satellite_panel.psd',
    size: '18.2 MB',
    layers: 8,
    status: '处理中',
    createTime: '2024-01-14 16:20',
    updateTime: '2024-01-15 09:15'
  },
  {
    id: 3,
    name: 'thermal_shield.psd',
    size: '32.1 MB',
    layers: 15,
    status: '已完成',
    createTime: '2024-01-13 11:45',
    updateTime: '2024-01-14 17:30'
  },
  {
    id: 4,
    name: 'composite_material.psd',
    size: '15.8 MB',
    layers: 6,
    status: '未处理',
    createTime: '2024-01-12 09:30',
    updateTime: '2024-01-12 09:30'
  }
];

export default function PSDListPage() {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileImport = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.name.toLowerCase().endsWith('.psd')) {
      // 处理PSD文件上传
      console.log('Importing PSD file:', file.name);
    } else {
      alert('请选择PSD文件');
    }
  };

  const handleProcess = (id: number) => {
    router.push(`/psd/process/${id}`);
  };

  return (
    <div className={styles.container}>
      {/* 页面标题和导入按钮 */}
      <div className={styles.header}>
        <h1>PSD文件管理</h1>
        <div className={styles.actions}>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".psd"
            style={{ display: 'none' }}
          />
          <button 
            className={styles.importButton}
            onClick={handleFileImport}
          >
            <span className={styles.icon}>📥</span>
            导入PSD文件
          </button>
        </div>
      </div>

      {/* 搜索和筛选工具栏 */}
      <div className={styles.toolbar}>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="搜索PSD文件..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className={styles.filters}>
          <select defaultValue="all">
            <option value="all">所有状态</option>
            <option value="pending">未处理</option>
            <option value="processing">处理中</option>
            <option value="completed">已完成</option>
          </select>
        </div>
      </div>

      {/* PSD文件列表 */}
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>文件名</th>
              <th>大小</th>
              <th>图层数</th>
              <th>状态</th>
              <th>创建时间</th>
              <th>更新时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_PSD_LIST.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.size}</td>
                <td>{item.layers}</td>
                <td>
                  <span className={styles[`status-${item.status}`]}>
                    {item.status}
                  </span>
                </td>
                <td>{item.createTime}</td>
                <td>{item.updateTime}</td>
                <td>
                  <button 
                    className={styles.processButton}
                    onClick={() => handleProcess(item.id)}
                  >
                    处理
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
  );
}



