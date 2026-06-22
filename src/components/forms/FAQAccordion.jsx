import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ question, answer, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-outline-variant rounded-xl bg-surface-container-lowest overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="font-body-large text-body-large font-semibold text-on-surface">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-on-surface-variant transition-transform duration-300 ${
            isOpen ? 'transform rotate-180 text-primary' : ''
          }`}
        />
      </button>
      
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-6 pb-6">
          <p className="font-body-base text-body-base text-on-surface-variant leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
