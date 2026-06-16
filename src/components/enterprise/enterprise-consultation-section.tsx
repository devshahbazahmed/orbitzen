'use client';

import { motion } from 'motion/react';
import { enterpriseBenefits } from '@/data/enterprise';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ConsultationSection() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-white/3
            backdrop-blur-xl
            p-8
            lg:p-12
          "
        >
          {/* Background Glow */}
          <motion.div
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="
              absolute
              left-1/2
              top-1/2
              h-125
              w-125
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-blue-600/10
              blur-[140px]
            "
          />

          <div className="relative z-10 grid gap-12 lg:grid-cols-2">
            {/* Left Side */}
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
              }}
            >
              <div
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-blue-500/20
                  bg-blue-500/10
                  px-4
                  py-2
                "
              >
                <span className="text-xs tracking-[0.25em] uppercase text-[#2E62FF]">
                  Enterprise Consultation
                </span>
              </div>

              <h2 className="mt-8 text-4xl font-bold tracking-tight md:text-5xl">
                Accelerate your
                <span className="block text-[#2E62FF]">digital evolution.</span>
              </h2>

              <p className="mt-6 max-w-xl text-zinc-400 leading-relaxed">
                Work directly with our solutions architects to design a
                deployment strategy tailored to your organization&apos;s
                infrastructure, compliance, and security requirements.
              </p>

              <div className="mt-12 space-y-6">
                {enterpriseBenefits.map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <motion.div
                      key={benefit.title}
                      whileHover={{
                        x: 8,
                      }}
                      className="
                        flex
                        gap-4
                        rounded-2xl
                        border
                        border-white/10
                        bg-black/20
                        p-5
                      "
                    >
                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-blue-500/20
                          bg-blue-500/10
                        "
                      >
                        <Icon className="h-5 w-5 text-[#2E62FF]" />
                      </div>

                      <div>
                        <h3 className="font-semibold">{benefit.title}</h3>

                        <p className="mt-2 text-sm text-zinc-400">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Side Form */}
            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
              }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-black/20
                p-6
                lg:p-8
              "
            >
              <div className="mb-8">
                <h3 className="text-2xl font-semibold">Request Consultation</h3>

                <p className="mt-2 text-sm text-zinc-400">
                  Tell us about your organization and we&apos;ll connect you
                  with the right solutions engineer.
                </p>
              </div>

              <form className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm text-zinc-300">
                    Full Name
                  </label>

                  <Input
                    placeholder="John Doe"
                    className="
                      border-white/10
                      bg-white/5
                    "
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-300">
                    Work Email
                  </label>

                  <Input
                    type="email"
                    placeholder="john@company.com"
                    className="
                      border-white/10
                      bg-white/5
                    "
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-300">
                    Organization
                  </label>

                  <Input
                    placeholder="Acme Inc."
                    className="
                      border-white/10
                      bg-white/5
                    "
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-zinc-300">
                    Technical Inquiry
                  </label>

                  <Textarea
                    rows={6}
                    placeholder="Tell us about your infrastructure, compliance requirements, deployment goals, and expected scale..."
                    className="
                      resize-none
                      border-white/10
                      bg-white/5
                    "
                  />
                </div>

                <Button
                  className="
                    w-full
                    bg-[#3366ff]
                    hover:bg-[#2954d6]
                    p-5
                    text-white
                  "
                >
                  Submit Inquiry
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
