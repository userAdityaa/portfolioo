import React from 'react';
import { Mail, Twitter, Linkedin, Instagram } from 'lucide-react';

const ContactAndFooter = () => {
  return (
    <div className="flex flex-col gap-16 mt-16 pb-8">
      <div className="space-y-4">
        <h2 className="text-zinc-300 text-2xl font-semibold">Reach out to me.</h2>
        <p className="text-zinc-400">
          Feel free to reach out to me via email for any queries, collaboration opportunities, or further details. I'm also super active on X, so feel free to DM me there!
        </p>
        <div className="flex gap-4 mt-6">
          <a
            href="https://x.com/userAdityaa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-lg hover:bg-zinc-800 transition-colors shadow-lg border border-zinc-600 text-zinc-300"
          >
            <Twitter className="w-5 h-5" />
            Twitter
          </a>
          <a
            href="mailto:your@email.com"
            className="flex items-center gap-2 bg-zinc-900 px-4 py-2 rounded-lg hover:bg-zinc-800 transition-colors shadow-lg border border-zinc-600 text-zinc-300"
          >
            <Mail className="w-5 h-5" />
            Email
          </a>
        </div>
      </div>

      <footer className="flex flex-col items-center gap-8 pt-8 border-t border-zinc-800">
        <div className="flex gap-8">
          <a href="mailto:your@email.com" className="text-zinc-400 hover:text-zinc-300">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://x.com/userAdityaa" className="text-zinc-400 hover:text-zinc-300">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/aditya-chaudhary-1b7354248/" className="text-zinc-400 hover:text-zinc-300">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-zinc-400 hover:text-zinc-300">
            <Instagram className="w-6 h-6" />
          </a>
        </div>
        <p className="text-zinc-400">© 2025 Aditya. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactAndFooter;