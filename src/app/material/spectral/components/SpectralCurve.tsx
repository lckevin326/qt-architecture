'use client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from './SpectralCurve.module.css';

interface SpectralCurveProps {
  material: string;
}

const demoData = [
  { wavelength: 2.0, reflectance: 0.88, emissivity: 0.12 },
  { wavelength: 4.0, reflectance: 0.85, emissivity: 0.15 },
  { wavelength: 6.0, reflectance: 0.82, emissivity: 0.18 },
  { wavelength: 8.0, reflectance: 0.80, emissivity: 0.20 },
  { wavelength: 10.0, reflectance: 0.83, emissivity: 0.17 },
  { wavelength: 12.0, reflectance: 0.87, emissivity: 0.13 },
];

export default function SpectralCurve({ material }: SpectralCurveProps) {
  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <div className={styles.controlGroup}>
          <span className={styles.controlLabel}>X轴:</span>
          <select className={styles.controlSelect}>
            <option>波长 (μm)</option>
            <option>频率 (THz)</option>
          </select>
        </div>
        <div className={styles.controlGroup}>
          <span className={styles.controlLabel}>Y轴:</span>
          <select className={styles.controlSelect}>
            <option>反射率和发射率</option>
            <option>仅反射率</option>
            <option>仅发射率</option>
          </select>
        </div>
        <div className={styles.controlGroup}>
          <span className={styles.controlLabel}>比例:</span>
          <select className={styles.controlSelect}>
            <option>线性</option>
            <option>对数</option>
          </select>
        </div>
      </div>

      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={demoData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="wavelength" 
              label={{ value: '波长 (μm)', position: 'bottom' }} 
            />
            <YAxis 
              label={{ value: '反射率/发射率', angle: -90, position: 'left' }}
              domain={[0, 1]} 
            />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="reflectance" 
              stroke="#0078d7" 
              name="反射率"
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="emissivity" 
              stroke="#38a169" 
              name="发射率"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

