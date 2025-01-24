import { useState, useEffect, useRef } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type HireMeModalProps = {
  onClose: () => void;
  onSubmit: (formData: FormData) => void;
};

const HireMeModal = ({ onClose, onSubmit }: HireMeModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const modalRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div ref={modalRef} className="bg-[#1e1e1e] p-6 rounded-lg w-full max-w-md">
        <h2 className="text-zinc-300 text-xl font-semibold mb-4">Hire Me</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-zinc-800 text-zinc-300 p-2 rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-zinc-800 text-zinc-300 p-2 rounded-lg"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="bg-zinc-800 text-zinc-300 p-2 rounded-lg"
            rows={4}
            required
          />
          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-zinc-700 text-zinc-300 px-4 py-2 rounded-lg hover:bg-zinc-600 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-900/30 text-green-400 px-4 py-2 rounded-lg hover:bg-green-900/40 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HireMeModal;