'use client';

import { useRouter } from 'next/navigation';
import MainLayout from '@/components/layout/MainLayout';
import styles from './MaterialEdit.module.css';
import { useState } from 'react';

export default function MaterialEditClient() {
  const router = useRouter();
  const isEdit = false; // 根据路由参数判断是否为编辑模式

  // 表单状态
  const [formData, setFormData] = useState({
    name: '',
    temperature: 293,
    totalEmissivity: 0.12,
    modulationFactor: 0.85,
    mainCategory: '金属',
    subCategory: '合金',
    description: '',
    spectralData: [
      { wavelength: 2.0, reflectivity: 0.88, emissivity: 0.12 },
      { wavelength: 4.0, reflectivity: 0.85, emissivity: 0.15 },
      { wavelength: 6.0, reflectivity: 0.82, emissivity: 0.18 }
    ]
  });

  // 处理表单字段变化
  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // 处理光谱数据变化
  const handleSpectralDataChange = (index: number, field: string, value: number) => {
    const newSpectralData = [...formData.spectralData];
    newSpectralData[index] = {
      ...newSpectralData[index],
      [field]: value
    };
    setFormData(prev => ({
      ...prev,
      spectralData: newSpectralData
    }));
  };

  // 添加新的光谱数据点
  const addSpectralDataPoint = () => {
    setFormData(prev => ({
      ...prev,
      spectralData: [
        ...prev.spectralData,
        { wavelength: 0, reflectivity: 0, emissivity: 0 }
      ]
    }));
  };

  // 删除光谱数据点
  const removeSpectralDataPoint = (index: number) => {
    setFormData(prev => ({
      ...prev,
      spectralData: prev.spectralData.filter((_, i) => i !== index)
    }));
  };

  return (
    <MainLayout>
      <div className={styles.pageContainer}>
        {/* 页面头部 */}
        <div className={styles.pageHeader}>
          <div>
            <h1 className={styles.pageTitle}>
              {isEdit ? '编辑基础材质' : '新建基础材质'}
            </h1>
            <div className={styles.breadcrumb}>
              <span className={styles.breadcrumbLink} onClick={() => router.push('/')}>首页</span>
              <span className={styles.breadcrumbSeparator}>/</span>
              <span className={styles.breadcrumbLink} onClick={() => router.push('/material/basic')}>基础材质</span>
              <span className={styles.breadcrumbSeparator}>/</span>
              <span>{isEdit ? '编辑' : '新建'}</span>
            </div>
          </div>
          <div className={styles.actions}>
            <button 
              className={styles.cancelButton}
              onClick={() => router.push('/material/basic')}
            >
              取消
            </button>
            <button 
              className={styles.saveButton}
              onClick={() => {
                // TODO: 处理保存逻辑
                console.log('保存数据:', formData);
              }}
            >
              保存
            </button>
          </div>
        </div>

        {/* 编辑区布局 */}
        <div className={styles.editLayout}>
          {/* 主要编辑区 */}
          <div className={styles.editMain}>
            {/* 基本信息面板 */}
            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <span className={styles.panelHeaderIcon}>📝</span>
                <span>基本信息</span>
              </div>
              <div className={styles.panelBody}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>材质名称</label>
                  <input
                    type="text"
                    className={styles.formInput}
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="请输入材质名称"
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formCol}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>平均温度 (K)</label>
                      <input
                        type="number"
                        className={styles.formInput}
                        value={formData.temperature}
                        onChange={(e) => handleInputChange('temperature', e.target.value)}
                        min="0"
                        step="0.1"
                      />
                      <div className={styles.formHelp}>材质的标准参考温度</div>
                    </div>
                  </div>
                  <div className={styles.formCol}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>总发射率</label>
                      <input
                        type="number"
                        className={styles.formInput}
                        value={formData.totalEmissivity}
                        onChange={(e) => handleInputChange('totalEmissivity', e.target.value)}
                        min="0"
                        max="1"
                        step="0.01"
                      />
                      <div className={styles.formHelp}>取值范围: 0.0 - 1.0</div>
                    </div>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>调制因子</label>
                  <input
                    type="range"
                    className={styles.rangeSlider}
                    value={formData.modulationFactor}
                    onChange={(e) => handleInputChange('modulationFactor', e.target.value)}
                    min="0"
                    max="1"
                    step="0.01"
                  />
                  <div className={styles.formHelp}>调制因子: {formData.modulationFactor}</div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formCol}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>主类别</label>
                      <select
                        className={styles.formSelect}
                        value={formData.mainCategory}
                        onChange={(e) => handleInputChange('mainCategory', e.target.value)}
                      >
                        <option value="金属">金属</option>
                        <option value="非金属">非金属</option>
                        <option value="复合">复合</option>
                        <option value="纤维">纤维</option>
                        <option value="涂层">涂层</option>
                      </select>
                    </div>
                  </div>
                  <div className={styles.formCol}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>子类别</label>
                      <select
                        className={styles.formSelect}
                        value={formData.subCategory}
                        onChange={(e) => handleInputChange('subCategory', e.target.value)}
                      >
                        <option value="合金">合金</option>
                        <option value="纯金属">纯金属</option>
                        <option value="氧化物">氧化物</option>
                        <option value="碳材料">碳材料</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>材质描述</label>
                  <textarea
                    className={styles.formTextarea}
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder="请输入材质描述信息"
                  />
                </div>
              </div>
            </div>

            {/* 光谱数据面板 */}
            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <span className={styles.panelHeaderIcon}>📊</span>
                <span>光谱数据</span>
              </div>
              <div className={styles.panelBody}>
                <table className={styles.spectrumTable}>
                  <thead>
                    <tr>
                      <th>波长 (μm)</th>
                      <th>光谱反射率</th>
                      <th>光谱发射率</th>
                      <th>操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formData.spectralData.map((data, index) => (
                      <tr key={index}>
                        <td>
                          <input
                            type="number"
                            value={data.wavelength}
                            onChange={(e) => handleSpectralDataChange(index, 'wavelength', parseFloat(e.target.value))}
                            step="0.1"
                            min="0"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={data.reflectivity}
                            onChange={(e) => handleSpectralDataChange(index, 'reflectivity', parseFloat(e.target.value))}
                            step="0.01"
                            min="0"
                            max="1"
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            value={data.emissivity}
                            onChange={(e) => handleSpectralDataChange(index, 'emissivity', parseFloat(e.target.value))}
                            step="0.01"
                            min="0"
                            max="1"
                          />
                        </td>
                        <td>
                          <button
                            className={styles.tableActionBtn}
                            onClick={() => removeSpectralDataPoint(index)}
                          >
                            🗑️
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className={styles.tableActions}>
                  <button
                    className={styles.addRowBtn}
                    onClick={addSpectralDataPoint}
                  >
                    <span className={styles.addRowIcon}>+</span>
                    <span>添加数据点</span>
                  </button>
                  <button className={styles.importBtn}>
                    <span className={styles.importIcon}>📁</span>
                    <span>导入CSV</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 侧边信息区 */}
          <div className={styles.editSidebar}>
            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <span className={styles.panelHeaderIcon}>ℹ️</span>
                <span>材质信息</span>
              </div>
              <div className={styles.panelBody}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>创建信息</label>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>创建时间:</span>
                    <span className={styles.infoValue}>{new Date().toLocaleString()}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>创建用户:</span>
                    <span className={styles.infoValue}>当前用户</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
