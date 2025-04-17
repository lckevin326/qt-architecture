import React from 'react';

/**
 * 工具栏组件
 * 显示常用操作按钮，如打开、保存等
 */
const ToolBar: React.FC = () => {
  // 工具栏按钮数据
  const toolbarButtons = [
    { id: 'open', icon: '📁', label: '打开' },
    { id: 'save', icon: '💾', label: '保存' },
    { id: 'separator1', type: 'separator' },
    { id: 'material', icon: '📋', label: '材质库' },
    { id: 'importPsd', icon: '🖼️', label: '导入PSD' },
    { id: 'separator2', type: 'separator' },
    { id: 'settings', icon: '⚙️', label: '设置' },
  ];

  return (
    <div className="bg-qt-control-bg border-b border-qt-border p-qt-2 flex items-center">
      {toolbarButtons.map((button) => 
        button.type === 'separator' ? (
          <div 
            key={button.id} 
            className="w-[1px] h-[18px] bg-qt-border mx-qt-4"
          ></div>
        ) : (
          <button key={button.id} className="qt-btn mr-qt-2">
            <span className="qt-btn-icon">{button.icon}</span>
            <span>{button.label}</span>
          </button>
        )
      )}
    </div>
  );
};

export default ToolBar;
