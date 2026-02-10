import { useState } from 'react';

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Checkout({ isOpen, onClose }: CheckoutProps) {
  const [step, setStep] = useState<'shipping' | 'payment' | 'confirmation'>('shipping');
  const [shippingComplete, setShippingComplete] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const handleShippingComplete = (e: React.FormEvent) => {
    e.preventDefault();
    setShippingComplete(true);
    setTimeout(() => {
      setStep('payment');
    }, 300);
  };

  const handlePaymentComplete = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('confirmation');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl">
        {step === 'confirmation' ? (
          // Confirmation Screen - Welcome Note
          <div className="p-12 md:p-16 text-center min-h-[600px] flex flex-col items-center justify-center">
            {/* Animated Brand Seal */}
            <div className="mb-12 animate-[fadeIn_1s_ease-in-out]">
              <div className="relative w-32 h-32 mx-auto">
                <div className="absolute inset-0 border border-neutral-300 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-4 border border-neutral-300 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p 
                      className="text-3xl text-neutral-900 tracking-tight"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
                    >
                      Q
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 
              className="text-4xl md:text-5xl mb-6 text-neutral-900 animate-[fadeIn_1.2s_ease-in-out]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
            >
              Thank You
            </h2>
            
            <div className="h-px w-24 bg-neutral-300 mx-auto mb-8 animate-[fadeIn_1.4s_ease-in-out]" />
            
            <p className="text-neutral-600 leading-relaxed max-w-md mb-12 animate-[fadeIn_1.6s_ease-in-out]">
              Your selection is being prepared for transit.
            </p>

            <div className="space-y-3 text-sm text-neutral-500 mb-12 animate-[fadeIn_1.8s_ease-in-out]">
              <p>A confirmation has been sent to {formData.email}</p>
              <p>Expected delivery: 3-5 business days</p>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 text-sm tracking-wide uppercase border border-neutral-900 hover:bg-neutral-900 hover:text-white transition-all animate-[fadeIn_2s_ease-in-out]"
            >
              Return to Collection
            </button>
          </div>
        ) : (
          // Shipping & Payment Form
          <div className="p-8 md:p-12">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 
                  className="text-3xl md:text-4xl text-neutral-900"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
                >
                  Checkout
                </h2>
                <button
                  onClick={onClose}
                  className="text-neutral-500 hover:text-neutral-900 transition-colors"
                  aria-label="Close"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="h-px w-full bg-neutral-200" />
            </div>

            {/* Shipping Information */}
            <div className={`transition-all duration-500 ${shippingComplete ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
              <h3 className="text-xl mb-6 text-neutral-900" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Delivery Details
              </h3>
              
              <form onSubmit={handleShippingComplete} className="space-y-6">
                <div>
                  <label className="block text-sm text-neutral-600 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 bg-white focus:outline-none focus:border-neutral-900 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-neutral-600 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 bg-white focus:outline-none focus:border-neutral-900 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-neutral-600 mb-2">Delivery Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 bg-white focus:outline-none focus:border-neutral-900 transition-colors"
                    placeholder="Street address"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-neutral-600 mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 bg-white focus:outline-none focus:border-neutral-900 transition-colors"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-600 mb-2">Postal Code</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 bg-white focus:outline-none focus:border-neutral-900 transition-colors"
                      placeholder="Postal code"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-neutral-600 mb-2">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 bg-white focus:outline-none focus:border-neutral-900 transition-colors"
                    placeholder="Country"
                  />
                </div>

                {!shippingComplete && (
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-neutral-900 text-white text-sm tracking-wide uppercase hover:bg-neutral-800 transition-colors"
                  >
                    Continue to Payment
                  </button>
                )}
              </form>
            </div>

            {/* Payment Section - Soft Focus Reveal */}
            <div 
              className={`transition-all duration-700 ease-out ${
                step === 'payment' 
                  ? 'opacity-100 max-h-[2000px] mt-12' 
                  : 'opacity-0 max-h-0 overflow-hidden'
              }`}
            >
              <div className="h-px w-full bg-neutral-200 mb-8" />
              
              <h3 className="text-xl mb-6 text-neutral-900" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Payment Information
              </h3>

              <form onSubmit={handlePaymentComplete} className="space-y-6">
                <div>
                  <label className="block text-sm text-neutral-600 mb-2">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                    maxLength={19}
                    className="w-full px-4 py-3 border border-neutral-300 bg-white focus:outline-none focus:border-neutral-900 transition-colors"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>

                <div>
                  <label className="block text-sm text-neutral-600 mb-2">Cardholder Name</label>
                  <input
                    type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 bg-white focus:outline-none focus:border-neutral-900 transition-colors"
                    placeholder="Name on card"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-neutral-600 mb-2">Expiry Date</label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      required
                      maxLength={5}
                      className="w-full px-4 py-3 border border-neutral-300 bg-white focus:outline-none focus:border-neutral-900 transition-colors"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-600 mb-2">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      required
                      maxLength={3}
                      className="w-full px-4 py-3 border border-neutral-300 bg-white focus:outline-none focus:border-neutral-900 transition-colors"
                      placeholder="123"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-neutral-900 text-white text-sm tracking-wide uppercase hover:bg-neutral-800 transition-colors"
                >
                  Complete Acquisition
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
