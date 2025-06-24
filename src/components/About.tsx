import React from 'react';
import './About.css';

const About: React.FC = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'CSS/SCSS', level: 88 },
    { name: 'HTML', level: 95 },
    { name: 'Node.js', level: 75 },
    { name: 'Git', level: 80 },
    { name: 'Responsive Design', level: 85 }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">Về Tôi</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Chào mừng bạn đến với portfolio của tôi!</h3>
            <p>
              Tôi là một Frontend Developer đam mê với việc tạo ra những trải nghiệm web tuyệt vời. 
              Với hơn 3 năm kinh nghiệm trong lĩnh vực phát triển web, tôi đã làm việc với nhiều 
              công nghệ hiện đại và tạo ra những ứng dụng web chất lượng cao.
            </p>
            <p>
              Tôi tin rằng thiết kế tốt không chỉ đẹp mắt mà còn phải thực dụng và dễ sử dụng. 
              Mỗi dự án tôi tham gia đều được tôi đầu tư thời gian để hiểu rõ yêu cầu của khách hàng 
              và tạo ra giải pháp tối ưu nhất.
            </p>
            
            <div className="about-features">
              <div className="feature">
                <span className="feature-icon">🎨</span>
                <div>
                  <h4>Thiết Kế Đẹp</h4>
                  <p>Tạo ra giao diện hiện đại và thân thiện với người dùng</p>
                </div>
              </div>
              <div className="feature">
                <span className="feature-icon">⚡</span>
                <div>
                  <h4>Hiệu Suất Cao</h4>
                  <p>Tối ưu hóa tốc độ tải trang và trải nghiệm người dùng</p>
                </div>
              </div>
              <div className="feature">
                <span className="feature-icon">📱</span>
                <div>
                  <h4>Responsive</h4>
                  <p>Hoạt động hoàn hảo trên mọi thiết bị và kích thước màn hình</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-skills">
            <h3>Kỹ Năng Của Tôi</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 