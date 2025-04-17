import React from 'react';

/**
 * 状态栏组件
 * 显示系统状态信息
 */
const StatusBar: React.FC = () => {
  return (
    <div className="bg-qt-control-bg border-t border-qt-border py-qt-1 px-qt-4 flex justify-between text-qt-xs text-qt-text-light">
      <div className="flex items-center">
        <div className="w-[8px] h-[8px] rounded-full bg-qt-success mr-qt-2"></div>
        <span>系统运行正常</span>
        <span className="mx-qt-4 text-qt-border">|</span>
        <span>数据库已连接</span>
        <span className="mx-qt-4 text-qt-border">|</span>
        <span>内存使用: 128MB</span>
      </div>
      <div>
        <span>材质管理器系统 v1.2.0</span>
      </div>
    </div>
  );
};

export default StatusBar;
