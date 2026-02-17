import { Camera, Maximize2 } from 'lucide-react';
import { useState } from 'react';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: '/image-01.jpg',
      title: '大型クレーン作業',
      description: '産業施設でのクレーン操作作業'
    },
    {
      src: '/image-02.jpg',
      title: '大型クレーン車',
      description: '冬季作業対応の最新鋭クレーン車'
    },
    {
      src: '/image-03.jpg',
      title: 'タンク施工作業',
      description: 'インフラ設備の保守・施工作業'
    },
    {
      src: '/image-04.jpg',
      title: '大型クレーン作業',
      description: '産業施設での大型クレーン作業'
    },
    {
      src: '/image-05.jpg',
      title: '冬季クレーン作業',
      description: '雪の中での精密作業'
    },
    {
      src: '/image-06.jpg',
      title: '大型重機作業',
      description: '最新設備による施工作業'
    }
  ];

  return (
    <>
      <section id="gallery" className="py-20 sm:py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-blue-600/20 border border-blue-600 rounded-full px-6 py-3 mb-8">
              <Camera className="text-blue-500" size={28} />
              <span className="text-blue-500 font-bold text-lg">現場ギャラリー</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              私たちの現場
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              最新の設備と技術で、北海道のインフラを支える現場の様子をご覧ください。
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative bg-gray-800 rounded-2xl overflow-hidden cursor-pointer hover:transform hover:scale-105 transition-all duration-300 aspect-square"
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-bold text-xl mb-2">{image.title}</h3>
                    <p className="text-gray-300 text-sm">{image.description}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Maximize2 className="text-white" size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">
              画像をクリックすると拡大表示されます
            </p>
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-blue-400 text-4xl font-light transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="max-w-6xl w-full">
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].title}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
            <div className="text-center mt-6">
              <h3 className="text-white font-bold text-2xl mb-2">
                {galleryImages[selectedImage].title}
              </h3>
              <p className="text-gray-400">{galleryImages[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
