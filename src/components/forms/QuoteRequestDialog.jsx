import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { AnimatePresence, LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  budgetOptions,
  deliveryOptions,
  eventTypes,
  quoteRequestDefaults,
  quoteRequestSchema,
} from '../../lib/quoteSchema';

const backdropVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

const panelVariants = {
  closed: {
    opacity: 0,
    y: 24,
    scale: 0.98,
  },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 320,
      damping: 28,
      mass: 0.85,
      staggerChildren: 0.04,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, y: 12 },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 360,
      damping: 28,
    },
  },
};

const formCardClassName =
  'min-h-11 rounded-[1.15rem] border border-[#eadfdc] bg-white/92 px-3.5 py-3 text-sm text-stone-900 shadow-[0_10px_24px_rgba(155,109,109,0.08)] outline-none transition placeholder:text-stone-400 focus:border-[#d9a5ad] focus:bg-white focus:ring-4 focus:ring-[#f4d7dc]';

function Field({ className = '', error, id, label, hint, children }) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;

  return (
    <label className={`flex flex-col gap-2 ${className}`.trim()} htmlFor={id}>
      <span className="text-[0.95rem] font-semibold tracking-[-0.01em] text-stone-800">{label}</span>
      {children({ describedBy, invalid: Boolean(error) })}
      {hint ? (
        <span id={hintId} className="text-[0.8rem] leading-6 text-stone-500">
          {hint}
        </span>
      ) : null}
      {error ? (
        <span id={errorId} className="text-sm font-medium text-rose-700" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}

function getMotionProps(shouldReduceMotion) {
  if (shouldReduceMotion) {
    return {
      initial: false,
      animate: 'open',
      exit: 'closed',
      transition: { duration: 0 },
    };
  }

  return {
    initial: 'closed',
    animate: 'open',
    exit: 'closed',
  };
}

export default function QuoteRequestDialog({ isOpen, onClose }) {
  const shouldReduceMotion = useReducedMotion();
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const titleId = useId();
  const descriptionId = useId();
  const [submissionState, setSubmissionState] = useState({
    status: 'idle',
    message: '',
  });

  const motionProps = useMemo(() => getMotionProps(shouldReduceMotion), [shouldReduceMotion]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(quoteRequestSchema),
    defaultValues: quoteRequestDefaults,
  });

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }

      if (event.key !== 'Tab' || !dialogRef.current) {
        return;
      }

      const focusableElements = dialogRef.current.querySelectorAll(
        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      if (!focusableElements.length) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, shouldReduceMotion ? 0 : 120);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, shouldReduceMotion]);

  useEffect(() => {
    if (isOpen) {
      setSubmissionState({ status: 'idle', message: '' });
    }
  }, [isOpen]);

  const onSubmit = handleSubmit(async (values) => {
    setSubmissionState({ status: 'idle', message: '' });

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const responseText = await response.text();
      const payload = responseText ? JSON.parse(responseText) : {};

      if (!response.ok) {
        throw new Error(payload.message || 'We could not send your request right now.');
      }

      reset(quoteRequestDefaults);
      setSubmissionState({
        status: 'success',
        message: 'Your quote request was sent successfully. We will get back to you soon.',
      });
    } catch (error) {
      setSubmissionState({
        status: 'error',
        message: error.message || 'We could not send your request right now.',
      });
    }
  });

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isOpen ? (
          <m.div
              aria-hidden={!isOpen}
              className="fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto bg-[rgba(72,50,59,0.34)] px-3 py-4 backdrop-blur-xl sm:px-5 sm:py-8"
              variants={backdropVariants}
              {...motionProps}
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                  onClose();
                }
              }}
            >
            <m.section
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                aria-describedby={descriptionId}
                className="relative w-full max-w-4xl overflow-hidden rounded-[1.6rem] border border-white/65 bg-[linear-gradient(145deg,rgba(255,251,251,0.97),rgba(255,245,245,0.96)_45%,rgba(251,241,238,0.96))] shadow-[0_30px_90px_rgba(84,54,60,0.24)]"
                variants={panelVariants}
                layout
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.95),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(233,190,198,0.28),_transparent_26%)]" />
                <div className="relative grid md:grid-cols-[0.84fr_1fr]">
              <m.div
                    className="relative overflow-hidden bg-[linear-gradient(160deg,#8f6268_0%,#b48189_42%,#d8b0b7_100%)] px-5 py-6 text-white sm:px-6 sm:py-7"
                    variants={itemVariants}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.28),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(255,244,245,0.22),_transparent_30%)]" />
                    <div className="relative">
                      <span className="inline-flex rounded-full border border-white/25 bg-white/14 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/82 backdrop-blur-sm">
                        Custom cake inquiry
                      </span>
                      <h2
                        id={titleId}
                        className="mt-4 max-w-xs text-2xl font-semibold leading-tight tracking-[-0.03em] text-balance sm:max-w-sm sm:text-[2rem]"
                      >
                        Let's shape a cake proposal that feels made for your celebration.
                      </h2>
                      <p id={descriptionId} className="mt-4 max-w-sm text-sm leading-6 text-white/78">
                        Share your date, guest count, flavor ideas, and inspiration. We will use
                        those details to prepare a quote that feels clear, personal, and easy to
                        review.
                      </p>

                      <div className="mt-7 grid gap-3 text-sm text-white/85 sm:grid-cols-2 md:grid-cols-1">
                        <div className="rounded-[1.15rem] border border-white/18 bg-white/10 p-3.5 backdrop-blur-md">
                          <p className="text-[11px] uppercase tracking-[0.24em] text-white/58">What happens next</p>
                          <p className="mt-1.5 text-sm font-medium sm:text-[0.95rem]">You get a thoughtful follow-up by email</p>
                        </div>
                        <div className="rounded-[1.15rem] border border-white/18 bg-white/10 p-3.5 backdrop-blur-md">
                          <p className="text-[11px] uppercase tracking-[0.24em] text-white/58">Planning support</p>
                          <p className="mt-1.5 text-sm font-medium sm:text-[0.95rem]">Pickup and delivery details can be included</p>
                        </div>
                      </div>
                    </div>
                  </m.div>

              <m.div className="relative px-5 py-6 sm:px-6 sm:py-7" variants={itemVariants}>
                    <button
                      ref={closeButtonRef}
                      type="button"
                      onClick={onClose}
                      className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#ebd8dc] bg-white/92 text-stone-600 shadow-[0_8px_20px_rgba(124,86,92,0.12)] transition hover:-translate-y-0.5 hover:border-[#d8b2b9] hover:bg-white hover:text-stone-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d9a5ad] focus-visible:ring-offset-2"
                      aria-label="Close quote request form"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      >
                        <path d="M6 6 18 18" />
                        <path d="M18 6 6 18" />
                      </svg>
                    </button>

                    <form className="grid gap-4 pt-8" onSubmit={onSubmit} noValidate>
                      <m.div className="space-y-2" variants={itemVariants}>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b07d86]">
                            Quote details
                          </p>
                          <h3 className="mt-1.5 text-xl font-semibold tracking-[-0.03em] text-stone-900 sm:text-2xl">
                            Request your custom cake quote
                          </h3>
                        </div>
                        <p className="max-w-lg text-sm leading-6 text-stone-500">
                          Fill in the essentials below and we will come back with availability,
                          pricing guidance, and next steps.
                        </p>
                      </m.div>

                    <m.div className="grid gap-4 sm:grid-cols-2" variants={itemVariants}>
                      <Field id="quote-name" label="Your name" error={errors.name?.message}>
                        {({ describedBy, invalid }) => (
                        <input
                          id="quote-name"
                          type="text"
                          autoComplete="name"
                          className={formCardClassName}
                          placeholder="How should we address you?"
                          aria-invalid={invalid}
                          aria-describedby={describedBy}
                          {...register('name')}
                        />
                        )}
                      </Field>

                      <Field id="quote-email" label="Best email" error={errors.email?.message}>
                        {({ describedBy, invalid }) => (
                        <input
                          id="quote-email"
                          type="email"
                          autoComplete="email"
                          className={formCardClassName}
                          placeholder="name@example.com"
                          aria-invalid={invalid}
                          aria-describedby={describedBy}
                          {...register('email')}
                        />
                        )}
                      </Field>
                    </m.div>

                    <m.div className="grid gap-4 sm:grid-cols-2" variants={itemVariants}>
                      <Field id="quote-phone" label="Phone number" error={errors.phone?.message}>
                        {({ describedBy, invalid }) => (
                        <input
                          id="quote-phone"
                          type="tel"
                          autoComplete="tel"
                          className={formCardClassName}
                          placeholder="(305) 555-0147"
                          aria-invalid={invalid}
                          aria-describedby={describedBy}
                          {...register('phone')}
                        />
                        )}
                      </Field>

                      <Field id="quote-date" label="Celebration date" error={errors.eventDate?.message}>
                        {({ describedBy, invalid }) => (
                        <input
                          id="quote-date"
                          type="date"
                          className={formCardClassName}
                          aria-invalid={invalid}
                          aria-describedby={describedBy}
                          {...register('eventDate')}
                        />
                        )}
                      </Field>
                    </m.div>

                    <m.div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3" variants={itemVariants}>
                      <Field id="quote-event-type" label="Occasion" error={errors.eventType?.message}>
                        {({ describedBy, invalid }) => (
                        <select
                          id="quote-event-type"
                          className={formCardClassName}
                          aria-invalid={invalid}
                          aria-describedby={describedBy}
                          {...register('eventType')}
                        >
                          {eventTypes.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        )}
                      </Field>

                      <Field id="quote-servings" label="Guest count" error={errors.servings?.message}>
                        {({ describedBy, invalid }) => (
                        <input
                          id="quote-servings"
                          type="text"
                          className={formCardClassName}
                          placeholder="Around 25 guests"
                          aria-invalid={invalid}
                          aria-describedby={describedBy}
                          {...register('servings')}
                        />
                        )}
                      </Field>

                      <Field id="quote-fulfillment" label="Pickup or delivery" error={errors.fulfillment?.message}>
                        {({ describedBy, invalid }) => (
                        <select
                          id="quote-fulfillment"
                          className={formCardClassName}
                          aria-invalid={invalid}
                          aria-describedby={describedBy}
                          {...register('fulfillment')}
                        >
                          {deliveryOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        )}
                      </Field>
                    </m.div>

                    <m.div className="grid gap-4 sm:grid-cols-2" variants={itemVariants}>
                      <Field id="quote-flavor" label="Preferred flavor" error={errors.flavor?.message}>
                        {({ describedBy, invalid }) => (
                        <input
                          id="quote-flavor"
                          type="text"
                          className={formCardClassName}
                          placeholder="Vanilla bean with strawberry filling"
                          aria-invalid={invalid}
                          aria-describedby={describedBy}
                          {...register('flavor')}
                        />
                        )}
                      </Field>

                      <Field id="quote-budget" label="Estimated budget" error={errors.budget?.message}>
                        {({ describedBy, invalid }) => (
                        <select
                          id="quote-budget"
                          className={formCardClassName}
                          aria-invalid={invalid}
                          aria-describedby={describedBy}
                          {...register('budget')}
                        >
                          {budgetOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        )}
                      </Field>
                    </m.div>

                    <m.div variants={itemVariants}>
                      <Field
                        id="quote-inspiration"
                        label="Inspiration link"
                        hint="Optional. Share a Pinterest board, Instagram post, or any image link that matches your vision."
                        error={errors.inspirationLink?.message}
                      >
                        {({ describedBy, invalid }) => (
                        <input
                          id="quote-inspiration"
                          type="url"
                          className={formCardClassName}
                          placeholder="https://your-inspiration-link.com"
                          aria-invalid={invalid}
                          aria-describedby={describedBy}
                          {...register('inspirationLink')}
                        />
                        )}
                      </Field>
                    </m.div>

                    <m.div variants={itemVariants}>
                      <Field
                        id="quote-details"
                        label="Cake design details"
                        hint="Include colors, theme, wording, tiers, preferred decorations, allergies, or delivery notes."
                        error={errors.details?.message}
                      >
                        {({ describedBy, invalid }) => (
                        <textarea
                          id="quote-details"
                          rows="6"
                          className={`${formCardClassName} min-h-32 resize-y rounded-[1.35rem]`}
                          placeholder="Tell us about the style, colors, message on the cake, flavors, and anything you want us to keep in mind."
                          aria-invalid={invalid}
                          aria-describedby={describedBy}
                          {...register('details')}
                        />
                        )}
                      </Field>
                    </m.div>

                    <m.div
                      className="flex flex-col gap-4 border-t border-[#efdfdf] pt-4 sm:flex-row sm:items-center sm:justify-between"
                      variants={itemVariants}
                    >
                      <div
                        aria-live="polite"
                        aria-atomic="true"
                        className="min-h-6 text-sm"
                      >
                        {submissionState.status === 'success' ? (
                          <p className="font-medium text-emerald-700">{submissionState.message}</p>
                        ) : null}
                        {submissionState.status === 'error' ? (
                          <p className="font-medium text-rose-700">{submissionState.message}</p>
                        ) : null}
                      </div>

                      <div className="flex flex-col gap-2.5 sm:flex-row">
                        <button
                          type="button"
                          onClick={onClose}
                          className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#e7d5d8] bg-white/70 px-4.5 py-2.5 text-sm font-semibold text-stone-700 transition hover:border-[#d8b2b9] hover:bg-white hover:text-stone-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d9a5ad] focus-visible:ring-offset-2"
                        >
                          Cancel
                        </button>
                        <m.button
                          type="submit"
                          whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                          whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                          className="inline-flex min-h-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#cf8f98,#b86d78)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(184,109,120,0.24)] transition hover:shadow-[0_20px_38px_rgba(184,109,120,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d9a5ad] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Sending your request...' : 'Request my quote'}
                        </m.button>
                      </div>
                    </m.div>
                  </form>
                </m.div>
              </div>
            </m.section>
          </m.div>
        ) : null}
      </AnimatePresence>
    </LazyMotion>
  );
}
