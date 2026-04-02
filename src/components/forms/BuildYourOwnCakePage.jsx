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

const sectionVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 280,
      damping: 26,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.02,
    },
  },
};

const fieldClassName =
  'min-h-10 rounded-[1rem] border border-[#efe3e1] bg-[#fffdfc] px-3.5 py-2.5 text-sm text-stone-900 shadow-[0_6px_18px_rgba(155,109,109,0.04)] outline-none transition placeholder:text-stone-400 focus:border-[#d7a9af] focus:bg-white focus:ring-3 focus:ring-[#f7dde1]';

const fieldErrorClassName =
  'border-[#e8b7be] bg-[#fff8f8] focus:border-[#d88f9a] focus:ring-[#f5d7dc]';

function Field({ error, id, label, hint, children }) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;

  return (
    <label className="flex flex-col gap-2" htmlFor={id}>
      <span className="text-[0.92rem] font-semibold tracking-[-0.01em] text-stone-800">{label}</span>
      {children({ describedBy, invalid: Boolean(error) })}
      {hint ? (
        <span id={hintId} className="text-[0.78rem] leading-5 text-stone-500">
          {hint}
        </span>
      ) : null}
      {error ? (
        <span id={errorId} className="text-[0.82rem] font-medium leading-5 text-rose-700" role="alert">
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
    if (shouldReduceMotion) {
      return {
        initial: false,
        animate: 'visible',
      };
    }

    return {
      initial: 'hidden',
      animate: 'visible',
    };
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const payload = await response.json();

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

  const inputClassName = (hasError) =>
    `${fieldClassName} ${hasError ? fieldErrorClassName : ''}`.trim();

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 pb-12 pt-22 sm:px-6 sm:pb-16 sm:pt-26 lg:px-8"
        variants={containerVariants}
        {...motionProps}
      >
        <m.section
          className="overflow-hidden rounded-[1.6rem] border border-[#f4e8e6] bg-[linear-gradient(145deg,#fffdfc,#fff8f7)] shadow-[0_18px_48px_rgba(84,54,60,0.08)]"
          variants={sectionVariants}
        >
          <div className="flex flex-col lg:flex-row">
            <div className="bg-[linear-gradient(160deg,#c9969d_0%,#ddb8bc_52%,#f0d9da_100%)] px-5 py-6 text-white sm:px-6 sm:py-7 lg:flex lg:w-[34%] lg:flex-col lg:justify-between">
              <div>
                <span className="inline-flex rounded-full border border-white/35 bg-white/20 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/90">
                  Quote request
                </span>
                <h1 className="mt-3 max-w-sm text-2xl font-semibold leading-tight tracking-[-0.03em] text-balance sm:text-[2rem]">
                  Share the basics and we will send your cake quote.
                </h1>
                <p className="mt-3 max-w-md text-sm leading-6 text-white/88">
                  A shorter, clearer form with lighter styling and easier mobile scanning.
                </p>

                <div className="mt-5 rounded-[1.1rem] border border-white/30 bg-white/16 p-3 backdrop-blur-sm">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/70">Important</p>
                  <p className="mt-1.5 text-sm font-medium text-white">
                    We do not work with Beso de Angel Cakes.
                  </p>
                </div>
              </div>
            </div>

            <div className="px-5 py-6 sm:px-6 sm:py-7 lg:w-[66%]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#bf8f96]">
                Contact form
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-stone-900 sm:text-2xl">
                Request your custom quote
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-stone-500">
                Tell us when it is, how many guests, your flavor idea, and the look you want.
              </p>
              <form className="mt-5 grid gap-4" onSubmit={onSubmit} noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="quote-name" label="Your name" error={errors.name?.message}>
                {({ describedBy, invalid }) => (
                  <input
                    id="quote-name"
                    type="text"
                    autoComplete="name"
                    className={inputClassName(errors.name)}
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
                    className={inputClassName(errors.email)}
                    placeholder="name@example.com"
                    aria-invalid={invalid}
                    aria-describedby={describedBy}
                    {...register('email')}
                  />
                )}
              </Field>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="quote-phone" label="Phone number" error={errors.phone?.message}>
                {({ describedBy, invalid }) => (
                  <input
                    id="quote-phone"
                    type="tel"
                    autoComplete="tel"
                    className={inputClassName(errors.phone)}
                    placeholder="(305) 555-0147"
                    aria-invalid={invalid}
                    aria-describedby={describedBy}
                    {...register('phone')}
                  />
                )}
              </Field>

              <Field id="quote-date" label="Event date" error={errors.eventDate?.message}>
                {({ describedBy, invalid }) => (
                  <input
                    id="quote-date"
                    type="date"
                    className={inputClassName(errors.eventDate)}
                    aria-invalid={invalid}
                    aria-describedby={describedBy}
                    {...register('eventDate')}
                  />
                )}
              </Field>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="quote-servings" label="Guest count" error={errors.servings?.message}>
                {({ describedBy, invalid }) => (
                  <input
                    id="quote-servings"
                    type="text"
                    className={inputClassName(errors.servings)}
                    placeholder="Around 25 guests"
                    aria-invalid={invalid}
                    aria-describedby={describedBy}
                    {...register('servings')}
                  />
                )}
              </Field>

              <Field id="quote-flavor" label="Flavor idea" error={errors.flavor?.message}>
                {({ describedBy, invalid }) => (
                  <input
                    id="quote-flavor"
                    type="text"
                    className={inputClassName(errors.flavor)}
                    placeholder="Vanilla, Nutella, strawberry filling..."
                    aria-invalid={invalid}
                    aria-describedby={describedBy}
                    {...register('flavor')}
                  />
                )}
              </Field>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <Field id="quote-event-type" label="Occasion" error={errors.eventType?.message}>
                {({ describedBy, invalid }) => (
                  <select
                    id="quote-event-type"
                    className={inputClassName(errors.eventType)}
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

              <Field id="quote-fulfillment" label="Pickup or delivery" error={errors.fulfillment?.message}>
                {({ describedBy, invalid }) => (
                  <select
                    id="quote-fulfillment"
                    className={inputClassName(errors.fulfillment)}
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

              <Field id="quote-budget" label="Estimated budget" error={errors.budget?.message}>
                {({ describedBy, invalid }) => (
                  <select
                    id="quote-budget"
                    className={inputClassName(errors.budget)}
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
            </div>

            <Field
              id="quote-inspiration"
              label="Inspiration link"
              hint="Optional."
              error={errors.inspirationLink?.message}
            >
              {({ describedBy, invalid }) => (
                <input
                  id="quote-inspiration"
                  type="url"
                  className={inputClassName(errors.inspirationLink)}
                  placeholder="Paste a Pinterest or Instagram link"
                  aria-invalid={invalid}
                  aria-describedby={describedBy}
                  {...register('inspirationLink')}
                />
              )}
            </Field>

            <Field
              id="quote-details"
              label="Design details"
              hint="Colors, wording, theme, allergies, tiers, or delivery notes."
              error={errors.details?.message}
            >
              {({ describedBy, invalid }) => (
                <textarea
                  id="quote-details"
                  rows="5"
                  className={`${inputClassName(errors.details)} min-h-32 resize-y rounded-[1.1rem]`}
                  placeholder="Tell us the style, message on the cake, and any important details."
                  aria-invalid={invalid}
                  aria-describedby={describedBy}
                  {...register('details')}
                />
              )}
            </Field>

            <div className="flex flex-col gap-3 border-t border-[#f1e5e3] pt-4 sm:flex-row sm:items-center sm:justify-between">
              <div aria-live="polite" aria-atomic="true" className="min-h-5 text-sm">
                {submissionState.status === 'success' ? (
                  <p className="rounded-full bg-emerald-50 px-3 py-1.5 text-[0.82rem] font-medium text-emerald-700">
                    {submissionState.message}
                  </p>
                ) : null}
                {submissionState.status === 'error' ? (
                  <p className="rounded-full bg-rose-50 px-3 py-1.5 text-[0.82rem] font-medium text-rose-700">
                    {submissionState.message}
                  </p>
                ) : null}
              </div>

              <m.button
                type="submit"
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="inline-flex min-h-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#d59da4,#c37e88)] px-4.5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(195,126,136,0.18)] transition hover:shadow-[0_16px_28px_rgba(195,126,136,0.22)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d9a5ad] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending your request...' : 'Request my quote'}
              </m.button>
            </div>
              </form>
            </div>
          </div>
        </m.section>
      </m.div>
    </LazyMotion>
  );
}
