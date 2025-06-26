import React from 'react';
import './About.css';

const About: React.FC = () => {
  const skills = [
    { name: 'Digital Painting', level: 95 },
    { name: 'Character Design', level: 90 },
    { name: 'Landscape Art', level: 88 },
    { name: 'Portrait Drawing', level: 92 },
    { name: 'Concept Art', level: 85 },
    { name: 'Color Theory', level: 90 },
    { name: 'Composition', level: 87 },
    { name: 'Traditional Media', level: 80 }
  ];

  const experiences = [
    {
      year: '2023 - Hiện tại',
      title: 'Họa sĩ tự do',
      description: 'Tạo ra các tác phẩm nghệ thuật cho khách hàng cá nhân và doanh nghiệp'
    },
    {
      year: '2021 - 2023',
      title: 'Họa sĩ tại Studio ABC',
      description: 'Tham gia các dự án game và animation với vai trò concept artist'
    },
    {
      year: '2019 - 2021',
      title: 'Sinh viên Mỹ thuật',
      description: 'Học tập tại Đại học Mỹ thuật với chuyên ngành Hội họa'
    }
  ];

  return (
    <div className="about-page page-transition">
      <section className="about-hero">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h1 className="about-title">Về Tôi</h1>
              <p className="about-intro">
                Tôi là Lê Văn Can, một họa sĩ 2D đam mê với việc tạo ra những tác phẩm nghệ thuật 
                độc đáo và đầy cảm xúc. Với hơn 5 năm kinh nghiệm trong lĩnh vực nghệ thuật, 
                tôi đã phát triển phong cách riêng biệt kết hợp giữa kỹ thuật truyền thống và hiện đại.
              </p>
              <p>
                Tôi tin rằng nghệ thuật không chỉ là việc tạo ra những hình ảnh đẹp, mà còn là 
                cách để truyền tải cảm xúc và câu chuyện. Mỗi tác phẩm tôi tạo ra đều mang trong 
                mình một phần tâm hồn và trải nghiệm của tôi.
              </p>
            </div>
            
            <div className="about-image">
              <div className="artist-portrait">
                <div className="portrait-placeholder">👨‍🎨</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="artist-philosophy">
        <div className="container">
          <h2 className="section-title">Triết Lý Nghệ Thuật</h2>
          <div className="philosophy-grid">
            <div className="philosophy-item">
              <div className="philosophy-icon">🎨</div>
              <h3>Sáng Tạo Không Giới Hạn</h3>
              <p>Tôi tin vào việc phá vỡ các quy tắc truyền thống để tạo ra những tác phẩm độc đáo và đột phá.</p>
            </div>
            <div className="philosophy-item">
              <div className="philosophy-icon">💫</div>
              <h3>Cảm Xúc Chân Thật</h3>
              <p>Mỗi nét vẽ đều mang trong mình cảm xúc chân thật, tạo ra sự kết nối sâu sắc với người xem.</p>
            </div>
            <div className="philosophy-item">
              <div className="philosophy-icon">🌟</div>
              <h3>Chất Lượng Tuyệt Đối</h3>
              <p>Tôi cam kết mang đến những tác phẩm chất lượng cao nhất, từ concept đến hoàn thiện.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">Kỹ Năng Nghệ Thuật</h2>
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
      </section>

      <section className="experience-section">
        <div className="container">
          <h2 className="section-title">Hành Trình Nghệ Thuật</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{exp.year}</div>
                  <h3 className="timeline-title">{exp.title}</h3>
                  <p className="timeline-description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 