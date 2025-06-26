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
      year: '6/2024-4/2025',
      title: 'FPTSoftwareInnovation',
      description: '2D Animation, Graphic Design, Motion Graphic, Comtor tiếng Nhật'
    },
    {
      year: '5/2023-4/2024',
      title: 'WemoMedia',
      description: 'Vẽ Storyboard'
    },
    {
      year: '10/2022-12/2022',
      title: 'VuogleClass',
      description: 'Khóa học Vẽ minh họa'
    },
    {
      year: '1/2021-3/2021',
      title: 'T.ARTWorkshop',
      description: 'Khóa học Digital Painting Basic'
    },
    {
      year: '2020-2021',
      title: 'TokyoDesignerGakuin',
      description: 'Illustration course'
    },
    {
      year: '2018-2020',
      title: 'TokyoIkueiJapaneseSchool',
      description: 'Illustration course'
    }
    
  ];

  return (
    <div className="about-page page-transition">
      <section className="about-hero">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h1 className="about-title">Xin chào!</h1>
              <p className="about-intro">
              Tôi là Lê Văn Can – một Graphic Designer kiêm Illustrator, đam mê sáng tạo và kể chuyện thông qua hình ảnh.
              Với tình yêu đặc biệt dành cho điện ảnh, đặc biệt là phong cách độc đáo của Nobuhiko Obayashi, tôi luôn nỗ lực mang những khung hình đầy cảm xúc và tính nghệ thuật vào từng tác phẩm của mình.
              </p>
              <p>
                Tôi tin rằng nghệ thuật không chỉ là việc tạo ra những hình ảnh đẹp, mà còn là 
                cách để truyền tải cảm xúc và câu chuyện. Mỗi tác phẩm tôi tạo ra đều mang trong 
                mình một phần tâm hồn và trải nghiệm của tôi.
              </p>
            </div>
            
            <div className="about-image">
  <div className="artist-portrait">
    <div className="portrait-placeholder">
      <img src="/img/CanAva.png" alt="Lê Văn Can - Artist Portrait" className="portrait-img" />
    </div>
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
      <p>Với 4 năm học tập và làm việc tại Nhật Bản cùng nền tảng tiếng Nhật N2, tôi thấu hiểu thẩm mỹ và xu hướng thiết kế tại thị trường này. Tôi luôn tìm cách kết hợp tư duy sáng tạo và cảm hứng nghệ thuật để tạo ra những tác phẩm khác biệt.</p>
    </div>
    <div className="philosophy-item">
      <div className="philosophy-icon">💫</div>
      <h3>Cảm Xúc Chân Thật</h3>
      <p>Tôi tin rằng mỗi tác phẩm phải mang được chiều sâu cảm xúc và câu chuyện riêng. Đó là cách tôi kết nối với người xem – bằng sự chân thành và nghệ thuật kể chuyện bằng hình ảnh.</p>
    </div>
    <div className="philosophy-item">
      <div className="philosophy-icon">🌟</div>
      <h3>Chất Lượng Tuyệt Đối</h3>
      <p>Với tinh thần "luôn cố gắng đến cùng để đạt kết quả tốt nhất", tôi cam kết mang đến sản phẩm hoàn thiện chỉn chu ở mọi khía cạnh – từ concept, bố cục đến từng chi tiết thiết kế.</p>
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