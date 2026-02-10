'use client';

import { useState } from 'react';
import { MessageSquare, Video, BookOpen, Play, Calendar, Clock, CheckCircle, Loader2 } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { X402Payment } from '../components/X402Payment';
import { useAccount } from 'wagmi';

export default function ConsultingPage() {
  const { isConnected } = useAccount();
  const [isRunning, setIsRunning] = useState(false);
  const [scheduledInfo, setScheduledInfo] = useState<any>(null);
  const [selectedService, setSelectedService] = useState<'consult' | 'audit' | 'training' | null>(null);
  const [notes, setNotes] = useState('');

  const consultingServices = [
    {
      id: 'consult',
      title: 'Live Consultation',
      description: 'One-on-one video consultation with AI expert',
      icon: Video,
      price: '25 USDC',
      duration: '30 min',
      features: ['Live video call', 'Screen sharing', 'Recording'],
    },
    {
      id: 'audit',
      title: 'System Audit',
      description: 'Comprehensive AI system analysis & recommendations',
      icon: BookOpen,
      price: '50 USDC',
      duration: '2-3 days',
      features: ['Deep analysis', 'Security review', 'Action plan'],
    },
    {
      id: 'training',
      title: 'Team Training',
      description: 'Custom AI training for your team',
      icon: MessageSquare,
      price: '100 USDC',
      duration: '1 hour',
      features: ['Custom curriculum', 'Live demo', 'Q&A'],
    },
  ];

  const handleRun = (serviceId: string) => {
    setSelectedService(serviceId as 'consult' | 'audit' | 'training');
  };

  const handlePaymentSuccess = (response: unknown) => {
    setIsRunning(true);
    setTimeout(() => {
      setScheduledInfo({
        status: 'confirmed',
        service: consultingServices.find((s) => s.id === selectedService),
        timestamp: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
        confirmationId: `CONS-${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
      });
      setIsRunning(false);
      setSelectedService(null);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-shell-950 texture-grid">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-crab-600/20 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-crab-400" />
            </div>
            <div>
              <h1 className="font-display text-2xl sm:text-3xl text-white">AI Consulting</h1>
              <p className="text-gray-400 text-sm">Expert guidance for AI implementation</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Services */}
          <div className="lg:col-span-2 space-y-6">
            {/* Service Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {consultingServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className={`panel-retro p-6 transition-all cursor-pointer border-2 ${
                      selectedService === service.id && selectedService
                        ? 'border-crab-500 bg-crab-950/30'
                        : 'border-transparent hover:border-shell-700'
                    }`}
                    onClick={() => !isRunning && handleRun(service.id)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-crab-600/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-crab-400" />
                      </div>
                      <span className="text-crab-400 font-display text-sm">
                        {service.price}
                      </span>
                    </div>

                    <h3 className="font-display text-lg text-white mb-2">
                      {service.title}
                    </h3>

                    <p className="text-sm text-gray-400 mb-3">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                      <Clock className="w-3 h-3" />
                      <span>{service.duration}</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-1 bg-shell-800 rounded text-xs text-gray-500"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <button className="btn-retro w-full flex items-center justify-center gap-2">
                      {isRunning && selectedService === service.id ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : scheduledInfo && scheduledInfo.service?.id === service.id ? (
                        <>
                          <CheckCircle className="w-4 h-4 text-neon-mint" />
                          <span>Scheduled</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4" />
                          <span>Book {service.title}</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Session Notes */}
            {selectedService && (
              <div className="panel-retro p-6">
                <h3 className="font-display text-lg text-white mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-crab-400" />
                  Session Notes
                </h3>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Describe your project, goals, pain points, or specific questions you'd like to address in the session..."
                  className="w-full h-32 bg-shell-800 border-2 border-shell-700 rounded-lg p-4 text-white placeholder-gray-500 focus:outline-none focus:border-crab-500 transition-colors resize-none"
                />
                <p className="text-xs text-gray-500 mt-2">
                  {notes.length}/500 characters
                </p>
              </div>
            )}

            {/* Confirmation */}
            {scheduledInfo && (
              <div className="panel-retro p-6 border-neon-mint/30 box-glow-red">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-neon-mint/20 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-neon-mint" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-white">Session Confirmed!</h3>
                    <p className="text-sm text-gray-400">Your consultation has been booked</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-shell-800 rounded-lg">
                    <span className="text-gray-500">Confirmation ID</span>
                    <span className="text-white font-mono">{scheduledInfo.confirmationId}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-shell-800 rounded-lg">
                    <span className="text-gray-500">Service</span>
                    <span className="text-white">{scheduledInfo.service?.title}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-shell-800 rounded-lg">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-white">
                      {new Date(scheduledInfo.timestamp).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Payment */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {/* Payment Info */}
              {selectedService && (
                <div className="panel-retro p-6">
                  <h3 className="font-display text-lg text-white mb-4">
                    Book Session
                  </h3>

                  <div className="p-4 bg-shell-800 rounded-lg mb-6">
                    <p className="text-sm text-gray-400 mb-2">Selected Service:</p>
                    <p className="font-display text-lg text-white mb-2">
                      {consultingServices.find((s) => s.id === selectedService)?.title}
                    </p>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {consultingServices.find((s) => s.id === selectedService)?.duration}
                    </p>
                  </div>

                  {!isConnected ? (
                    <div className="p-4 bg-shell-800 rounded-lg text-center">
                      <p className="text-sm text-gray-400">Connect wallet to book session</p>
                    </div>
                  ) : (
                    <X402Payment
                      amount={consultingServices.find((s) => s.id === selectedService)?.price?.split(' ')[0] || '25'}
                      resource="/api/services/consulting"
                      onSuccess={handlePaymentSuccess}
                      buttonText="Pay & Book Session"
                    />
                  )}
                </div>
              )}

              {/* Process */}
              <div className="panel-retro p-4">
                <h4 className="text-sm text-gray-400 mb-3">How it works:</h4>
                <ol className="text-sm text-gray-500 space-y-3">
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-crab-600/20 flex items-center justify-center text-crab-400 text-xs font-bold flex-shrink-0">
                      1
                    </span>
                    <span>Select your consultation type</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-crab-600/20 flex items-center justify-center text-crab-400 text-xs font-bold flex-shrink-0">
                      2
                    </span>
                    <span>Add session notes (optional)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-crab-600/20 flex items-center justify-center text-crab-400 text-xs font-bold flex-shrink-0">
                      3
                    </span>
                    <span>Pay with crypto via x402</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-crab-600/20 flex items-center justify-center text-crab-400 text-xs font-bold flex-shrink-0">
                      4
                    </span>
                    <span>Receive confirmation & access</span>
                  </li>
                </ol>
              </div>

              {/* Contact */}
              <div className="panel-retro p-4">
                <h4 className="text-sm text-gray-400 mb-2">Need help?</h4>
                <p className="text-sm text-gray-500">
                  Contact support at{' '}
                  <a href="mailto:support@shalohm.co" className="text-crab-400 hover:text-crab-300">
                    support@shalohm.co
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}