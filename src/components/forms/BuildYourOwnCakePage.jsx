import { useMemo, useState } from 'react';
import { LazyMotion, domAnimation, m, useReducedMotion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  budgetOptions,
  deliveryOptions,
  eventTypes,
  quoteRequestDefaults,
  quoteRequestSchema,
} from '../../lib/quoteSchema';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 340, damping: 30 },
  },
};

/* -- Compact field styles -- */
const fieldBase =
  'w-full rounded-lg border border-stone-200/80 bg-white px-3 py-1.5 text-[0.8125rem] leading-5 text-stone-800 shadow-none outline-none transition-all duration-150 placeholder:text-stone-400 focus:border-stone-400 focus:ring-1 focus:ring-stone-200 hover:border-stone-300';

const fieldError =
  'border-rose-300 bg-rose-50/40 focus:border-rose-400 focus:ring-rose-100';

function Field({ error, id, label, hint, optional, children }) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;

  return (
    <label className="flex flex-col gap-1" htmlFor={id}>
      <span className="flex items-baseline gap-1">
        <span className="text-[0.75rem] font-medium text-stone-600">{label}</span>
        {optional ? (
          <span className="text-[0.625rem] text-stone-400">optional</span>
        ) : null}
      </span>
      {children({ describedBy, invalid: Boolean(error) })}
      {hint && !error ? (
        <span id={hintId} className="text-[0.6875rem] leading-3.5 text-stone-400">
          {hint}
        </span>
      ) : null}
      {error ? (
        <span id={errorId} className="text-[0.6875rem] font-medium leading-3.5 text-rose-600" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  );
}

export default function BuildYourOwnCakePage() {
  const shouldReduceMotion = useReducedMotion();
  const [submissionState, setSubmissionState] = useState({ status: 'idle', message: '' });

  const motionProps = useMemo(() => {
    if (shouldReduceMotion) return { initial: false, animate: 'visible' };
    return { initial: 'hidden', animate: 'visible' };
  }, [shouldReduceMotion]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(quoteRequestSchema),
    defaultValues: quoteRequestDefaults,
  });

  const onSubmit = handleSubmit(async (values) => {
    setSubmissionState({ status: 'idle', message: '' });

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.message || 'We could not send your request right now.');
      }

      reset(quoteRequestDefaults);
      setSubmissionState({
        status: 'success',
        message: "Quote sent! We'll get back to you soon.",
      });
    } catch (error) {
      setSubmissionState({
        status: 'error',
        message: error.message || 'We could not send your request right now.',
      });
    }
  });

  const cx = (hasError) => `${fieldBase} ${hasError ? fieldError : ''}`.trim();

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="mx-auto w-full max-w-lg px-4 pb-12 pt-24 sm:px-5 sm:pt-28"
        variants={containerVariants}
        {...motionProps}
      >
        {/* Header */}
        <m.div className="mb-4 text-center" variants={itemVariants}>
          <h1 className="text-xl font-semibold tracking-[-0.02em] text-stone-900 sm:text-2xl">
            Request a custom cake
          </h1>
          <p className="mt-1 text-[0.8125rem] text-stone-500">
            Tell us the basics — we'll reply with a quote within 24h.
          </p>
        </m.div>

        {/* Form card */}
        <m.div
          className="overflow-hidden rounded-xl border border-stone-200/70 bg-white"
          variants={itemVariants}
        >
          <form onSubmit={onSubmit} noValidate>

            {/* About you */}
            <div className="space-y-3 px-4 py-4 sm:px-5">
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-stone-400">About you</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <Field id="quote-name" label="Name" error={errors.name?.message}>
                  {({ describedBy, invalid }) => (
                    <input id="quote-name" type="text" autoComplete="name" className={cx(errors.name)} placeholder="Full name" aria-invalid={invalid} aria-describedby={describedBy} {...register('name')} />
                  )}
                </Field>
                <Field id="quote-email" label="Email" error={errors.email?.message}>
                  {({ describedBy, invalid }) => (
                    <input id="quote-email" type="email" autoComplete="email" className={cx(errors.email)} placeholder="name@example.com" aria-invalid={invalid} aria-describedby={describedBy} {...register('email')} />
                  )}
                </Field>
              </div>
              <Field id="quote-phone" label="Phone" error={errors.phone?.message}>
                {({ describedBy, invalid }) => (
                  <input id="quote-phone" type="tel" autoComplete="tel" className={`${cx(errors.phone)} sm:max-w-[48%]`} placeholder="(305) 555-0147" aria-invalid={invalid} aria-describedby={describedBy} {...register('phone')} />
                )}
              </Field>
            </div>

            <hr className="border-stone-100" />

            {/* Event */}
            <div className="space-y-3 px-4 py-4 sm:px-5">
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-stone-400">Event</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <Field id="quote-event-type" label="Occasion" error={errors.eventType?.message}>
                  {({ describedBy, invalid }) => (
                    <select id="quote-event-type" className={cx(errors.eventType)} aria-invalid={invalid} aria-describedby={describedBy} {...register('eventType')}>
                      {eventTypes.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  )}
                </Field>
                <Field id="quote-date" label="Date" error={errors.eventDate?.message}>
                  {({ describedBy, invalid }) => (
                    <input id="quote-date" type="date" className={cx(errors.eventDate)} aria-invalid={invalid} aria-describedby={describedBy} {...register('eventDate')} />
                  )}
                </Field>
                <Field id="quote-servings" label="Guests" error={errors.servings?.message}>
                  {({ describedBy, invalid }) => (
                    <input id="quote-servings" type="text" className={cx(errors.servings)} placeholder="~25" aria-invalid={invalid} aria-describedby={describedBy} {...register('servings')} />
                  )}
                </Field>
                <Field id="quote-budget" label="Budget" error={errors.budget?.message}>
                  {({ describedBy, invalid }) => (
                    <select id="quote-budget" className={cx(errors.budget)} aria-invalid={invalid} aria-describedby={describedBy} {...register('budget')}>
                      {budgetOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  )}
                </Field>
              </div>
              <Field id="quote-fulfillment" label="Pickup or delivery" error={errors.fulfillment?.message}>
                {({ describedBy, invalid }) => (
                  <select id="quote-fulfillment" className={`${cx(errors.fulfillment)} sm:max-w-[48%]`} aria-invalid={invalid} aria-describedby={describedBy} {...register('fulfillment')}>
                    {deliveryOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                )}
              </Field>
            </div>

            <hr className="border-stone-100" />

            {/* Cake vision */}
            <div className="space-y-3 px-4 py-4 sm:px-5">
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-stone-400">Your cake</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <Field id="quote-flavor" label="Flavor idea" error={errors.flavor?.message}>
                  {({ describedBy, invalid }) => (
                    <input id="quote-flavor" type="text" className={cx(errors.flavor)} placeholder="Vanilla, Nutella…" aria-invalid={invalid} aria-describedby={describedBy} {...register('flavor')} />
                  )}
                </Field>
                <Field id="quote-inspiration" label="Inspiration link" optional error={errors.inspirationLink?.message}>
                  {({ describedBy, invalid }) => (
                    <input id="quote-inspiration" type="url" className={cx(errors.inspirationLink)} placeholder="Pinterest / Instagram" aria-invalid={invalid} aria-describedby={describedBy} {...register('inspirationLink')} />
                  )}
                </Field>
              </div>
              <Field id="quote-details" label="Design details" hint="Colors, theme, tiers, wording, allergies." error={errors.details?.message}>
                {({ describedBy, invalid }) => (
                  <textarea id="quote-details" rows="3" className={`${cx(errors.details)} min-h-[4.5rem] resize-y`} placeholder="Describe the look you want…" aria-invalid={invalid} aria-describedby={describedBy} {...register('details')} />
                )}
              </Field>
            </div>

            <hr className="border-stone-100" />

            {/* Footer */}
            <div className="flex flex-col gap-3 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <div aria-live="polite" aria-atomic="true" className="min-h-4 text-[0.75rem]">
                {submissionState.status === 'success' ? (
                  <p className="font-medium text-emerald-700">{submissionState.message}</p>
                ) : null}
                {submissionState.status === 'error' ? (
                  <p className="font-medium text-rose-600">{submissionState.message}</p>
                ) : null}
              </div>
              <m.button
                type="submit"
                whileHover={shouldReduceMotion ? undefined : { y: -1 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                className="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-lg bg-stone-900 px-4 text-[0.75rem] font-semibold text-white transition hover:bg-stone-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="h-3 w-3 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-20" />
                      <path d="M12 2a10 10 0 019.95 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    Sending…
                  </>
                ) : 'Request quote'}
              </m.button>
            </div>
          </form>
        </m.div>

        {/* Note + trust */}
        <m.div className="mt-3 space-y-2 text-center" variants={itemVariants}>
          <p className="text-[0.6875rem] text-stone-400">
            <span className="text-amber-600">⚠</span>{' '}We do not work with Beso de Angel cakes.
          </p>
          <p className="text-[0.625rem] text-stone-400">
            We typically respond within 24 hours · Your info stays private
          </p>
        </m.div>
      </m.div>
    </LazyMotion>
  );
}
