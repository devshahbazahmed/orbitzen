'use client';

import { motion } from 'motion/react';
import SecurityCard from './security-card';
import SupportCard from './support-card';
import IntegrationCard from './integration-card';
import ControlCard from './control-card';
import HardwareCard from './hardware-card';

export default function EnterpriseGrid() {
  return (
    <section className="pb-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="space-y-6"
        >
          {/* Top Row */}
          <div className="grid gap-6 lg:grid-cols-12">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
              className="lg:col-span-8"
            >
              <SecurityCard />
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
              className="lg:col-span-4"
            >
              <SupportCard />
            </motion.div>
          </div>

          {/* Bottom Row */}
          <div className="grid gap-6 lg:grid-cols-12">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
              className="lg:col-span-4"
            >
              <IntegrationCard />
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
              className="lg:col-span-4"
            >
              <ControlCard />
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                show: {
                  opacity: 1,
                  y: 0,
                },
              }}
              className="lg:col-span-4"
            >
              <HardwareCard />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
