import { useState, useEffect, useRef } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  countryCode: string;
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
        phone: "",
        countryCode: "+91", 
        message: "",
    });

  const modalRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
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
          <div className="flex gap-2">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="bg-zinc-800 text-zinc-300 p-2 rounded-lg w-1/4"
            >
            <option value="+1">+1 (US)</option>
            <option value="+44">+44 (UK)</option>
            <option value="+91">+91 (IN)</option>
            <option value="+61">+61 (AU)</option>
            <option value="+86">+86 (CN)</option> {/* China */}
            <option value="+81">+81 (JP)</option> {/* Japan */}
            <option value="+49">+49 (DE)</option> {/* Germany */}
            <option value="+33">+33 (FR)</option> {/* France */}
            <option value="+7">+7 (RU)</option> {/* Russia */}
            <option value="+82">+82 (KR)</option> {/* South Korea */}
            <option value="+55">+55 (BR)</option> {/* Brazil */}
            <option value="+52">+52 (MX)</option> {/* Mexico */}
            <option value="+39">+39 (IT)</option> {/* Italy */}
            <option value="+34">+34 (ES)</option> {/* Spain */}
            <option value="+27">+27 (ZA)</option> {/* South Africa */}
            <option value="+20">+20 (EG)</option> {/* Egypt */}
            <option value="+92">+92 (PK)</option> {/* Pakistan */}
            <option value="+62">+62 (ID)</option> {/* Indonesia */}
            <option value="+90">+90 (TR)</option> {/* Turkey */}
            <option value="+63">+63 (PH)</option> {/* Philippines */}
            <option value="+84">+84 (VN)</option> {/* Vietnam */}
            <option value="+65">+65 (SG)</option> {/* Singapore */}
            <option value="+60">+60 (MY)</option> {/* Malaysia */}
            <option value="+64">+64 (NZ)</option> {/* New Zealand */}
            <option value="+31">+31 (NL)</option> {/* Netherlands */}
            <option value="+46">+46 (SE)</option> {/* Sweden */}
            <option value="+41">+41 (CH)</option> {/* Switzerland */}
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="bg-zinc-800 text-zinc-300 p-2 rounded-lg w-3/4"
              required
            />
          </div>
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