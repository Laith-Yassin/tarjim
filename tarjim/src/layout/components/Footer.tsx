import React from 'react';
import { Layout } from 'antd';
import '../style/Footer.css';

const { Footer: AntFooter } = Layout;

const Footer: React.FC = () => {
    return (
      <AntFooter className="custom-footer">
        <div>
          <h2>Your Company</h2>
          <p>©2024 All rights reserved.</p>
        </div>
      </AntFooter>
    );
  };
  
  export default Footer;
