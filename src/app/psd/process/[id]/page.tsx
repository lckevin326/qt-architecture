'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import LayerTree from '@/components/psd/LayerTree';
import styles from './page.module.css';

// 保持原有的 MOCK_LAYERS 和 MOCK_MATERIALS 数据不变
const MOCK_LAYERS = [
  { id: 1, name: '背景', type: 'background', visible: true },
  { id: 2, name: '建筑主体', type: 'layer', visible: true },
  { id: 3, name: '窗户', type: 'group', visible: true, 
    children: [
      { id: 4, name: '窗户-玻璃', type: 'layer', visible: true },
      { id: 5, name: '窗户-框架', type: 'layer', visible: true }
    ]
  },
  { id: 6, name: '外墙装饰', type: 'layer', visible: true }
];

const MOCK_MATERIALS = [
  { 
    id: 1, 
    name: '混凝土C30', 
    type: 'basic',
    temperature: 298,
    emissivity: 0.85,
    modulationFactor: 0.92,
    spectralData: true,
    tags: ['建筑材料', '常用']
  },
  { 
    id: 2, 
    name: '钢筋混凝土', 
    type: 'composite',
    temperature: 298,
    emissivity: 0.92,
    composition: [
      { materialId: 1, name: '混凝土C30', percentage: 85 },
      { materialId: 3, name: '钢筋', percentage: 15 }
    ],
    tags: ['建筑材料', '复合']
  }
];

export default function PSDProcessPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [selectedLayer, setSelectedLayer] = useState<number | null>(null);
  const [selectedMaterialType, setSelectedMaterialType] = useState<'basic' | 'composite'>('basic');
  const [selectedMaterial, setSelectedMaterial] = useState<number | null>(null);

  const handleBackToList = () => {
    router.push('/psd/list');
  };

  const handleMaterialTypeChange = (type: 'basic' | 'composite') => {
    setSelectedMaterialType(type);
    setSelectedMaterial(null);
  };

  const getMaterialInfo = () => {
    if (!selectedMaterial) return null;
    const material = MOCK_MATERIALS.find(m => m.id === selectedMaterial);
    if (!material) return null;

    if (material.type === 'basic') {
      return (
        <>
          <div className={styles.infoItem}>
            <label>材质类型</label>
            <span>基础材质</span>
          </div>
          <div className={styles.infoItem}>
            <label>平均温度</label>
            <span>{material.temperature}K</span>
          </div>
          <div className={styles.infoItem}>
            <label>总发射率</label>
            <span>{material.emissivity}</span>
          </div>
          <div className={styles.infoItem}>
            <label>调制因子</label>
            <span>{material.modulationFactor}</span>
          </div>
          <div className={styles.infoItem}>
            <label>光谱数据</label>
            <span>{material.spectralData ? '已配置' : '未配置'}</span>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className={styles.infoItem}>
            <label>材质类型</label>
            <span>复合材质</span>
          </div>
          <div className={styles.infoItem}>
            <label>总发射率</label>
            <span>{material.emissivity}</span>
          </div>
          <div className={styles.compositionList}>
            <label>材质组成：</label>
            {material.composition.map((comp, index) => (
              <div key={index} className={styles.compositionItem}>
                <span>{comp.name}</span>
                <span>{comp.percentage}%</span>
              </div>
            ))}
          </div>
        </>
      );
    }
  };

  // 添加导出处理函数
  const handleExport = (format: 'PNG' | 'EXR' | 'TXT') => {
    // TODO: 实现具体的导出逻辑
    console.log(`导出${format}格式文件`);
  };

  return (
    <div className={styles.container}>
      {/* 页面头部 */}
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>PSD处理 - 图层材质关联</h1>
          <div className={styles.breadcrumb}>
            <span>首页</span>
            <span className={styles.separator}>/</span>
            <span>PSD处理</span>
            <span className={styles.separator}>/</span>
            <span>图层管理</span>
          </div>
        </div>
        <div className={styles.actions}>
          <button 
            className={styles.button}
            onClick={handleBackToList}
          >
            返回列表
          </button>
          <button 
            className={styles.button}
            onClick={() => handleExport('PNG')}
          >
            <span>📷</span>
            <span>导出PNG</span>
          </button>
          <button 
            className={styles.button}
            onClick={() => handleExport('EXR')}
          >
            <span>🎞️</span>
            <span>导出EXR</span>
          </button>
          <button 
            className={styles.button}
            onClick={() => handleExport('TXT')}
          >
            <span>📝</span>
            <span>导出TXT</span>
          </button>
          <button className={styles.buttonPrimary}>
            <span>💾</span>
            <span>保存</span>
          </button>
        </div>
      </div>

      {/* 提示信息 */}
      <div className={styles.infoPanel}>
        <div className={styles.infoTitle}>操作提示</div>
        <div className={styles.infoContent}>
          请从左侧选择需要处理的图层，在右侧面板中关联相应的材质。可以为每个图层设置不同的材质属性。
        </div>
      </div>

      {/* 主工作区 */}
      <div className={styles.workspace}>
        {/* 左侧图层面板 */}
        <div className={styles.layersPanel}>
          <div className={styles.panelHeader}>
            <span>图层列表</span>
            <div className={styles.panelActions}>
              <button className={styles.iconButton} title="展开全部">🔽</button>
              <button className={styles.iconButton} title="收起全部">🔼</button>
            </div>
          </div>
          <div className={styles.layersList}>
            <LayerTree 
              layers={MOCK_LAYERS}
              selectedLayer={selectedLayer}
              onSelectLayer={setSelectedLayer}
            />
          </div>
          <div className={styles.layerStats}>
            <span className={styles.statItem}>
              已关联: <span className={styles.statValue}>4</span>
            </span>
            <span className={styles.statItem}>
              未关联: <span className={styles.statValue}>3</span>
            </span>
          </div>
        </div>

        {/* 中间预览区域 */}
        <div className={styles.previewPanel}>
          <div className={styles.panelHeader}>
            <span>PSD预览</span>
            <div className={styles.panelActions}>
              <button className={styles.iconButton} title="缩放">🔍</button>
              <button className={styles.iconButton} title="适应窗口">↔️</button>
            </div>
          </div>
          <div className={styles.previewContent}>
            {/* 这里显示PSD预览 */}
            <div className={styles.previewPlaceholder}>
              PSD预览区域
            </div>
          </div>
        </div>

        {/* 右侧材质面板 */}
        <div className={styles.materialPanel}>
          <div className={styles.panelHeader}>
            <span>材质关联</span>
          </div>
          <div className={styles.materialContent}>
            <div className={styles.materialForm}>
              <div className={styles.formGroup}>
                <label>当前图层</label>
                <div className={styles.selectedLayer}>
                  {selectedLayer ? MOCK_LAYERS.find(l => l.id === selectedLayer)?.name : '未选择'}
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label>材质类型</label>
                <select 
                  className={styles.select}
                  value={selectedMaterialType}
                  onChange={(e) => handleMaterialTypeChange(e.target.value as 'basic' | 'composite')}
                >
                  <option value="basic">基础材质</option>
                  <option value="composite">复合材质</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label>选择材质</label>
                <select 
                  className={styles.select}
                  value={selectedMaterial || ''}
                  onChange={(e) => setSelectedMaterial(Number(e.target.value))}
                >
                  <option value="">请选择材质</option>
                  {MOCK_MATERIALS
                    .filter(m => m.type === selectedMaterialType)
                    .map(material => (
                      <option key={material.id} value={material.id}>
                        {material.name}
                      </option>
                    ))}
                </select>
              </div>
              <button className={styles.confirmButton}>
                确认关联材质
              </button>
            </div>

            <div className={styles.materialInfo}>
              <h3>材质信息</h3>
              <div className={styles.infoGrid}>
                {getMaterialInfo()}
              </div>
            </div>

            <div className={styles.processLog}>
              <h3>处理日志</h3>
              <div className={styles.logContent}>
                <div className={styles.logItem}>
                  <span className={styles.logTime}>14:30:25</span>
                  <span className={styles.logMessage}>已关联图层"建筑主体"到材质"混凝土C30"</span>
                </div>
                {/* 更多日志项... */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




