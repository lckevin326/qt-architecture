'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './SpectralDataClient.module.css';

// 首先定义一个 Material 类型接口
interface Material {
  id: string;
  name: string;
  // 添加其他必要的属性
}

// 静态材质列表数据
const MATERIALS: Material[] = [
  {
    id: '1',
    name: '铝合金A7075',
    type: '基础材质',
    dataPoints: 12
  },
  {
    id: '2',
    name: '石墨纤维',
    type: '基础材质',
    dataPoints: 18
  },
  {
    id: '3',
    name: '混凝土C30',
    type: '基础材质',
    dataPoints: 15
  },
  {
    id: '4',
    name: '玻璃纤维',
    type: '基础材质',
    dataPoints: 20
  },
  {
    id: '5',
    name: '聚四氟乙烯',
    type: '基础材质',
    dataPoints: 16
  },
  {
    id: '6',
    name: '不锈钢316L',
    type: '基础材质',
    dataPoints: 14
  },
  {
    id: '7',
    name: '钛合金TC4',
    type: '基础材质',
    dataPoints: 12
  },
  {
    id: '8',
    name: '碳纤维复合板',
    type: '复合材质',
    dataPoints: 'calculated'
  }
];

export default function SpectralDataClient() {
  const router = useRouter();
  const [selectedMaterial, setSelectedMaterial] = useState(MATERIALS[0]);
  
  // 光谱数据状态
  const [spectralData, setSpectralData] = useState([
    { wavelength: 2.0, reflectivity: 0.88, emissivity: 0.12 },
    { wavelength: 4.0, reflectivity: 0.85, emissivity: 0.15 },
    { wavelength: 6.0, reflectivity: 0.82, emissivity: 0.18 },
    { wavelength: 8.0, reflectivity: 0.84, emissivity: 0.16 },
    { wavelength: 10.0, reflectivity: 0.86, emissivity: 0.14 },
    { wavelength: 12.0, reflectivity: 0.87, emissivity: 0.13 },
  ]);

  // 处理材质选择
  const handleMaterialSelect = (material: any) => {
    setSelectedMaterial(material);
  };

  // 处理数据变化
  const handleSpectralDataChange = (index, field, value) => {
    const newData = [...spectralData];
    newData[index] = {
      ...newData[index],
      [field]: value
    };
    setSpectralData(newData);
  };

  // 添加新行
  const handleAddRow = () => {
    const lastRow = spectralData[spectralData.length - 1];
    const newWavelength = lastRow ? lastRow.wavelength + 2.0 : 2.0;
    setSpectralData([
      ...spectralData,
      { wavelength: newWavelength, reflectivity: 0.85, emissivity: 0.15 }
    ]);
  };

  // 删除行
  const handleDeleteRow = (index: number) => {
    setSpectralData(spectralData.filter((_, i) => i !== index));
  };

  // 保存数据
  const handleSave = () => {
    // TODO: 实现保存逻辑
    console.log('保存数据:', spectralData);
  };

  return (
    <div className={styles.pageContainer}>
      {/* 工具栏 */}
      <div className={styles.toolbar}>
        <button className={styles.toolbarBtn} onClick={() => router.back()}>
          <span className={styles.toolbarBtnIcon}>←</span>
          <span>返回</span>
        </button>
        <div className={styles.toolbarSeparator} />
        <button className={styles.toolbarBtn} onClick={handleSave}>
          <span className={styles.toolbarBtnIcon}>💾</span>
          <span>保存</span>
        </button>
        <button className={styles.toolbarBtn}>
          <span className={styles.toolbarBtnIcon}>📥</span>
          <span>导入</span>
        </button>
        <button className={styles.toolbarBtn}>
          <span className={styles.toolbarBtnIcon}>📤</span>
          <span>导出</span>
        </button>
      </div>

      {/* 主内容区域 */}
      <div className={styles.mainContent}>
        {/* 左侧材质列表 */}
        <div className={styles.materialPanel}>
          <div className={styles.panelHeader}>
            <span>材质列表</span>
            <div className={styles.panelActions}>
              <button className={styles.panelBtn} title="刷新">🔄</button>
              <button className={styles.panelBtn} title="排序">🔢</button>
            </div>
          </div>
          <div className={styles.panelBody}>
            <ul className={styles.materialList}>
              {MATERIALS.map((material) => (
                <li
                  key={material.id}
                  className={`${styles.materialItem} ${selectedMaterial.id === material.id ? styles.selected : ''}`}
                  onClick={() => handleMaterialSelect(material)}
                >
                  <div className={styles.materialName}>{material.name}</div>
                  <div className={styles.materialInfo}>
                    <span className={styles.materialInfoItem}>{material.type}</span>
                    <span className={styles.materialInfoItem}>
                      {typeof material.dataPoints === 'number' 
                        ? `数据点: ${material.dataPoints}`
                        : '计算值'}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 右侧数据编辑区域 */}
        <div className={styles.dataPanel}>
          {/* 光谱图表 */}
          <div className={styles.chartContainer}>
            <svg width="100%" height="250" viewBox="0 0 600 250">
              {/* 坐标轴 */}
              <line x1="50" y1="200" x2="550" y2="200" stroke="#d0d0d0" strokeWidth="1" />
              <line x1="50" y1="50" x2="50" y2="200" stroke="#d0d0d0" strokeWidth="1" />
              
              {/* 网格线 */}
              <line x1="50" y1="50" x2="550" y2="50" stroke="#e5e5e5" strokeWidth="1" strokeDasharray="2,2" />
              <line x1="50" y1="100" x2="550" y2="100" stroke="#e5e5e5" strokeWidth="1" strokeDasharray="2,2" />
              <line x1="50" y1="150" x2="550" y2="150" stroke="#e5e5e5" strokeWidth="1" strokeDasharray="2,2" />
              
              {/* 数据曲线 */}
              <path d="M 50,160 L 150,155 250,140 350,120 450,130 550,120" stroke="#0078d7" strokeWidth="2" fill="none" />
              <path d="M 50,90 L 150,95 250,110 350,130 450,120 550,130" stroke="#38a169" strokeWidth="2" fill="none" />
              
              {/* 图例 */}
              <rect x="450" y="30" width="12" height="4" fill="#0078d7" />
              <text x="470" y="34" fontSize="10" fill="#505050">反射率</text>
              
              <rect x="450" y="45" width="12" height="4" fill="#38a169" />
              <text x="470" y="49" fontSize="10" fill="#505050">发射率</text>
              
              {/* 标题 */}
              <text x="300" y="20" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#202020">
                {selectedMaterial.name}的光谱特性曲线
              </text>
            </svg>
          </div>

          {/* 数据表格 */}
          <div className={styles.dataTableContainer}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th width="30%">波长 (μm)</th>
                  <th width="30%">光谱反射率</th>
                  <th width="30%">光谱发射率</th>
                  <th width="10%">操作</th>
                </tr>
              </thead>
              <tbody>
                {spectralData.map((row, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="number"
                        value={row.wavelength}
                        step="0.1"
                        min="0"
                        onChange={(e) => handleSpectralDataChange(index, 'wavelength', parseFloat(e.target.value))}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={row.reflectivity}
                        step="0.01"
                        min="0"
                        max="1"
                        onChange={(e) => handleSpectralDataChange(index, 'reflectivity', parseFloat(e.target.value))}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={row.emissivity}
                        step="0.01"
                        min="0"
                        max="1"
                        onChange={(e) => handleSpectralDataChange(index, 'emissivity', parseFloat(e.target.value))}
                      />
                    </td>
                    <td>
                      <button className={styles.deleteBtn} onClick={() => handleDeleteRow(index)}>🗑️</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={styles.tableActions}>
              <button className={styles.addRowBtn} onClick={handleAddRow}>
                <span>+ 添加数据点</span>
              </button>
              <div className={styles.dataCount}>
                共 {spectralData.length} 个数据点
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



