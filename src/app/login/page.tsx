'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    remember: false
  });
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.username === 'admin' && formData.password === 'admin') {
      router.push('/');
    } else {
      setError('用户名或密码错误');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--qt-bg-color)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        backgroundColor: 'var(--qt-control-bg)',
        padding: '16px',
        borderRadius: '2px',
        border: '1px solid var(--qt-border-color)',
        width: '360px'
      }}>
        <h1 style={{
          fontSize: '18px',
          fontWeight: 'bold',
          marginBottom: '12px',
          textAlign: 'center',
          color: 'var(--qt-text-color)'
        }}>
          材质管理器系统
        </h1>
        
        {error && (
          <div style={{
            backgroundColor: '#fef2f2',
            color: 'var(--qt-danger-color)',
            padding: '8px',
            marginBottom: '12px',
            borderRadius: '2px',
            fontSize: '12px'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '12px' }}>
            <input
              type="text"
              name="username"
              placeholder="用户名"
              value={formData.username}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '4px 8px',
                border: '1px solid var(--qt-border-color)',
                borderRadius: '2px',
                fontSize: '13px',
                outline: 'none'
              }}
            />
          </div>
          
          <div style={{ marginBottom: '12px' }}>
            <input
              type="password"
              name="password"
              placeholder="密码"
              value={formData.password}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '4px 8px',
                border: '1px solid var(--qt-border-color)',
                borderRadius: '2px',
                fontSize: '13px',
                outline: 'none'
              }}
            />
          </div>
          
          <div style={{
            marginBottom: '12px',
            display: 'flex',
            alignItems: 'center'
          }}>
            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleInputChange}
              style={{ marginRight: '8px' }}
            />
            <label style={{
              fontSize: '12px',
              color: 'var(--qt-text-light)'
            }}>
              记住我
            </label>
          </div>
          
          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: 'var(--qt-highlight-color)',
              color: 'white',
              padding: '4px',
              border: 'none',
              borderRadius: '2px',
              cursor: 'pointer',
              fontSize: '13px'
            }}
          >
            登录
          </button>
        </form>
        
        <p style={{
          marginTop: '8px',
          textAlign: 'center',
          fontSize: '12px',
          color: 'var(--qt-text-light)'
        }}>
          版本 1.2.0
        </p>
      </div>
    </div>
  );
}



