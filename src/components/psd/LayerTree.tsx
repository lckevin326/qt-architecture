import { useState } from 'react';
import styles from './LayerTree.module.css';

interface LayerItem {
  id: number;
  name: string;
  type: 'layer' | 'group' | 'background';
  visible: boolean;
  children?: LayerItem[];
  linked: boolean;
}

interface LayerTreeProps {
  layers: LayerItem[];
  selectedLayer: number | null;
  onSelectLayer: (id: number) => void;
}

const LayerTreeItem = ({ 
  layer, 
  level = 0,
  selectedLayer,
  onSelectLayer 
}: { 
  layer: LayerItem; 
  level?: number;
  selectedLayer: number | null;
  onSelectLayer: (id: number) => void;
}) => {
  const [expanded, setExpanded] = useState(true);
  const hasChildren = layer.children && layer.children.length > 0;

  return (
    <div className={styles.layerItem} style={{ paddingLeft: `${level * 20}px` }}>
      <div 
        className={`${styles.layerHeader} ${selectedLayer === layer.id ? styles.selected : ''}`}
        onClick={() => onSelectLayer(layer.id)}
      >
        {hasChildren && (
          <span 
            className={styles.expandIcon}
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(!expanded);
            }}
          >
            {expanded ? '🔽' : '▶️'}
          </span>
        )}
        
        <span className={styles.typeIcon}>
          {layer.type === 'group' ? '📁' : 
           layer.type === 'background' ? '🖼️' : '📄'}
        </span>

        <span className={styles.layerName}>{layer.name}</span>

        <span className={styles.visibilityIcon}>
          {layer.visible ? '👁️' : '👁️‍🗨️'}
        </span>

        <span className={`${styles.layerStatus} ${
          layer.linked ? styles.layerLinked : styles.layerUnlinked
        }`}>
          {layer.linked ? '已关联' : '未关联'}
        </span>
      </div>

      {hasChildren && expanded && layer.children && (
        <div className={styles.children}>
          {layer.children.map(child => (
            <LayerTreeItem 
              key={child.id}
              layer={child}
              level={level + 1}
              selectedLayer={selectedLayer}
              onSelectLayer={onSelectLayer}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function LayerTree({ layers, selectedLayer, onSelectLayer }: LayerTreeProps) {
  return (
    <div className={styles.layerTree}>
      {layers.map(layer => (
        <LayerTreeItem 
          key={layer.id}
          layer={layer}
          selectedLayer={selectedLayer}
          onSelectLayer={onSelectLayer}
        />
      ))}
    </div>
  );
}

