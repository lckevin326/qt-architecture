'use client';
import { useRouter } from 'next/navigation';
import MainLayout from '@/components/layout/MainLayout';
import styles from './MaterialEdit.module.css';

export default function MaterialEditClient({ 
  params: { action } 
}: { 
  params: { action: string } 
}) {
  const router = useRouter();
  const isEdit = action === 'edit';

  return (
    <MainLayout>
      <div className={styles.pageContainer}>
        {/* 页面头部 */}
        <div className={styles.pageHeader}>
          <div>
            <h1 className={styles.pageTitle}>
              {isEdit ? '编辑复合材质' : '新建复合材质'}
            </h1>
            <div className={styles.breadcrumb}>
              <span className={styles.breadcrumbLink} onClick={() => router.push('/')}>首页</span>
              <span className={styles.breadcrumbSeparator}>/</span>
              <span className={styles.breadcrumbLink} onClick={() => router.push('/material/composite')}>复合材质</span>
              <span className={styles.breadcrumbSeparator}>/</span>
              <span>{isEdit ? '编辑' : '新建'}</span>
            </div>
          </div>
          <div className={styles.actions}>
            <button 
              className={styles.cancelButton}
              onClick={() => router.push('/material/composite')}
            >
              取消
            </button>
            <button className={styles.saveButton}>
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
                <span>基本信息</span>
              </div>
              <div className={styles.panelBody}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>材质名称</label>
                  <input type="text" className={styles.formInput} />
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formCol}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>平均温度 (K)</label>
                      <input type="number" className={styles.formInput} />
                    </div>
                  </div>
                  <div className={styles.formCol}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>总发射率</label>
                      <input type="number" className={styles.formInput} step="0.01" min="0" max="1" />
                    </div>
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>调制因子</label>
                  <input type="range" className={styles.rangeSlider} min="0" max="1" step="0.01" />
                  <div className={styles.formHelp}>调制因子: 0.85</div>
                </div>
              </div>
            </div>

            {/* 材质组成面板 */}
            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <span>材质组成</span>
              </div>
              <div className={styles.panelBody}>
                <table className={styles.compositionTable}>
                  <thead>
                    <tr>
                      <th>基础材质</th>
                      <th>占比 (%)</th>
                      <th>操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <select className={styles.formSelect}>
                          <option>选择基础材质...</option>
                          <option>铝合金A7075</option>
                          <option>碳纤维</option>
                        </select>
                      </td>
                      <td>
                        <input type="number" className={styles.formInput} min="0" max="100" />
                      </td>
                      <td>
                        <button className={styles.tableActionBtn}>🗑️</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button className={styles.addRowBtn}>
                  + 添加基础材质
                </button>
              </div>
            </div>
          </div>

          {/* 侧边栏 */}
          <div className={styles.editSidebar}>
            {/* 材质信息面板 */}
            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <span>材质信息</span>
              </div>
              <div className={styles.panelBody}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>创建信息</label>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>创建时间:</span>
                    <span className={styles.infoValue}>2024-01-15 14:30</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>创建用户:</span>
                    <span className={styles.infoValue}>管理员</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 预览面板 */}
            <div className={styles.panel}>
              <div className={styles.panelHeader}>
                <span>光谱预览</span>
              </div>
              <div className={styles.panelBody}>
                <div className={styles.previewPlaceholder}>
                  光谱数据预览图表
                </div>
                <div className={styles.previewHelp}>
                  根据材质组成自动计算的光谱数据预览
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
