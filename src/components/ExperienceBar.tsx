import React from 'react';
import styles from '../styles/components/ExperienceBar.module.css'

const ExperienceBar: React.FC = () => {
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div >
        <div style={{ width: '50%' }} />
        
        <span className="ball" style={{ left: '50%' }}>
          
        </span>

        <span style={{ left: '50%' }}>
          300 XP
        </span>
      </div>
      <span>600 xp</span>
    </header>
  )
}

export default ExperienceBar;