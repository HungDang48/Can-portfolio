import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Gallery.css';

interface Artwork {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  year: string;
  medium: string;
}

const Gallery: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const artworks: Artwork[] = [
    {
      id: 1,
      title: t('gallery.portrait'),
      description: t('gallery.portrait_desc', 'Bức chân dung thể hiện vẻ đẹp và sự duyên dáng của người phụ nữ Việt Nam'),
      image: '👩',
      category: 'portrait',
      year: '2024',
      medium: 'Digital Painting'
    },
    {
      id: 2,
      title: t('gallery.landscape'),
      description: t('gallery.landscape_desc', 'Khám phá vẻ đẹp hoang dã của thiên nhiên qua góc nhìn nghệ thuật'),
      image: '🏔️',
      category: 'landscape',
      year: '2023',
      medium: 'Oil on Canvas'
    },
    {
      id: 3,
      title: t('gallery.character'),
      description: t('gallery.character_desc', 'Nhân vật trong thế giới tưởng tượng với chi tiết phức tạp'),
      image: '🧙‍♂️',
      category: 'character',
      year: '2024',
      medium: 'Digital Art'
    },
    {
      id: 4,
      title: t('gallery.concept'),
      description: t('gallery.concept_desc', 'Concept art về thành phố trong tương lai với kiến trúc độc đáo'),
      image: '🏙️',
      category: 'concept',
      year: '2023',
      medium: 'Digital Painting'
    },
    {
      id: 5,
      title: t('gallery.still_life'),
      description: t('gallery.still_life_desc', 'Tranh hoa sen với màu sắc tươi mới và bố cục hài hòa'),
      image: '🌸',
      category: 'still-life',
      year: '2024',
      medium: 'Watercolor'
    },
    {
      id: 6,
      title: t('gallery.character'),
      description: t('gallery.character_desc2', 'Nhân vật chiến binh với trang phục và vũ khí cổ đại'),
      image: '⚔️',
      category: 'character',
      year: '2023',
      medium: 'Digital Painting'
    },
    {
      id: 7,
      title: t('gallery.landscape'),
      description: t('gallery.landscape_desc2', 'Cảnh biển lúc hoàng hôn với ánh sáng vàng cam ấm áp'),
      image: '🌅',
      category: 'landscape',
      year: '2024',
      medium: 'Acrylic'
    },
    {
      id: 8,
      title: t('gallery.concept'),
      description: t('gallery.concept_desc2', 'Concept thiết kế logo cho thương hiệu với phong cách hiện đại'),
      image: '🎨',
      category: 'concept',
      year: '2024',
      medium: 'Digital Design'
    }
  ];

  const filters = [
    { id: 'all', label: t('gallery.all') },
    { id: 'portrait', label: t('gallery.portrait') },
    { id: 'landscape', label: t('gallery.landscape') },
    { id: 'character', label: t('gallery.character') },
    { id: 'concept', label: t('gallery.concept') },
    { id: 'still-life', label: t('gallery.still_life') }
  ];

  const filteredArtworks = activeFilter === 'all' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === activeFilter);

  const openModal = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
  };

  const closeModal = () => {
    setSelectedArtwork(null);
  };

  return (
    <div className="gallery-page page-transition">
      <section className="gallery-hero">
        <div className="container">
          <h1 className="gallery-title">{t('gallery.title')}</h1>
          <p className="gallery-subtitle">
            {t('gallery.subtitle')}
          </p>
        </div>
      </section>

      <section className="gallery-content">
        <div className="container">
          <div className="gallery-filters">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="artworks-grid">
            {filteredArtworks.map(artwork => (
              <div key={artwork.id} className="artwork-card" onClick={() => openModal(artwork)}>
                <div className="artwork-image">
                  <div className="artwork-placeholder">
                    {artwork.image}
                  </div>
                </div>
                
                <div className="artwork-info">
                  <h3 className="artwork-title">{artwork.title}</h3>
                  <p className="artwork-description">{artwork.description}</p>
                  
                  <div className="artwork-meta">
                    <span className="artwork-year">{artwork.year}</span>
                    <span className="artwork-medium">{artwork.medium}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredArtworks.length === 0 && (
            <div className="no-artworks">
              <p>{t('gallery.no_artworks')}</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedArtwork && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-artwork">
              <div className="modal-image">
                <div className="modal-placeholder">
                  {selectedArtwork.image}
                </div>
              </div>
              
              <div className="modal-info">
                <h2 className="modal-title">{selectedArtwork.title}</h2>
                <p className="modal-description">{selectedArtwork.description}</p>
                
                <div className="modal-meta">
                  <div className="meta-item">
                    <strong>{t('gallery.year')}:</strong> {selectedArtwork.year}
                  </div>
                  <div className="meta-item">
                    <strong>{t('gallery.medium')}:</strong> {selectedArtwork.medium}
                  </div>
                  <div className="meta-item">
                    <strong>{t('gallery.category')}:</strong> {filters.find(f => f.id === selectedArtwork.category)?.label}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery; 