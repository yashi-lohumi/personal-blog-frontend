import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

export default function Newsletter({
  title = "Join 50k+ Forward Thinkers",
  description = "Get our weekly roadmap of high-growth technology insights, leadership strategies, and design trends delivered directly to your inbox."
}) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    // Simulate API registration delay
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setEmail('');
    }, 1000);
  };

  return (
    <section className="max-w-container-max mx-auto px-gutter mb-section-v-space">
      <div className="bg-primary-container text-on-primary-container p-12 md:p-24 rounded-[16px] text-center flex flex-col items-center gap-stack-lg relative overflow-hidden">
        {/* Decorative backdrop shapes */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute -top-1/2 -left-1/4 w-[1000px] h-[1000px] bg-white rounded-full mix-blend-overlay blur-3xl"></div>
        </div>

        {subscribed ? (
          <div className="relative z-10 flex flex-col items-center gap-4 py-6 animate-scale">
            <CheckCircle2 className="w-16 h-16 text-white mb-2" />
            <h3 className="font-headline-section text-headline-section text-white">You're on the list!</h3>
            <p className="font-body-large text-body-large text-on-primary-container opacity-90 max-w-md">
              Thank you for subscribing. We will send you our next editorial digest on Thursday.
            </p>
          </div>
        ) : (
          <div className="relative z-10 flex flex-col items-center w-full">
            <div className="flex flex-col items-center gap-4 mb-8">
              <h2 className="font-headline-section text-headline-section text-on-primary-container leading-tight">
                {title}
              </h2>
              <p className="font-body-large text-body-large text-on-primary-container opacity-90 max-w-xl leading-relaxed">
                {description}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 w-full max-w-lg">
              <input
                id="newsletter-input"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your business email"
                className="flex-grow px-6 py-4 rounded-[14px] font-body-base text-on-surface bg-white border-none focus:ring-4 focus:ring-primary-fixed outline-none shadow-sm placeholder:text-outline/70"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-on-background text-surface px-8 py-4 rounded-[14px] font-bold hover:bg-on-surface hover:text-surface transition-all whitespace-nowrap active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  'Sign Up Free'
                )}
              </button>
            </form>
            <p className="font-meta-info text-meta-info text-on-primary-container opacity-70 mt-4">
              No advertising. Unsubscribe with a single click at any time.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
