interface ImageModalProps {
  imageSrc: string;
  onClose: () => void;
}

export default function ImageModal({ imageSrc, onClose }: ImageModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div className="max-w-4xl max-h-full p-4">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt="Full size image"
          className="max-w-full max-h-[90vh] object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
}
